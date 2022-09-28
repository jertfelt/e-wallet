import styles from "./styles/AddCards.module.css"
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import AddCardsForm from "../components/AddCardsForm";


const AddCards =() =>{
const location = useLocation();

const { allCards, activeC, user } = useSelector((state)=> state.cards);

const [userNames, setUserNames] = useState(null)
const [inactiveCards, setAllCards] = useState(allCards);
const [activeCard, setActive] = useState(activeC);


  //Skulle behöva anropa store här om användaren går direkt in på adressen. Har iallafall försökt lösa problemet med att useSelector inte fungerar när man refreshar hemsidan genom att lagra information från App->Homepage till AddCards genom localStorage. Problemet kvarstår dock om man går in på /skapakort för allra första gången typ. Vet ej heller om detta fungerar 100% felfritt.
  //har kollat på useParams men ser det inte fungera i det här fallet

  const loadState = () => {
      let username = JSON.stringify(localStorage.getItem('userLocal'));
     
      let activeC = JSON.parse(localStorage.getItem("activeC"));
      let allCards = JSON.parse(localStorage.getItem("allCards"))

      if (username === null){
        return undefined;
      }
      else {
        // console.log("username is: ", username)
        setUserNames(username);
        setAllCards(allCards);
        setActive(activeC);
        console.log("and the imported arrays are:",allCards, activeC)
      }

  }
  
  useEffect(() => {
    console.log("active:", activeCard);
    console.log("inactive", inactiveCards)

    if (!activeCard){
      console.log("inaktivt, aktiverar loadState")
      loadState();
    }
    else {
      //om det finns ett aktivt kort vill jag mest hämta user
      const thisPerson = location.state?.name;
      const firstName= thisPerson.first;
      const lastName= thisPerson.last;
      
      let username = firstName + " " + lastName;
      setUserNames(username);
    }
    
  }, [])

//Lite props att skicka med till formuläret:
const nameOfMonth = new Date().toLocaleString(
'default', {month: 'long'}
);
let currentTime = new Date();
let currentYear = currentTime.getFullYear()
let expireYear = currentYear + 5;
let card_type = "DEBIT";

const navigate = useNavigate();
const backButt = () => {
  navigate(-1)
}



  return (
    <div className={styles.container}>
      <AddCardsForm 
        cardholder_name = {userNames}
        expMonth ={nameOfMonth} 
        expYear = {expireYear}
        card_type = {card_type}
        activeCard = {activeCard}
        inactiveCards = {inactiveCards}
      />
      <button onClick={() => backButt()}>Gå tillbaka</button>
    </div>
  )
}

export default AddCards