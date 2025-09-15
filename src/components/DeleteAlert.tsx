import styles from "../styles/deleteAlert.module.scss";

const DeleteAlert = () => {
  return (
    <div id="deleteAlert" className={`${styles.alert} ${styles.profileDel}`}>
      <div className={styles.title}>delete profile</div>
      <div className={`${styles.bodyText} t-center`}>
        You're about to delete this profile. All bindings in this profile will
        be deleted.
      </div>
      <div className={styles.thxBtn} id="deleteConfirm">
        delete
      </div>
    </div>
  );
};

export default DeleteAlert;
