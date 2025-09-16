import styles from '../styles/obm.module.scss';
import hoverBorder from '../styles/hoverBorder.module.scss';

interface ObmProps {
  dataTooltip?: string;
}

const Obm = ({ dataTooltip: dataTooltip }: ObmProps) => {
  return <div className={`${styles.obm} ${hoverBorder.hoverBorder}`} data-tooltip={dataTooltip} />;
};

export default Obm;
