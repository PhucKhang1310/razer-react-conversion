import styles from "../styles/slider.module.scss";
const Slider = () => {
  return (
    <div className={styles.sliderContainer}>
      <input type="range" min="10" max="100" value="55" step="1" className={styles.slider} />
    </div>
  )
}

export default Slider