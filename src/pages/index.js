import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Calculate from "@/components/Calculate";
import Advantages from '@/components/Advantages'
import styles from './../styles/Home.module.scss'
import Cities from "@/components/Cities";
import HassleFree from '@/components/HassleFree'
export default function Home() {
    return (
        <>
            <Header />
            <main>
                <div>
                    <Calculate />
                </div>
                <div className="container">
                    <div className={styles.advantagesTitle}>
                        <h2>Ventajas de los préstamos MoneyCat</h2>
                        <p>
                            Obtener un préstamo personal nunca ha sido tan fácil
                        </p>
                    </div>
                </div>
                <Advantages />
                <Cities />
                <HassleFree />
            </main>
            <Footer />
        </>
    );
}
