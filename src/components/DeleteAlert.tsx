import { forwardRef } from "react";
import styles from "../styles/deleteAlert.module.scss";

interface DeleteAlertProps {
  visible?: boolean;
  onClose?: () => void;
}

const DeleteAlert = forwardRef<HTMLDivElement, DeleteAlertProps>(({ visible, onClose }: DeleteAlertProps, ref) => {

  return (
    <div id="deleteAlert" className={`${styles.alert} ${styles.profileDel} ${visible ? styles.show : ""}`} ref={ref}>
      <div className={styles.title}>delete profile</div>
      <div className={`${styles.bodyText} t-center`}>
        You're about to delete this profile. All bindings in this profile will
        be deleted.
      </div>
      <div className={styles.thxBtn} id="deleteConfirm" onClick={onClose}>
        delete
      </div>
    </div>
  );
});

export default DeleteAlert;
