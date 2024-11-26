import Image from 'next/image';

import styles from './../styles/Footer.module.scss'
import Button from './UI/Button';
import Link from 'next/link';
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerBlocks}>
                    <div className={styles.footerFirst}>
                        <div>
                            <Image
                                src="/assets/img/logo.webp"
                                width={120}
                                height={29}
                                alt="Footer Cat logo" />
                            <p>
                                ©2023. Todos los derechos reservados. Denominación social: MoneyCat Financing Inc. Dirección: Unit 1701 Tycoon Bldg., Pearl Drive, st. Brgy San Antonio, Ortigas Center, Pasig City, ph 1800. Certificado de Autoridad para operar número: 1254 concedido por la Comisión de Bolsa y Valores.
                            </p>
                        </div>
                        <div>
                            <Button
                                btnContent={
                                    <div className={styles.buttonContent}>
                                        <Image
                                            src="/assets/img/btt.webp"
                                            alt="Play Market"
                                            width={126}
                                            height={29}
                                            formats={['image/webp', 'image/png']}
                                        />
                                    </div>
                                } />
                            <Button
                                btnContent={
                                    <div className={styles.buttonContent}>
                                        <Image
                                            src="/assets/img/inner.webp"
                                            alt="App Store"
                                            width={126}
                                            height={29}
                                            formats={['image/webp', 'image/png']}
                                        />
                                    </div>
                                } />
                        </div>
                    </div>
                    <div className={styles.footerSecond}>
                        <div>
                            <ul>
                                <h5>Contacto</h5>
                                <li>
                                    <Image
                                        src="/assets/svg/tel.svg"
                                        width={12}
                                        height={17}
                                    />
                                    +55 5005 9720
                                </li>
                                <li>
                                    <Image
                                        src="/assets/svg/ico-clock.svg"
                                        width={18}
                                        height={18}
                                    />
                                    9:00 - 18:00 Lunes - Viernes
                                </li>
                                <li>
                                    <Image
                                        src="/assets/svg/ico-envelope.svg"
                                        width={20}
                                        height={20}
                                    />
                                    Formulario de comentarios
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <h5>Acerca de moneycat</h5>
                                <li>
                                    <Link href="">Preguntas frecuentes</Link>
                                </li>
                                <li>
                                    <Link href="">Cómo obtener un préstamo</Link>
                                </li>
                                <li>
                                    <Link href="">Cómo pagar un préstamo</Link>
                                </li>
                                <li>
                                    <Link href="">Sobre nosotros</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <h5>Documentos</h5>
                                <li>
                                    <Link href="">Política de Privacidad</Link>
                                </li>
                                <li>
                                    <Link href="">Términos y Condiciones</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;