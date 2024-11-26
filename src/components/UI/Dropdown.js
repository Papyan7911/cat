import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './../../styles/Dropdown.module.scss';
import Button from './Button';
import Image from 'next/image';
const Dropdown = ({ options, label, links }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const dropdownRef = useRef(null);
    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const handleOptionClick = (option, link) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.dropdown} ref={dropdownRef}>
            <Button
                btnContent={
                    <div className={styles.buttonContent}>
                        {selectedOption ? selectedOption : label}
                        <Image
                            src="/assets/svg/arrow-down.svg"
                            width={10}
                            height={10}
                            className={`${styles.arrow} ${isOpen ? styles.open : ''}`}
                            alt="Dropdown arrow"
                            priority={true}
                        />
                    </div>
                }
                className={styles.dropdownButton}
                onClick={toggleDropdown}
                aria-expanded={isOpen}
            />
            {isOpen && (
                <ul className={styles.dropdownList}>
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className={styles.dropdownItem}
                            onClick={() => handleOptionClick(option, links[index])}
                        >
                            <Link href={links[index]}>
                                {option}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
