import styles from "./styles/AddCards.module.css"
import buttonstyles from "../components/styles/buttons.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector} from "react-redux";
import { useEffect, useState } from "react";
import AddCardsForm from "../components/AddCardsForm";
import ErrormessageAddCards from "../components/ErrormessageAddCards";
import Loader from "../components/Loader";

const AddCards =() =>{
const location = useLocation();
const [loading, setLoading] = useState(true)
const [showContent, setShowContent] = useState(false);

const { allCards, activeC} = useSelector((state)=> state.cards);

const [userNames, setUserNames] = useState(null)
//useSelector anropas här:
const [inactiveCards, setAllCards] = useState(allCards);
const [activeCard, setActive] = useState(activeC);

  //?Skulle behöva anropa store här om användaren går direkt in på adressen, försökt att få in ett felmeddelande nu istället, alltså att om inget finns i localStorage eller inget finns i location.state så är det errormessage som syns.
  
//om inget finns alls (dvs man manuellt skrivit in skapakort)
const [importFail, setImportFail] = useState(false)


//? Har iallafall försökt lösa problemet med att useSelector inte fungerar när man refreshar hemsidan genom att lagra information från App->Homepage till AddCards genom localStorage. Vet ej heller om detta fungerar 100% felfritt.

 
  const loadState = () => {
      let username = JSON.stringify(localStorage.getItem('userLocal'));
      let activeC = JSON.parse(localStorage.getItem("activeC"));
      let allCards = JSON.parse(localStorage.getItem("allCards"))
        console.log(username)
      if (username === "null"){
        console.log("hittade inget i localStorage")
        setImportFail(true);
      }
      else {
        //*localstoragetajm
        setUserNames(username);
        setAllCards(allCards);
        setActive(activeC);
      }

  }
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
      setLoading(false);
      setShowContent(true);
    }, 3000);
    }
  }, [loading]);
  
  useEffect(() => {
 
    if (!activeCard){
      console.log("refreshat? aktiverar loadState och kollar")
      loadState();
    }
    else {
      //om det finns ett aktivt kort vill jag mest hämta user från localStorage
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
const sample = "XXXX XXXX XXXX XXXX"

//bakåtnavigering
const navigate = useNavigate();
const backButt = () => {
  navigate(-1)
}

  return (
    <section className={`${styles.addCardscontainer}`}>

      {loading && 
      <div className={styles.whileLoading}><Loader/>
      <h2 className="fancyfont">Laddar...</h2>
      </div>}
      {showContent && <>
      {importFail ?  <ErrormessageAddCards
      />
      :
      <>
  
      <AddCardsForm 
        cardholder_name = {userNames}
        expMonth = {nameOfMonth} 
        expYear = {expireYear}
        card_type = {card_type}
        card_number = {sample}
        cardButtons={{buttons:true}}
        activeCard = {activeCard}
        inactiveCards = {inactiveCards}/>
     
      <button className={ `${styles.backButt} ${buttonstyles.navigation__invert}`}
      onClick={() => backButt()}>Gå tillbaka </button>
      </>
      } 
      </>}
    </section>
  )
}

export default AddCards