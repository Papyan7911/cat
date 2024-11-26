import { useState } from 'react';
import styles from './../styles/Calculate.module.scss'
import GetLoan from './GetLoan';
import RangeSlider from './UI/RangeSlider';
import Image from 'next/image';
const Calculate = () => {
    const [sliderValue, setSliderValue] = useState(4000);
    const handleSliderChange = (newValue) => {
        setSliderValue(newValue);
    };
    return (
        <div className={styles.calcGet}>
            <div className="container">
                <div className={styles.calculateBlock}>
                    <div className={styles.calculate}>
                        <div className={styles.titleBlock}>
                            <div>
                                <Image
                                    src="/assets/img/cat.webp"
                                    width={80}
                                    height={80}
                                    alt="Money Cat"
                                    formats={['image/webp', 'image/png']}
                                    priority={true}
                                />
                            </div>
                            <div className={styles.calculateMessage}>
                                <div className={styles.tail}></div>
                                <h1>
                                    <span>
                                        Préstamos
                                    </span> rápidos en línea
                                </h1>
                                <p>
                                    Hasta <span>14,000 MXN</span> hasta <span>por 180 días</span>  en 5 minutos. Primer préstamo <span className={styles.orangeSpan}>GRATIS</span>
                                </p>
                                <p className={styles.blackParagraph}>
                                    No necesitas confirmar tus ingresos, presentar referencias ni visitar nuestra oficina.
                                </p>
                            </div>
                        </div>
                        <div className={styles.rangeInputBlock}>
                            <div className={styles.rangeInputBlockUp}>
                                <p>¿Cuánto dinero necesitas?</p>
                                <span className={styles.price}>${sliderValue}</span>
                            </div>

                            <RangeSlider value={sliderValue} onValueChange={handleSliderChange} />
                            <div className={styles.rangMinMax}>
                                <p>$1000</p>
                                <p>$4000</p>
                            </div>
                            <div className={styles.line}></div>
                            <div className={styles.rangeInputBlockDown}>
                                <div>
                                    <p>Total a pagar</p>
                                    <span className={styles.prevPrice}>$ 14,000</span> <span className={styles.price}>${sliderValue}</span>

                                </div>
                                <div>
                                    <p>Fecha de pago</p>
                                    <span className={styles.data}>08.22.2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <GetLoan />
                </div>
            </div>
        </div>
    );
}
export default Calculate;