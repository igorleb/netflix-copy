import eternals from '../../../images/eternals.webp';
import iron_man from '../../../images/iron_man.webp';
import spider from '../../../images/spider.webp';
import black_widow from '../../../images/black_widow.webp';
import styles from './Episodes.module.scss';

const Episodes = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.sliderImg}>
        <img src={eternals} alt={eternals} width='20%' />
        <img src={iron_man} alt={iron_man} width='20%' />
        <img src={spider} alt={spider} width='20%' />
        <img src={black_widow} alt={black_widow} width='20%' />
      </div>
    </div>
  );
};

export default Episodes;
