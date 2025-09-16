import styles from "../styles/profileBar.module.scss";
import tip from "../styles/icontip.module.scss";

import Batt from "./Batt";
import Dots3 from "./Dots3";
import Dropdown from "./Dropdown";
import Loader from "./Loader";
import Obm from "./Obm";
import DeleteAlert from "./DeleteAlert";
import { useCallback, useEffect, useRef, useState } from "react";

const ProfileBar = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState("");
  const [profiles, setProfiles] = useState([
    "Default Profile",
    "Profile 2",
    "Profile 3",
    "Profile 4",
    "Profile 5",
    "Profile 6",
    "Profile 7",
    "Profile 8",
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [newCounter, setNewCounter] = useState(0);
  const [dotsActive, setDotsActive] = useState(false);

  const dotsRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const alertRef = useRef<HTMLDivElement>(null);

  const insertAndSelect = (mode: "new" | "dup") => {
    let name = profiles[selectedIndex];

    if (mode === "new") {
      name = newCounter > 0 ? `New Profile (${newCounter})` : "New Profile";
      setNewCounter(newCounter + 1);
    } else if (mode === "dup") {
      const open = name.lastIndexOf("(");
      const close = name.lastIndexOf(")");
      let hasNumber = open > 0 && close > 0 && close > open;

      let dupCounter = 1;
      if (hasNumber) {
        dupCounter = parseInt(name.substring(open + 1, close)) + 1;
        name = name.substring(0, open).trim();
      }

      name = `${name} (${dupCounter})`;
    }

    const newProfiles = [...profiles, name];
    const newIndex = newProfiles.length - 1;
    setProfiles(newProfiles);
    setSelectedIndex(newIndex);
  };

  const [alertVisible, setAlertVisible] = useState(false);

  const onSelect = (index: number) => {
    setSelectedIndex(index);
  };

  const onOptionSelect = (value: string) => {
    switch (value) {
      case "add":
        insertAndSelect("new");
        break;
      case "duplicate":
        insertAndSelect("dup");
        break;
      case "rename":
        startEditing();
        break;
      case "delete":
        if (profiles.length <= 1) break;
        setAlertVisible(true);
        break;
    }
  };

  const onClose = () => {
    setAlertVisible(false);
    let tempIndex = selectedIndex;
    setProfiles(profiles.filter((_, index) => index !== selectedIndex));
    setSelectedIndex(tempIndex - 1 >= 0 ? tempIndex - 1 : 0);
  };

  const startEditing = () => {
    setIsEditing(true);
    setEditValue(profiles[selectedIndex]);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    });
  };

  const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      saveEdit();
    } else if (e.key === "Escape") {
      setIsEditing(false);
    }
  };

  const saveEdit = useCallback(() => {
    if (editValue.trim() === "") {
      setIsEditing(false);
      return;
    }
    profiles[selectedIndex] = editValue;
    setProfiles([...profiles]);
    setIsEditing(false);
  }, [editValue, profiles, selectedIndex]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dotsRef.current && !dotsRef.current.contains(e.target as Node)) {
        setDotsActive(false);
      }
    };

    if (dotsActive) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dotsActive]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (alertRef.current && !alertRef.current.contains(e.target as Node)) {
        setAlertVisible(false);
      }
    };
    if (alertVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [alertVisible]);

  return (
    <div className={`${styles.profileBar} ${tip.tipContainer}`}>
      <Loader />
      <div className={styles.profileText}>profile</div>
      <Dropdown id='profile-dropdown' options={profiles} selectedIndex={selectedIndex} onSelect={onSelect} />
      <input
        ref={inputRef}
        type='text'
        name='profile'
        className={`${styles.profileEdit} ${isEditing ? styles.show : ""}`}
        onChange={handleEdit}
        value={editValue}
        maxLength={25}
        onKeyDown={handleKeyDown}
      />
      <Dots3
        ref={dotsRef}
        onClick={() => setDotsActive(!dotsActive)}
        isActive={dotsActive}
        onSelect={onOptionSelect}
        deleteDisabled={profiles.length <= 1}
      />
      <span className={styles.profileDel}>
        <DeleteAlert ref={alertRef} visible={alertVisible} onClose={onClose} />
      </span>
      <Obm dataTooltip='On-Board Memory' />
      <div className={styles.divider} />
      <Batt dataTooltip='30% Battery' />
    </div>
  );
};

export default ProfileBar;
