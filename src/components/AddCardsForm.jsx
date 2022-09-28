
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addCard } from "../redux/cardSlice";
import Cards from "../components/Cards";
import {Link} from "react-router-dom"
import styles from "../views/styles/AddCards.module.css";

const AddCardsForm = ({cardholder_name, expMonth, expYear, card_type}) => {

  const dispatch = useDispatch();
  const {allCards} = useSelector(state => state.cards);
  const [newcardprops, setNewCardProps] = useState({});
  const [errormessage, setErrorMessage] = useState("");

  const changeBank = (e) => {

  console.log("name", e.target.name)
  console.log("value", e.target.value)
  const changedName = e.target.name;
  const changedValue = e.target.value;

    let bank_logo = "bank_logo"
    let bankURL =""

    switch (e.target.value){
      case "Icabanken":
       
        bankURL = "https://www.icabanken.se/static/media/icabanken.6501e0eb.svg"
        console.log("Icabanken", bankURL)
        setCard(changedName, changedValue);
        setCard(bank_logo, bankURL);
        break;
     
     case "Handelsbanken":
      
      bankURL = "https://res.cloudinary.com/westfielddg/image/upload/westfield-media/se/store/mobile-logo/ulueheqd2rlaqyemqe6z.png"
      console.log("Handelsbanken", bankURL)
      setCard(changedName, changedValue);
      setCard(bank_logo, bankURL);
      break;

      case "Danske bank":
        bankURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Danske_Bank_logo.svg/2560px-Danske_Bank_logo.svg.png"
        console.log("Danske bank", bankURL)
        setCard(changedName, changedValue);
        setCard(bank_logo, bankURL);
        break;

      case "Swedbank":
        bankURL = "https://swedbank.com/content/dam/swedbank/brand-manager/sketches/Our%20logotype_626px.png"
        console.log("Swedbank", bankURL)
        setCard(changedName, changedValue);
        setCard(bank_logo, bankURL);
      break;
      default:
        setErrorMessage("Du måste välja en bank")
  }
}

  const changeCardNumber = (e) => {
    const changedName = e.target.name;
      
    let newValue = e.target.value;
    let checkedValue = checkForNumbers(newValue, e.target);
    setErrorMessage("Behöver vara siffror i kortnumret, inte bokstäver!")
      
    let changedValue = e.target.value.split(" ").join("");

    let splitted = [];
    for (let i=0; i <changedValue.length; i+=4){ splitted.push(changedValue.substring(i, i+4))}
   
    let changedValueWithSplit = splitted.join(" ")

    setCard(changedName, changedValueWithSplit);
    }

    const changeMonth= (e) => {
      console.log(e.target.value)
    const changedName = e.target.name;
    const changedValue = e.target.value;
    setCard(changedName, changedValue);
    }

  const changeCardHandler = (e) => {
   
    const changedName = e.target.name;
    const changedValue = e.target.value;
    let brand_img = "brand_img";
    let brandimgURL = ""

    switch (e.target.value){
      case "Citibank":
        brandimgURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Citibank.svg/2560px-Citibank.svg.png"
        setCard(changedName, changedValue);
        setCard(brand_img, brandimgURL)
        break;
      case "VISA":
        brandimgURL ="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/363_Visa_Credit_Card_logo-512.png"
        setCard(changedName, changedValue);
        setCard(brand_img, brandimgURL)
        break;
      case "MasterCard":
        brandimgURL ="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png"
        setCard(changedName, changedValue);
        setCard(brand_img, brandimgURL)
        break;
        default:
          setErrorMessage("Välj kortleverantör")
    }
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
    setErrorMessage("Lagt till kort");
    
  }


  return (
    <section>
    <h2>Lägg till:</h2>
    <Cards  
    cardholder_name = {cardholder_name}
    expMonth ={expMonth} 
    expYear = {expYear}
    card_type = {card_type}
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
          <option value="Danske bank">Danske bank</option>    
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
          <option value="MasterCard">MasterCard</option>
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

        <label htmlFor="card_number">Skriv in kortnummer: *</label>
        <input 
        required
        type="text"
        name="card_number"
        id="card_number"
        maxLength="16"
        minLength ="16"
        onInput={changeCardNumber}
        placeholder="XXXX XXXX XXXX XXXX"
        data-max="16"
        >
        </input>
       
        <p>*Måste vara 16 siffror, inga bokstäver.</p>

        <label htmlFor="expYear">Ändra år & månad:</label>
        <span className="yearandmonth">
          <select
          required
          type="text"
          name="expMonth"
          id="expMonth"
          onInput={changeMonth}
          >
            <option value="JANUARY">JANUARY</option>
            <option value="FEBRUARY">FEBRUARY</option>
            <option value="MARCH">MARCH</option>
            <option value="APRIL">APRIL</option>
            <option value="MAY">MAY</option>
            <option value="JUNE">JUNE</option>
            <option value="JULY">JULY</option>
            <option value="AUGUST">AUGUST</option>
            <option value="SEPTEMBER">SEPTEMBER</option>
            <option value="OCTOBER">OCTOBER</option>
            <option value="NOVEMBER">NOVEMBER</option>
            <option value="DECEMBER">DECEMBER</option>
          </select>
        
        {" / "}
        <input 
        required
        className="inputYear"
        type="text"
        name="expYear"
        id="expYear"
        onInput={changeYear}
        placeholder={expYear}>
        </input>
        </span>
        <div className={styles.errorMsgCont}>
        <p className={styles.errormessage}>
          {errormessage}</p>
        </div>
        <button>SPARA</button>
      </form>
    </div>
    </section>
    

  )
}
export default AddCardsForm;