
import styles from "./styles/Cards.module.css";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeCard, deleteCard } from "../redux/cardSlice";

const Card = ({
  card_brand, card_type, bank_name, bank_logo, brand_img, card_number,  expMonth, expYear, cardholder_name, 
  cardButtons = {}
}) => {

  const [buttons] = useState(cardButtons);
 
  
  const dispatch = useDispatch();

  const setActive = () => {
    dispatch(changeCard(card_number));
    //lägg in en loader med timeout
  }
  const deleteThis = () => {
    dispatch(deleteCard(card_number));
     //lägg in en loader med timeout
    console.log("tagit bort")
  }

  return ( 
    <div className={styles.cardcontent}
    > 
    <div className={styles.cardMenu}>
      {buttons.buttons && <>
      <button onClick={setActive}>AKTIVERA</button>
      <button onClick={deleteThis}> Ta bort</button>
      </>
      }
    </div>
  
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