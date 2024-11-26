import styles from './../../styles/Button.module.scss';

const Button = ({ btnContent, onClick, type = "button", className = "" }) => {
    const buttonClass = `${styles.button} ${className}`.trim();

    return (
        <button
            type={type}
            onClick={onClick}
            className={buttonClass}
        >
            {btnContent}
        </button>
    );
};

export default Button;
