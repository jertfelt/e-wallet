import styles from "./styles/AddCards.module.css"
import {  useParams, useNavigate, useLocation } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AddCardsForm from "../components/AddCardsForm";
import Errorpage from "./Errorpage";

const AddCards =() =>{

  //lägg till funktion som kallar på store och user om användaren manuellt skriver in adressen.

 
  const location = useLocation();

  if (!location){
    return(
      <> <Errorpage />
        </>
    )
  }
  const thisPerson = location.state?.name;
  const firstName= thisPerson.first;
  const lastName= thisPerson.last;
  console.log(lastName)
  
  const username = firstName + " " + lastName;
  console.log(user)
  if (!user){
    
  }
    if (!username){
      return(
        <> <Errorpage />
          </>
      )
    }
  //*https://redux.js.org/tutorials/essentials/part-4-using-data

  // const navigate = useNavigate();
  // const backButt = (e) => {
  //   e.preventDefault();
  //   navigate(-1)
  // }



 

  
  return (
    <div className={styles.container}>
       <h2>Hej {username}</h2> 
      {/* <Cards 
      cardholder_name = {username}
      /> */}
      <AddCardsForm />
    </div>
  )
}

export default AddCards