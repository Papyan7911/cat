import styles from './../styles/GetLoan.module.scss'
import Button from './UI/Button';
import Input from './UI/Input';
const GetLoan = () => {
    return (
        <div className={styles.getLoan}>
            <div className={styles.getLoanInputs}>
                <Input
                    type="text"
                    placeholder="Teléfono Celular"
                    icon="/assets/svg/phone.svg"
                />
                <Input
                    type="email"
                    placeholder="Correo electrónico"
                    icon="/assets/svg/email.svg"
                />
            </div>
            <Button
                btnContent="Obtener un préstamo"
                className="orange-mode-btn"
            />

            <p>
                Al hacer clic en el botón "Obtener un préstamo" mencionado anteriormente, reconozco que he leído y acepto los <span>Términos y Condiciones</span>  así como la <span>Política de Privacidad</span>  y autorizo a MoneyCat y/o a sus afiliados a enviarme correos electrónicos/SMS/WhatsApp o a llamarme al número indicado para informarme acerca de mis necesidades financieras al igual que con fines de marketing.
            </p>
        </div>
    );
}
export default GetLoan;