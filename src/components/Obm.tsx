import styles from "../styles/obm.module.scss"
import hoverBorder from "../styles/hoverBorder.module.scss"

const Obm = () => {
  return (
    <div className={`${styles.obm} ${hoverBorder.hoverBorder}`} />
  )
}

export default Obm