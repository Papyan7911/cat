import styles from "@/styles/FadeBackground.module.scss";

const FadeBackground = ({ isVisible, onClick }) => {
    return (
        <div
            className={styles.fadeBackground}
            onClick={onClick}
            style={isVisible ? { opacity: 1, pointerEvents: "auto" } : { opacity: 0, pointerEvents: "none" }}
        ></div>
    );
};

export default FadeBackground;