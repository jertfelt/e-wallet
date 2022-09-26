
import styles from "./styles/Cards.module.css";
import CardOptions from "./CardOptions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeCard } from "../redux/cardSlice";

const Card = ({
  card_brand, card_type, bank_name, bank_logo, brand_img, card_number,  expMonth, expYear, cardholder_name, 
  menuButtOptions = {}
}) => {
  
  const dispatch = useDispatch();

  const setActive = () => {
    dispatch(changeCard(card_number));
  }

  return ( 
    <div className={styles.cardcontent}
    > 
    <CardOptions
      menuButtOptions={menuButtOptions} card_number= {card_number}
      />
  
    <article className={styles.card}>
    <p>{card_type}</p>
  
    <h4>{card_number}</h4>
      <h4>{cardholder_name}</h4> 
     
      <span>
      <p>VALID THRU:</p> 
      <h4>{expMonth} {expYear}</h4>
      </span>
      <img 
    className={styles.icon}
    src={brand_img} 
    alt={card_brand}/>
     <img 
    className={styles.banklogo}
    src={bank_logo} 
    alt={bank_name}/>
   
    </article>
    
    
    </div>
   );
}
 
export default Card;