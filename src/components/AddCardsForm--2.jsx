
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addCard } from "../redux/cardSlice";
import Cards from "../components/Cards";
import {Link} from "react-router-dom"

const AddCardsForm = ({cardholder_name, expMonth, expYear}) => {

  const dispatch = useDispatch();
  const {allCards} = useSelector(state => state.cards);
  const [newcardprops, setNewCardProps] = useState({});

  const changeBank = (e) => {
  // //  "card_brand": "CITIBANK",
  //     "card_type": "DEBIT",
  //     "bank_name": "Swedbank",
  //     "bank_logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Citibank.svg/2560px-Citibank.svg.png",
  //     "brand_img": "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/363_Visa_Credit_Card_logo-512.png",
  //     //
  const changedName = e.target.name;
  const changedValue = e.target.value;
     //lägg in en switch och peta in bank logo

  }

  const changeCardNumber = (e) => {
    const changedName = e.target.name;
    let changedValue = e.target.value.split(" ").join("");
    let checkedValue = checkForNumbers(changedValue, e.target);

    let splitted = [];
    for (let i=0; i <checkedValue.length; i+=4){ splitted.push(checkedValue.substring(i, i+4))}
   
    let changedValueWithSplit = splitted.join(" ")
    console.log(changedValueWithSplit)
   

    setCard(changedName, changedValueWithSplit);
    }

    const changeMonth= (e) => {
    const changedName = e.target.name;
    const changedValue = e.target.value;
    const upperCase = changedValue.toUpper();
    setCard(changedName, upperCase);
    }

  const changeCardHandler = (e) => {
    //här gör vi en switch för olika kort
    const changedName = e.target.name;
    const changedValue = e.target.value;
    setCard(changedName, changedValue);
  }

  const changeCardType = (e) => {
    const changedName = e.target.name;
    const changedValue = e.target.value;
    setCard(changedName, changedValue);
  }

  const changeYear = (e) => {
    const changedName = e.target.name;
    const changedValue = e.target.value;
    let checkedValue = checkForNumbers(changedValue, e.target);
    setCard(changedName, checkedValue);
  }

  const setCard = (name, value) => {
    setNewCardProps(previousProps => {
      return {...previousProps, [name]: value}
    })
  }

  const checkForNumbers = (value, input) => {
    let check = /[a-öA-Ö]/g;
    if (check.test(value)){
      
      value= value.slice(0, value.length-1);
      input.value = value;
    }
  }

  const formSubmit = (e) => {
    e.preventDefault();
    
    if (allCards.length >= 3){
      console.log("Får ej lägga till fler än fyra kort!")
    }

    dispatch(addCard(newcardprops));
    console.log("Lagt till kort");
    
  }


  return (
    <section>
    <h2>Lägg till:</h2>
    <Cards  
    cardholder_name = {cardholder_name}
    expMonth ={expMonth} 
    expYear = {expYear}
    {...newcardprops}
    />
    <div>
      <form onSubmit={formSubmit}>
        <label htmlFor="bank_name">
          Välj din bank:
        </label>
        <select required
        id="bankName"
        name="bank_name"
        onChange={changeBank}>
        <option value="Handelsbanken">
          Handelsbanken</option>
          <option value="Icabanken">
            Icabanken</option>
          <option value="Swedbank">Swedbank</option>
          <option value="Swedbank">Danske bank</option>    
        </select>

        <label htmlFor="card_brand">
          Kortföretag:
        </label>
        <select
        required
        name="card_brand"
        onChange={changeCardHandler}>
          //*lägg in css och html för bildval:
          <option value="VISA">VISA</option>
          <option value="MasterCard">Mastercard</option>
          <option value="Citibank">Citibank</option>
        </select>

        <label htmlFor="card_type">
        </label>
        <select
        required
        name="card_type"
        onChange={changeCardType}>
          <option value="DEBIT">DEBIT</option>
          <option value="CREDIT">CREDIT</option>
        </select>

        <label htmlFor="card_number">Skriv in ny bankkod:</label>
        <input 
        required
        type="text"
        name="card_number"
        id="card_number"
        maxLength="16"
        onInput={changeCardNumber}
        placeholder="XXXX XXXX XXXX XXXX"
        data-max="16"
        >
        </input>

        <label htmlFor="expYear">Ändra år & månad:</label>
        <span className="yearandmonth">
        <input 
        type="text"
        name="expMonth"
        id="expMonth"
        onInput={changeMonth}
        placeholder={expMonth}>
        </input>
        {"/"}
        <input 
        className="inputYear"
        type="text"
        name="expYear"
        id="expYear"
        onInput={changeYear}
        placeholder={expYear}>
        </input>
        </span>
      
        <button >SPARA</button>
      </form>
    </div>
    </section>
    

  )
}
export default AddCardsForm;