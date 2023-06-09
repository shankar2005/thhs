import fb from '../../assets/icon/social/facebook.png';
import gmail from '../../assets/icon/social/gmail.png';
import instagram from '../../assets/icon/social/instagram.png';
import linkedin from '../../assets/icon/social/linkedin.png';
import { useState } from 'react';
import { useEffect } from 'react';
import { FcShare } from 'react-icons/fc';
import InviteModal from './Components/InviteModal';

const Navbar = () => {
    const [navColor, setnavColor] = useState("transparent");
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("#252734") : setnavColor("transparent");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    const inviteURL = `https://adbhut.io/invite`;
    const [state, setState] = useState({ value: inviteURL, copied: false, });
    const [inviteFriendsModal, setInviteFriendsModal] = useState(false);

    return (
        <nav style={{
            backgroundColor: navColor,
            transition: "all 0.5s"
        }} className="fixed z-40 w-full top-0 left-0 py-4 px-6 shadow-lg">
            <div className='w-11/12 max-w-screen-xl mx-auto flex gap-8 justify-between items-center'>
                <div className='hidden md:flex gap-6'>
                    <a className='hover:scale-125 duration-150' target="_blank" rel="noreferrer" href='https://www.linkedin.com/company/the-happy-hippies-show'><img className='w-8' src={linkedin} alt="" /></a>
                    <a className='hover:scale-125 duration-150' target="_blank" rel="noreferrer" href='https://www.facebook.com/happy.hippie.969/'><img className='w-8' src={fb} alt="" /></a>
                    <a className='hover:scale-125 duration-150' target="_blank" rel="noreferrer" href='mailto:happyhippie@thhs.in'><img className='w-8' src={gmail} alt="" /></a>
                    <a className='hover:scale-125 duration-150' target="_blank" rel="noreferrer" href='https://www.instagram.com/thehappyhippiesshow/?hl=en'><img className='w-8' src={instagram} alt="" /></a>
                    <button onClick={() => setInviteFriendsModal(true)} className='hover:scale-125 duration-150'><FcShare size={35} /></button>
                </div>
                <div className='md:hidden fixed right-0 top-1/4 z-40'>
                    <a className='block p-0.5 border border-purple-400 backdr border-b-0 border-r-0 rounded-l' target="_blank" rel="noreferrer" href='https://www.linkedin.com/company/the-happy-hippies-show'><img className='w-8' src={linkedin} alt="" /></a>
                    <a className='block p-0.5 border border-purple-400 backdr border-b-0 border-r-0 rounded-l' target="_blank" rel="noreferrer" href='https://www.facebook.com/happy.hippie.969/'><img className='w-8' src={fb} alt="" /></a>
                    <a className='block p-0.5 border border-purple-400 backdr border-b-0 border-r-0 rounded-l' target="_blank" rel="noreferrer" href='mailto:happyhippie@thhs.in'><img className='w-8' src={gmail} alt="" /></a>
                    <a className='block p-0.5 border border-purple-400 backdr border-b-0 border-r-0 rounded-l' target="_blank" rel="noreferrer" href='https://www.instagram.com/thehappyhippiesshow/?hl=en'><img className='w-8' src={instagram} alt="" /></a>
                    <button onClick={() => setInviteFriendsModal(true)} className='block border border-purple-400 backdr rounded-l border-r-0'><FcShare size={35} /></button>
                </div>
            </div>

            <InviteModal
                modal={inviteFriendsModal}
                setModal={setInviteFriendsModal}
                setState={setState}
                inviteURL={inviteURL}
                state={state}
            />
        </nav>
    );
};

export default Navbar;