
import styles from "./styles/Cards.module.css";
import buttonstyles from "./styles/buttons.module.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeCard, deleteCard } from "../redux/cardSlice";
import chip from "../assets/img/chip.png"
import trashcan from "../assets/img/deleteicon-azure.gif";

const Card = ({
  card_brand, card_type, bank_name, bank_logo, brand_img, card_number,  expMonth, expYear, cardholder_name, 
  cardButtons = {}
}) => {


  const [buttons] = useState(cardButtons);
 
 
  
  const dispatch = useDispatch();

  const setActive = () => {
    dispatch(changeCard(card_number));
    alert("Aktiverat kortet!")
  }
  const deleteThis = () => {
    
    const confirmBox = window.confirm(
      "Vill du verkligen ta bort det här kortet? Det går ej att ångra!"
    )
    if (confirmBox === true) {
      dispatch(deleteCard(card_number));
      alert("Tagit bort kortet!")
    }
   
  }

  return ( 
    <div className={styles.cardcontent}
    >   
    <article className={styles.card}>

    <p>{card_type}</p>
   
    <div className={styles.chipcontainer}>
    <img src={chip} 
      className={styles.cardchip}alt="cardchip"/>
    </div>
    <div className={styles.namenumber}>
    <h4>{card_number}</h4>
    <h4>{cardholder_name}</h4> 
    </div>
    <span className={styles.validthru}>
      <p>VALID THRU:</p> 
      <h4>{expMonth}</h4>
      <h4> {expYear}</h4>
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
    
    <div className={styles.cardMenu}>
      {buttons.buttons && <>
      <button className={buttonstyles.cardActivate}
        onClick={setActive}>AKTIVERA KORT</button>
      <button className={buttonstyles.cardDelete}
       onClick={deleteThis}>
        <img src={trashcan} 
        className={buttonstyles.cardDeleteimg}
        alt="TA BORT"/>
      </button>
      </>
      }
    </div>
    </div>
   );
}
 
export default Card;