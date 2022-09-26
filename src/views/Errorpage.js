import React from 'react'
import styles from "./styles/Errorpage.module.css";
import { Link, useNavigate } from 'react-router-dom';
const Errorpage =() => {
  let navigate = useNavigate();
  return (
    <div className={styles.content}>
      <div className={styles.box}>
    <div className={styles.box__ghost}>
      <div className={styles.symbol}></div>
      <div className={styles.symbol}></div>
      <div className={styles.symbol}></div>
      <div className={styles.symbol}></div>
      <div className={styles.symbol}></div>
      <div className={styles.symbol}></div>
      
      <div className={styles.box__ghostcontainer}>
        <div className={styles.box__ghosteyes}>
          <div className={styles.box__eyeleft}></div>
          <div className={styles.box__eyeright}></div>
        </div>
        <div className={styles.box__ghostbottom}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={styles.box__ghostshadow}></div>
    </div>
    
    <div className={styles.box__description}>
      <div className={styles.box__descriptioncontainer}>
        <div className={styles.box__descriptiontitle}>Whoops!</div>
        <div classNameName={styles.box__descriptiontext}>Något gick fel! :(</div>
      </div>
      
      <Link><button onClick={() => navigate(-1)}
      className={styles.box__button}>Gå tillbaka</button></Link>
      
    </div>
    
  </div>
  </div>
  )
}

export default Errorpage