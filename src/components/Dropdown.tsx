import { useEffect, useRef, useState } from "react";
import styles from "../styles/dropdown.module.scss";

interface DropdownProps {
  id: string;
  options: string[];
  disabled?: boolean;
  onSelect?: (option: any) => void;
  selectedIndex?: number;
}

const Dropdown = ({ id, options = [], disabled = false, onSelect = () => {}, selectedIndex = 0 }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  const selectedText = options[selectedIndex] || "";
  const isDisabled = disabled || options.length <= 1;

  const toggleDropdown = (forceClose = false) => {
    if (!isOpen && !forceClose) {
      const dropdownRect = dropdownRef.current?.getBoundingClientRect();
      const checkBtm = (dropdownRect?.bottom ?? 0) + 2;
      const childCount = optionsRef.current?.children.length ?? 0;
      const dropH = Math.min(180, childCount * 25 + 2);

      if (optionsRef.current) {
        if (checkBtm + dropH >= window.innerHeight) {
          optionsRef.current.style.top = "unset";
          optionsRef.current.style.bottom = "28px";
        } else {
          optionsRef.current.style.bottom = "unset";
          optionsRef.current.style.top = "27px";
        }
      }
      setIsOpen(true);
      if (optionsRef.current && optionsRef.current.children[selectedIndex]) {
        const selectedElement = optionsRef.current.children[selectedIndex] as HTMLElement;
        optionsRef.current.scrollTop = selectedElement.offsetTop;
      }
    } else if (isOpen || forceClose) {
      setIsOpen(false);
    }
  };

  const selectOption = (index: number) => {
    if (onSelect) {
      onSelect(index);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        optionsRef.current &&
        !optionsRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.dropdownArea}>
      <div
        ref={dropdownRef}
        id={id}
        className={`
          ${styles.dropdown}
          ${isOpen ? styles.expand : ""}
          ${isDisabled ? styles.disabled : ""}
        `}
        onClick={() => !isDisabled && toggleDropdown()}
      >
        <div className={styles.selected}>{selectedText}</div>
        <div className={`${styles.icon} ${styles.expand}`}></div>
      </div>
      <div
        ref={optionsRef}
        id={`${id}Opt`}
        className={`
          ${styles.options}
          ${isOpen ? styles.expand : ""}
        `}
      >
        {options.map((option, index) => (
          <div
            key={index}
            className={`${styles.option} ${selectedIndex === index ? styles.selected : ""}`}
            onClick={() => selectOption(index)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
