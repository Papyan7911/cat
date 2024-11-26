import { useEffect, useState } from 'react';
import styles from './../styles/Header.module.scss';
import Link from 'next/link';
import Button from './UI/Button';
import Dropdown from './UI/Dropdown';
import Image from 'next/image';
import FadeBackground from './FadeBackground';
import icon1 from "../../public/assets/svg/menuIcons/icon1.svg";
import icon2 from "../../public/assets/svg/menuIcons/icon2.svg";
import icon3 from "../../public/assets/svg/menuIcons/icon3.svg";
import icon4 from "../../public/assets/svg/menuIcons/icon4.svg";
import icon5 from "../../public/assets/svg/menuIcons/icon5.svg";

export default function Header() {
    const options = ['Sobre nosotros', 'Cómo pagar un préstamo', 'Contáctanos', 'Blog'];
    const links = ['/', '/about', '/services', '/contact'];
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    useEffect(() => {
        if (isVisible) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [isVisible]);

    useEffect(() => {
        const handleResize = () => setIsVisible(false);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const menuList = [
        { content: "Preguntas frecuentes", icon: icon1 },
        { content: "Cómo obtener un préstamo", icon: icon2 },
        { content: "Cómo pagar un préstamo", icon: icon2 },
        { content: "Sobre nosotros", icon: icon3 },
        { content: "Contáctanos", icon: icon4 },
        { content: "Blog", icon: icon5 },
    ]

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.navbar}>
                    <div className={styles.logoNav}>
                        <div className={styles.logo}>
                            <Link href='/'>
                                <Image
                                    src="/assets/svg/logo.svg"
                                    width={105}
                                    height={21}
                                    alt="Money Cat logo"
                                />
                            </Link>
                        </div>
                        <div className={styles.nav}>
                            <nav>
                                <ul className={styles.navHamb}>
                                    <li>
                                        <Link href=''>Preguntas frecuentes</Link>
                                    </li>
                                    <li>
                                        <Link href=''>Cómo obtener un préstamo</Link>
                                    </li>
                                    <li>
                                        <Dropdown options={options} links={links} label="Ver más" />
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className={styles.headBtns}>
                        <div className={styles.headBtnsDiv}>
                            <Button btnContent="Solicitar de nuevo" className="orange-mode-btn" />
                            <Button btnContent="Pagar préstamo" className="green-mode-btn" />
                        </div>
                        <div className={styles.hamburger}>
                            <button
                                onClick={toggleVisibility}
                                aria-label="Toggle menu"
                                style={{ cursor: "pointer" }}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                    <div
                        className={`${styles.hamburgerContent} ${isVisible ? styles.show : ''
                            }`}
                    >
                        <header className={styles.menuHeader}>
                            <div class="container">
                                <div className={styles.content}>
                                    <div className={styles.logo}>
                                        <Link href='/'>
                                            <Image
                                                src="/assets/svg/logo.svg"
                                                width={105}
                                                height={21}
                                                alt="Money Cat logo"
                                            />
                                        </Link>
                                    </div>
                                    <button className={styles.closeMenu} onClick={() => setIsVisible(false)}>
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.07111 8.48523L1.41421 14.1421L0 12.7279L5.6569 7.07102L9.31025e-05 1.41421L1.41431 -1.90735e-06L7.07111 5.65681L12.7279 -1.90735e-06L14.1421 1.41421L8.48533 7.07102L14.1422 12.7279L12.728 14.1421L7.07111 8.48523Z" fill="#FF6622" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </header>
                        <div className={styles.menuSection}>
                            <div className="container">
                                <div className={styles.content}>
                                    <ul>
                                        {
                                            menuList.map(({ icon, content }, index) => {
                                                return <li key={index}>
                                                    <div className={styles.imageBlock}>
                                                        <Image src={icon} alt="ICON" width={24} height={24} />
                                                    </div>
                                                    <Link href="#">{content}</Link>
                                                </li>
                                            })
                                        }
                                    </ul>
                                    <div className={styles.headBtnsDivMenu}>
                                        <Button btnContent="Obtener un préstamo" className="orange-mode-btn" />
                                        <Button btnContent="Inicio de sesión" className="green-mode-btn" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <FadeBackground
                isVisible={isVisible}
                onClick={() => setIsVisible(false)}
            />
        </header >
    );
};