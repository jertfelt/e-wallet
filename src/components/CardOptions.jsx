import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeC, deleteC } from "../redux/cardSlice";
import styles from "./styles/Cards.module.css"

const CardOptions = ({menuButtOptions = {}, card_number, active}) => {
  const [isActive, setIsActive] = useState(active);
 
  
  const dispatch = useDispatch();
  const setActive = () => {
    dispatch(changeC(card_number));
    setIsActive(true);
  }
  const [options] = useState(menuButtOptions) 
  
  const deleteCard = () => {
    dispatch(deleteC(card_number));
    console.log("tagit bort");
  }

  return (
    <div className={styles.cardMenu}>
     {!isActive && <><button onClick={setActive}>Aktivera</button>
     <button onClick={deleteCard}> Ta bort</button>
     </>}
    </div>
    );
}
 
export default CardOptions