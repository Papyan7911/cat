import { useState } from "react";
import styles from './../../styles/Input.module.scss';
import Image from "next/image";
const Input = ({
    type = "text",
    placeholder = "",
    value,
    onChange,
    className = "",
    icon
}) => {

    return (
        <div className={`${styles.inputWrapper} ${className}`.trim()}>
            {icon && <Image src={icon} width={14} height={20} alt="icon" className={styles.icon} priority={true}
            />}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={styles.input}
            />
        </div>
    );
}
export default Input;