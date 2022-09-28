import styles from "./styles/AddCards.module.css"
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AddCardsForm from "../components/AddCardsForm";


const AddCards =() =>{
 const [userNames, setUserNames] = useState(null)
 const location = useLocation();
  const navigate = useNavigate();

  const backButt = (e) => {
    e.preventDefault();
    navigate(-1)
  }

  //lägg till funktion som kallar på store och user om användaren manuellt skriver in adressen. Vet ej exakt hur det ska gå till, men försökt nu att jobba med local storage så att användarens namn sparas. Däremot uppdateras den ju per automatik om man refreshar homepage. Men det är ett försök.
 
  const loadState = () => {
      let username = JSON.stringify(localStorage.getItem('userLocal'));
      if (username === null){
        return undefined;
      }
      else {
        console.log("username is: ", username)
        setUserNames(username);
      }
  }
  useEffect(() => {
    if (!location){
      loadState();
    }
    else {
      const thisPerson = location.state?.name;
      const firstName= thisPerson.first;
      const lastName= thisPerson.last;
      console.log("location lastname", lastName)
      let username = firstName + " " + lastName;
      setUserNames(username);
    }
    
  }, [])

  const nameOfMonth = new Date().toLocaleString(
  'default', {month: 'long'}
);
let currentTime = new Date();
let currentYear = currentTime.getFullYear()
let expireYear = currentYear + 5;
let card_type = "DEBIT";

  
  return (
    <div className={styles.container}>
      <AddCardsForm 
       cardholder_name = {userNames}
       expMonth ={nameOfMonth} 
       expYear = {expireYear}
       card_type = {card_type}
       />
       <button onClick={() => backButt()}>Gå tillbaka</button>
    </div>
  )
}

export default AddCards