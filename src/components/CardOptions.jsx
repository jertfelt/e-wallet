import { useState } from "react";

import { useDispatch } from "react-redux";
import { changeCard, deleteCard } from "../redux/cardSlice";
import styles from "./styles/Cards.module.css"

const CardOptions = ({menuButtOptions = {}, card_number}) => {
  console.log(menuButtOptions)
  const [buttons] = useState(menuButtOptions);
  
  const dispatch = useDispatch();

  const setActive = () => {
    dispatch(changeCard(card_number));
    
  }

  const deleteCard = () => {
    dispatch(deleteCard(card_number));
    console.log("tagit bort");
  }

  return (
    <div className={styles.cardMenu}>
    {buttons.activeButt && 
    <button onClick={setActive}>AKTIVERA</button>
    }
    {
      buttons.deleteButt && 
      <button onClick={deleteCard}> Ta bort</button>
    }
   
   
    </div>
    );
}
 
export default CardOptions