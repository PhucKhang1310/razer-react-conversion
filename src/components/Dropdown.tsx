import { useEffect, useRef, useState } from "react";
import styles from "../styles/dropdown.module.scss";

interface DropdownProps {
  id: string;
  options: string[];
  defaultSelected?: number;
  disabled?: boolean;
  onSelect?: (option: any) => void;
}

const Dropdown = ({
  id,
  options = [],
  defaultSelected = 0,
  disabled = false,
  onSelect = () => {},
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(defaultSelected);
  const [newCounter, setNewCounter] = useState(0);
  const [dupCounter, setDupCounter] = useState(0);
  const [dropdownPosition, setDropdownPosition] = useState<"top" | "bottom">(
    "bottom"
  );

  const dropdownRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  const selectedText = options[selectedIndex] || "";
  const isDisabled = disabled || options.length <= 1;

  const calculatePosition = () => {
    if (!dropdownRef.current || !optionsRef.current) return;
    const checkBtm = dropdownRef.current.getBoundingClientRect().bottom + 2;
    const dropH = Math.min(180, options.length * 25 + 2);

    if (checkBtm + dropH >= window.innerHeight) {
      setDropdownPosition("top");
    } else {
      setDropdownPosition("bottom");
    }
  };

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
        const selectedElement = optionsRef.current.children[
          selectedIndex
        ] as HTMLElement;
        optionsRef.current.scrollTop = selectedElement.offsetTop;
      }
    } else if (isOpen || forceClose) {
      setIsOpen(false);
    }
  };

  const selectOption = (index: number) => {
    setSelectedIndex(index);
    setIsOpen(false);

    const selectedOptions = options[index];

    if (onSelect) {
      onSelect(selectedOptions);
    }
  };

  const insertAndSelect = (mode: "new" | "dup") => {
    let name = selectedText;

    if (mode === "new") {
      name = newCounter > 0 ? `New Profile (${newCounter})` : "New Profile";
    } else if (mode === "dup") {
      const open = name.lastIndexOf("(");
      const close = name.lastIndexOf(")");
      let counter = 1;
      if (open > 0 && close > 0 && close > open) {
        counter = parseInt(name.substring(open + 1, close)) + 1;
        name = name.substring(0, open).trim();
      }

      name = `${name} (${counter})`;
      setDupCounter(counter);
    }

    const newOptions = [...options];
    const newIndex = newOptions.length - 1;
    setSelectedIndex(newIndex);

    if (onSelect) {
      onSelect(name);
    }
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
            className={`${styles.option} ${
              selectedIndex === index ? styles.selected : ""
            }`}
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
