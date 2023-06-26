import { useState } from 'react';
import reading from '../../assets/icon/reading.png';
import commerce from '../../assets/icon/commerce.png';
import employment from '../../assets/icon/employment.png';
import energy from '../../assets/icon/energy.png';
import gender from '../../assets/icon/gender.png';
import skill from '../../assets/icon/skill.png';
import tree from '../../assets/icon/tree.png';
import PlayInviteModal from './Components/PlayInviteModal';
import adbhutGIF from '../../assets/logos/adbhutGIF.gif';
import { AnimatePresence } from 'framer-motion';
import GetInvitedModal from './Components/GetInvitedModal';

const Hero = () => {
    const [playInviteModal, setPlayInviteModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    return (
        <section className='w-11/12 max-w-screen-xl mx-auto md:px-10 xl:px-0 min-h-[800px] sm:min-h-[700px] md:min-h-[600px] flex items-center pt-10 relative'>
            <div>
                <p className='w-full lg:w-7/12 text-lg md:text-xl xl:text-2xl mt-16'>
                    We invite you to join us and take part in this moment for change. Driven by our GenZs, The Happy Hippies Show is a web series of discussions by the leaders, on these social themes.
                </p>
                <div className='w-full lg:w-1/2 grid grid-cols-3 sm:grid-cols-4 gap-px py-3 rounded-lg'>
                    <div className='text-center flex flex-col items-center justify-center h-[100px] bg-purple-700 bg-opacity-40 px-2 gap-1'>
                        <div>
                            <img className='w-8 mx-auto' src={reading} alt="" />
                        </div>
                        <p className='opacity-75 text-sm'>Child Education</p>
                    </div>
                    <div className='text-center flex flex-col items-center justify-center h-[100px] bg-purple-700 bg-opacity-40 px-2 gap-1'>
                        <div>
                            <img className='w-8 mx-auto' src={commerce} alt="" />
                        </div>
                        <p className='opacity-75 text-sm'>Cause Driven Consumerism</p>
                    </div>
                    <div className='text-center flex flex-col items-center justify-center h-[100px] bg-purple-700 bg-opacity-40 px-2 gap-1'>
                        <div>
                            <img className='w-8 mx-auto' src={employment} alt="" />
                        </div>
                        <p className='opacity-75 text-sm'>Employement Generation</p>
                    </div>
                    <div className='text-center flex flex-col items-center justify-center h-[100px] bg-purple-700 bg-opacity-40 px-2 gap-1'>
                        <div>
                            <img className='w-8 mx-auto' src={energy} alt="" />
                        </div>
                        <p className='opacity-75 text-sm'>Renewable Energy Adoption</p>
                    </div>
                    <div className='text-center flex flex-col items-center justify-center h-[100px] bg-purple-700 bg-opacity-40 px-2 gap-1'>
                        <div>
                            <img className='w-8 mx-auto' src={gender} alt="" />
                        </div>
                        <p className='opacity-75 text-sm'>Gender Inclusivity</p>
                    </div>
                    <div className='text-center flex flex-col items-center justify-center h-[100px] bg-purple-700 bg-opacity-40 px-2 gap-1'>
                        <div>
                            <img className='w-8 mx-auto' src={skill} alt="" />
                        </div>
                        <p className='opacity-75 text-sm'>Skill Training</p>
                    </div>
                    <div className='text-center flex flex-col items-center justify-center h-[100px] bg-purple-700 bg-opacity-40 px-2 gap-1'>
                        <div>
                            <img className='w-8 mx-auto' src={tree} alt="" />
                        </div>
                        <p className='opacity-75 text-sm'>Tree Plantation</p>
                    </div>
                </div>
                <div className='flex gap-3 mt-5 text-purple-900 text-sm flex-wrap'>
                    <button onClick={() => setPlayInviteModal(true)} className='shake bg-white shadow-lg duration-100 font-bold shadow-purple-300/100 px-3 py-2 rounded hover:bg-inherit border-4 border-white hover:text-white'>Play Invite</button>
                    <a target="_blank" href="https://adbhut.io/">
                        <button className='h-full'>
                            <img className='w-24 h-full rounded-sm hover:shadow-lg hover:shadow-purple-500/100' src={adbhutGIF} alt="" />
                        </button>
                    </a>
                    <button onClick={() => setShowRegisterModal(true)} className='bg-white duration-100 font-bold hover:shadow-lg hover:shadow-purple-500/100 px-3 py-2 rounded hover:bg-inherit border-4 border-white hover:text-white'>Get Invite</button>
                    <a target="_blank" href="https://www.linkedin.com/company/the-happy-hippies-show/jobs/">
                        <button className='h-full bg-white duration-100 font-bold hover:shadow-lg hover:shadow-purple-500/100 px-3 py-2 rounded hover:bg-inherit border-4 border-white hover:text-white'>We Are Hiring</button>
                    </a>
                </div>
                <div className='lg:hidden my-10 text-sm bg-white bg-opacity-60 text-black p-4'>
                    <h2 className='text-lg text-purple-900'>#GreenProject</h2>
                    Green project, promises a carbon neutral future, for our children. We need to start. And we have.
                    We are planting trees for every content sale happening via <a className="hover:underline" target="_blank" href="adbhut.io">Adbhut.io</a>, mitigating its carbon footprint. To promote this in entertainment content business further, we are launching Green Project. A web talk show, around green covers, its value for us, and more. Brought to you by <a className="hover:underline" target="_blank" href="adbhut.io">Adbhut.io</a>.
                    Here young leaders, evolved audiences meet, and discuss the way forward for our generations. On content, on green surroundings, and more on evolving trends. Green project is to bring to light the need of conscious thinking.
                </div>
            </div>

            <div className='hidden lg:block absolute top-1/2 right-0 w-[500px] text-sm bg-white bg-opacity-60 text-black p-4'>
                <h2 className='text-lg text-purple-900'>#GreenProject</h2>
                Green project, promises a carbon neutral future, for our children. We need to start. And we have.
                We are planting trees for every content sale happening via <a className="hover:underline" target="_blank" href="adbhut.io">Adbhut.io</a>, mitigating its carbon footprint. To promote this in entertainment content business further, we are launching Green Project. A web talk show, around green covers, its value for us, and more. Brought to you by <a className="hover:underline" target="_blank" href="adbhut.io">Adbhut.io</a>.
                Here young leaders, evolved audiences meet, and discuss the way forward for our generations. On content, on green surroundings, and more on evolving trends. Green project is to bring to light the need of conscious thinking.
            </div>

            {
                playInviteModal &&
                <PlayInviteModal
                    modal={playInviteModal}
                    setModal={setPlayInviteModal}
                />
            }

            {
                showRegisterModal &&
                <GetInvitedModal modal={showRegisterModal} setShowRegisterModal={setShowRegisterModal} />
            }

        </section >
    );
};

export default Hero;