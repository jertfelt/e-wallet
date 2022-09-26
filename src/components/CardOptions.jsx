import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeC, deleteC } from "../redux/cardSlice";
import styles from "./styles/Cards.module.css"

const CardOptions = ({menuButtonOptions = {}, card_number}) => {
  
  
  const dispatch = useDispatch();
  const setActive = () => {
    dispatch(changeC(card_number));
    
  }
  const deleteCard = () => {
    dispatch(deleteC(card_number));
    console.log("tagit bort");
  }

  return (
    <div className={styles.cardMenu}>
     <button onClick={setActive}>Gör aktiv</button>
     <button onClick={deleteCard}> Ta bort</button>
    </div>
    );
}
 
export default CardOptions