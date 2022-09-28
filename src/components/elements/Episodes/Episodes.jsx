import React from 'react';
import black_widow from '../../../images/black_widow.webp';
import eternals from '../../../images/eternals.webp';
import iron_man from '../../../images/iron_man.webp';
import spider from '../../../images/spider.webp';
import YouTube1 from '../../../images/YouTube1.png';
import styles from './Episodes.module.scss';
import YouTube from 'react-youtube';

const Episodes = () => {
  const onPlayerReady = event => {
    event.target.pauseVideo();
  };
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className={styles.cards}>
      <div className={styles.cardMovies}>
        <div className={styles.movies}>
          <img src={eternals} alt={eternals} width='20' />
          <button className={styles.movieBtn}>
            <img src={YouTube1} alt={YouTube1} width='50' />
          </button>
          <YouTube
            className={styles.youtube}
            videoId='0WVDKZJkGlY'
            opts={opts}
            onReady={onPlayerReady}
          />
        </div>
        <div className={styles.movies}>
          <img src={iron_man} alt={iron_man} width='20' />
          <button className={styles.movieBtn}>
            <img src={YouTube1} alt={YouTube1} width='50' />
          </button>
          <YouTube
            className={styles.youtube}
            videoId='KAE5ymVLmZg'
            opts={opts}
            onReady={onPlayerReady}
          />
        </div>
        <div className={styles.movies}>
          <img src={spider} alt={spider} width='20' />
          <button className={styles.movieBtn}>
            <img src={YouTube1} alt={YouTube1} width='50' />
          </button>
          ;
          <YouTube
            className={styles.youtube}
            videoId='rk-dF1lIbIg'
            opts={opts}
            onReady={onPlayerReady}
          />
        </div>
        <div className={styles.movies}>
          <img src={black_widow} alt={black_widow} width='20' />
          <button className={styles.movieBtn}>
            <img src={YouTube1} alt={YouTube1} width='50' />
          </button>
          <YouTube
            className={styles.youtube}
            videoId='ybji16u608U'
            opts={opts}
            onReady={onPlayerReady}
          />
        </div>
      </div>
    </div>
  );
};

export default Episodes;
