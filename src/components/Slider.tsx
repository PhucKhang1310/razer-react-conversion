import { useEffect, useRef, useState } from 'react';
import styles from '../styles/slider.module.scss';

interface SliderProps {
  id: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  minText?: string;
  maxText?: string;
  disabled?: boolean;
  isEnhancement?: boolean;
  onChange?: (value: number) => void;
}

const Slider = ({
  id,
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 50,
  minText = 'low',
  maxText = 'high',
  disabled = false,
  isEnhancement = false,
  onChange,
}: SliderProps) => {
  const [value, setValue] = useState(defaultValue);
  const [sliderWidth, setSliderWidth] = useState(0);
  const sliderRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const tipRef = useRef<HTMLDivElement>(null);

  const getPercent = () => {
    return (value - min) / (max - min);
  };

  const getTipPosition = () => {
    if (!tipRef.current) return 0;
    const tipWidth = tipRef.current.getBoundingClientRect().width;
    return getPercent() * (sliderWidth - 16) - tipWidth / 2 + 8;
  };

  const getFillWidth = () => {
    return getPercent() * (sliderWidth - 16) + 8;
  };

  useEffect(() => {
    const updateDimensions = () => {
      if (sliderRef.current) {
        setSliderWidth(sliderRef.current.getBoundingClientRect().width);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    setValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div
      ref={containerRef}
      className={`${styles.sliderContainer} ${isEnhancement ? styles.enhancements : ''} ${!disabled ? styles.on : ''}`}
      id={id}
    >
      <div className={`${styles.foot} ${styles.min}`}> {minText}</div>
      <div className={`${styles.foot} ${styles.mid}`}> medium</div>
      <div className={`${styles.foot} ${styles.max}`}> {maxText}</div>

      <div className={`${styles.left}`} style={{ width: `${getFillWidth()}px` }} />

      <div className={styles.track} />

      <div ref={tipRef} className={styles.sliderTip} style={{ left: `${getTipPosition()}px` }}>
        {value}
      </div>

      <input
        ref={sliderRef}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleSliderChange}
        className={styles.slider}
        disabled={disabled}
      />
    </div>
  );
};

export default Slider;
