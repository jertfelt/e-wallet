import styles from "./styles/AddCards.module.css"
import {  useParams, useNavigate, useLocation } from "react-router-dom";
import Cards from "../components/Cards";
import { useSelector, useDispatch } from "react-redux";
import { addCard } from "../redux/cardSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const AddCards =() =>{
  const [cardLogo, setCardLogo] = useState("");
  const [cardLogoimg, setCardLogoImg] = useState("");
  const [type, setType] = useState("Credit");

  const navigate = useNavigate();
  const backButt = (e) => {
    e.preventDefault();
    navigate(-1)
  }

  const location = useLocation();
  const thisPerson = location.state?.name;
  const firstName= thisPerson.first;
  const lastName= thisPerson.last;
 
  const dispatch = useDispatch();
  const { allCards} = useSelector((state) => state.cards
  );
  const username = firstName + " " + lastName;


 

  const nameOfMonth = new Date().toLocaleString(
    'default', {month: 'long'}
  );
  let currentTime = new Date();
  let currentYear = currentTime.getFullYear()
  let expireYear = currentYear + 5;

  const spaceInNumbers = (text, nr) => {
    let newArray = [];
    for (let i=0; i<text.length; i+=nr){
      newArray.push(text.substring(i, i+nr))
    }
    return newArray.join(" ");
  }


  
  return (
    <div className={styles.container}>
      <h2>Hej {username}</h2>
      <h2>Lägg till kort:</h2>
      {/* <Cards 
      cardholder_name = {username}
      /> */}
      <form>

      </form>
    </div>
  )
}

export default AddCards