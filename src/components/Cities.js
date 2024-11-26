import styles from './../styles/Cities.module.scss'
import Image from 'next/image';
const Cities = () => {
    const cities = [
        "Mexico City",
        "Tijuana",
        "Ecatepec",
        "León",
        "Puebla",
        "Ciudad Juárez",
        "Guadalajara",
        "Zapopan",
        "Monterrey",
        "Ciudad Nezahualcóyotl",
        "Chihuahua",
        "Mérida",
        "Naucalpan",
        "Toluca",
        "Cancún",
        "Saltillo",
        "Aguascalientes",
        "Hermosillo",
        "Mexicali",
        "San Luis Potosí",
        "Culiacán",
        "Querétaro",
        "Morelia",
        "Chimalhuacán",
        "Reynosa",
        "Torreón",
        "Tlalnepantla",
        "Acapulco",
        "Tlaquepaque",
        "Guadalupe",
        "Durango",
        "Tuxtla Gutiérrez",
        "Cuautitlán Izcalli",
        "Veracruz",
        "Ciudad Apodaca",
        "Ciudad López Mateos",
        "Matamoros",
    ];
    const batchSize = 14;
    const cityBatches = [];
    for (let i = 0; i < cities.length; i += batchSize) {
        cityBatches.push(cities.slice(i, i + batchSize));
    }
    return (
        <div className={styles.cities}>
            <div className="container">
                <h2>
                    Ofrecemos <span>préstamos personales</span>  en <span>todas las ciudades</span>
                </h2>
                <div className={styles.citiesBlocks}>
                    <div className={styles.citiesList}>
                        {cityBatches.map((batch, batchIndex) => (
                            <div key={batchIndex}>
                                <ul>
                                    {batch.map((city, cityIndex) => (
                                        <li key={cityIndex}>{city}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className={styles.secondBlock}>
                        <div>
                            <p>
                                disponible en
                            </p>
                            <span>500+ ciudades</span>
                        </div>
                        <Image
                            src="/assets/img/mexico map.webp"
                            width={560}
                            height={353.25}
                            alt="Mexico Map"
                            formats={['image/webp', 'image/png']}
                            priority={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cities;