import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import logo from '../../../assets/logos/adbeta.jpeg';

const GetInvitedModal = ({ setShowRegisterModal, modal }) => {
    const [error, setError] = useState(null);

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        setError(null);
        console.log(data);
        fetch("https://dev.nsnco.in/api/v1/auth/register/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password,
                password2: data.password2,
                company: data.company,
                url: data.url,
                phone: data.phone,
                name: data.name
            })
        })
            .then(data => {
                reset();
                setShowRegisterModal(false);
                toast.success("User created successfully!")
            })
            .catch(err => {
                setError(err);
            })
    };

    return (
        <div className={`${modal ? 'fixed' : 'hidden'} z-50 top-0 left-0 bg-black bg-opacity-70 w-full h-screen flex items-center justify-center`}>
            <div className='backdrop-blur-lg bg-white text-white bg-opacity-10 w-11/12 md:w-8/12 rounded-lg p-5 relative h-[85vh] md:h-fit overflow-y-auto'>
                <p onClick={() => setShowRegisterModal(false)} className='absolute top-0 right-0 m-3 mr-4 cursor-pointer font-bold text-lg'>✕</p>
                <h2 className='text-xl font-bold mb-3'>Create A Client Panel</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4 grid grid-cols-1 md:grid-cols-2 items-start gap-3">
                        <div className="space-y-1">
                            <label htmlFor="name" className="block text-sm">Full Name</label>
                            <input type="text" {...register("name", { required: true })} id="name" placeholder="John Doe" className="w-full p-3 border rounded-md bg-black/60 outline-none border-gray-700" data-temp-mail-org="2" />
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="email" className="block text-sm">Email</label>
                            <input type="email" {...register("email", { required: true })} id="email" placeholder="john@example.com" className="w-full p-3 border rounded-md bg-black/60 outline-none border-gray-700" data-temp-mail-org="2" />
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="phone" className="block text-sm">Phone</label>
                            <input type="phone" {...register("phone", { required: true })} id="phone" placeholder="+91*********" className="w-full p-3 border rounded-md bg-black/60 outline-none border-gray-700" data-temp-mail-org="2" />
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="company" className="block text-sm">Company</label>
                            <input type="company" {...register("company", { required: true })} id="company" placeholder="Microsoft" className="w-full p-3 border rounded-md bg-black/60 outline-none border-gray-700" data-temp-mail-org="2" />
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="url" className="block text-sm">Company Website</label>
                            <input type="url" {...register("url", { required: true })} id="url" placeholder="microsoft.com" className="w-full p-3 border rounded-md bg-black/60 outline-none border-gray-700" data-temp-mail-org="2" />
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="password" className="text-sm">Password</label>
                            <input type="password" {...register("password", { required: true })} id="password" placeholder="*****" className="w-full p-3 border rounded-md bg-black/60 outline-none border-gray-700" />
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="password2" className="text-sm">Confirm Password</label>
                            <input type="password" {...register("password2", { required: true })} id="password2" placeholder="*****" className="w-full p-3 border rounded-md bg-black/60 outline-none border-gray-700" />
                        </div>
                    </div>
                    <button type="submit" className="w-fit px-5 py-1.5 font-medium rounded-md bg-white hover:bg-white active:scale-95 duration-150 text-black">Sign up</button>
                    <button type="reset" className="ml-2 w-fit px-5 py-1.5 font-medium rounded-md bg-gray-500 hover:bg-gray-600 active:scale-95 duration-150 text-white">Reset</button>

                    {
                        error && <p className='text-red-300 text-sm mt-3'>{error}</p>
                    }
                </form>
            </div>
        </div>
    );
};

export default GetInvitedModal;