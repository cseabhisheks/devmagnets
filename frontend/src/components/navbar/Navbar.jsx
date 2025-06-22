import style from './navbar.module.css'
import { FiMenu, FiX } from "react-icons/fi";
import { FaLinkedin, FaYoutube, FaFacebook, FaInstagram, FaGithub, FaDivide } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useEffect, useState } from 'react'
export default function Navbar() {
    const [isMenuBar, setisMenuBar] = useState(true)
    const smallscreen = 900
    const handleMenuIcon = () => {
        setisMenuBar(!isMenuBar)
    }
    // when sidebar open and we scroll it should be banned

    useEffect(() => {

        const handleResize = () => {
            if (window.innerWidth <= smallscreen) {
                setisMenuBar(true);  // Mobile view → menu icon
            } else {
                setisMenuBar(false); // Desktop view → full nav
            }

        };
        handleResize();

        window.addEventListener('resize', handleResize);


        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const page = [

        { route: '#about', label: 'About' },

        { route: '#skill', label: 'Skill' },
        { route: '#experience', label: 'Experience' },
        { route: '#project', label: 'Projects' },
        { route: '#education', label: 'Education' },
        { route: '#contact', label: 'Contact' },

    ]
    const socialmedia = [
        { link: 'https://www.instagram.com/cseabhisheks', label: <FaInstagram className={style.icon} /> },
        { link: 'https://github.com/cseabhisheks', label: <FaGithub className={style.icon} /> },
        { link: 'https://www.linkedin.com/in/cseabhisheks/s', label: <FaLinkedin className={style.icon} /> },
        { link: 'http://youtube.com/@cseabhisheks', label: <FaYoutube className={style.icon} /> },
        { link: 'https://www.facebook.com/cseabhisheks/', label: <FaFacebook className={style.icon} /> },
        { link: 'https://x.com/cseabhisheks', label: <FaXTwitter className={style.icon} /> }
    ]
    return (<>
        <nav className={`${style.nav} ${!isMenuBar ? style.navformenu : ''}`}>
            <div className="owner" style={{ fontSize: '16px' }}>{isMenuBar && <a href='#about'>Abhisheks</a>}</div>

            <div className={style.menubar} onClick={handleMenuIcon}><FiMenu className={style.icon} /></div>

        </nav>
        {!isMenuBar &&  <>
            <div className={style.menucontainer} >
                {window.innerWidth<smallscreen &&<div onClick={handleMenuIcon} className={style.x}>X</div>}
                <div className={style.admin} >
                    <img src="./abhishek.jpg" alt="abhishek" className={style.abhi} />
                    <span className="name">Abhishek Singh</span>
                    <span>Web Designer</span>
                </div>

                <div className={style.ownerdesktop} style={{ fontSize: '16px' }}><a href='#about'>Abhishek</a></div>

                <div className={style.pages}>
                    {page.map((page) => {
                        return <a
                            onClick={() => {
                                if (window.innerWidth < smallscreen) {
                                    handleMenuIcon()
                                }
                            }} className={style.hover} key={page.route} href={page.route}>{page.label}</a>
                    })}
                </div>

                <div className={style.socialmedia} >
                    {socialmedia.map((socialmedia) => {
                        return <a rel='noopener noreferrer' className={style.hover} key={socialmedia.link} href={socialmedia.link} target='_blank' >{socialmedia.label}</a>
                    })}
                </div>
            </div>
        </>
        }


    </>)
}