import styles from './../styles/Advantages.module.scss'
import Button from './UI/Button';
import Image from 'next/image';
const Advantages = () => {
    const items = [
        { name: 'Alto índice de aprobación', src: "./assets/svg/num.svg", width: 150, height: 90 },
        { name: 'Préstamo para <span> cualquier propósito</span>', src: "./assets/svg/goal.svg", width: 84, height: 84 },
        { name: 'Tú dinero en <span> 17 minutos </span>', src: "./assets/svg/advantages-ico-clock.svg", width: 84, height: 84 },
        { name: '<span>Cualquier</span> historial <br/> crediticio', src: "./assets/svg/advantages-ico-diagram.svg", width: 84, height: 84 },
    ];
    return (
        <div className={styles.sectionAdvantages}>
            <div className="container">
                <div className={styles.advantagesRel}>
                    <div className={styles.advantagesBody}>
                        {items.map((item) => (
                            <div key={item.name} >
                                <div className={styles.imageBlock}>
                                    <Image src={item.src}
                                        width={item.width}
                                        height={item.height}
                                        alt="" />
                                </div>
                                <p dangerouslySetInnerHTML={{ __html: item.name }} />
                            </div>
                        ))}

                    </div>
                    <Button
                        btnContent="Obtener un préstamo"
                        className="orange-mode-btn"
                    />
                </div>
            </div>
        </div>
    );
}
export default Advantages;