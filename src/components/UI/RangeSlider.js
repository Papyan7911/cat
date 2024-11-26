import styles from "./../../styles/RangeSlider.module.scss";

const RangeSlider = ({ value, onValueChange }) => {
    const handleChange = (event) => {
        onValueChange(event.target.value);
    };

    return (
        <>
            <input
                id="range"
                type="range"
                min="0"
                max="4000"
                value={value}
                onChange={handleChange}
                className={styles.slider}
            />
        </>
    );
};

export default RangeSlider;
