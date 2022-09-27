import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addCard } from "../redux/cardSlice";
import Cards from "../components/Cards";
const AddCardsForm = ({cardholder_name}) => {
  const dispatch = useDispatch();
  
  //states
  const [bank_name, setBank] = useState("");
  const [bank_logo, setBanklogo] = useState("");
  const [card_brand, setBrand] = useState("");
  const [brand_img, setCardLogoImg] = useState("");
  const [card_type, setCardType] = useState("Välj");
  const [card_number, setCardNumber] = useState("XXXX XXXX XXXX XXXX")
  


  const { allCards } = useSelector((state) => state.cards);
  

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

  // changeCardNumber = (e) => {
  //   let test =""
  // }
  // changeType = (e) => {

  // }

  const changeCard = (e) => {
    console.log("test", e)
    setFormprops({...formprops, [e.target.name]: e.target.value})

    switch(e.target.value){
      case "Mastercard":
        setBrand("Mastercard");
        setCardLogoImg("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png");
       
        
        break;
        case "VISA":
          setBrand("VISA");
          setCardLogoImg("https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/363_Visa_Credit_Card_logo-512.png");
       
        break;
        default:
        alert("Du måste välja en kortleverantör")
    }
  }

  const changeBank = (e) => {
   console.log("vald:", e);
   switch(e){
    case "Handelsbanken":
      setBanklogo("https://res.cloudinary.com/westfielddg/image/upload/westfield-media/se/store/mobile-logo/ulueheqd2rlaqyemqe6z.png")
      setBank("Handelsbanken")
      setFormprops({...formprops, [e.target.name]: e.target.value})
      break;
    case "Icabanken":
      setBanklogo("https://www.icabanken.se/static/media/icabanken.6501e0eb.svg")
      setBank("Icabanken")
      setFormprops({...formprops, [e.target.name]: e.target.value})
      break;
    case "Swedbank":
      setBanklogo("https://swedbank.com/content/dam/swedbank/brand-manager/sketches/Symbol_626px.png")
      setBank("Swedbank")
      setFormprops({...formprops, [e.target.name]: e.target.value})
      break;
    case "Danskebank":
      setBanklogo("https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Danske_Bank_logo.svg/2560px-Danske_Bank_logo.svg.png")
      setBank("Danskebank")
      setFormprops({...formprops, [e.target.name]: e.target.value})
      break;
    default:
      alert("Du måste välja en bank")
      break;
   }
     
  }

  const checkNumbers = (e) => {
    console.log("test numbers", e)
  }
    
 


  const [formprops, setFormprops] = useState({
    cardholder_name:  cardholder_name,
    expMonth: nameOfMonth,
    expYear: expireYear,
    bank_name: bank_name,
    bank_logo: bank_logo,
    brand_img :brand_img,
    card_brand : card_brand,
    card_type : card_type,
    card_number : card_number
  })


  const saveCard = (e) => {
    e.preventDefault();
    
  }

  return (
    <section>
    <h2>Lägg till:</h2>
    <Cards  
    cardholder_name = {cardholder_name}
    expMonth= {nameOfMonth}
    expYear ={expireYear}
    bank_name = {bank_name}
    bank_logo = {bank_logo}
    brand_img = {brand_img}
    card_brand = {card_brand}
    card_type = {card_type}
    card_number = {card_number}
    />

    <form onSubmit={saveCard}>

    <label htmlFor="card_brand">Välj kortleverantör:</label>
    <select
    id="cardcompany" 
    className="input" 
    value={formprops.card_brand}
    required 
    onChange={{changeCard}}
    name="card_brand">
      <option value="" disabled>
        Välj</option>
      <option value="Mastercard">
        Mastercard</option>
      <option value="VISA">
        VISA</option>
    </select>
{/* 
    <label htmlFor="bank_name">
      Välj bank:</label>
    <select 
    className="input" 
    id="bankCompany"
    required
    value={formprops.bank_name}
    onChange={e => {changeBank(e.target.value)}}
    name="bank_name"
    placeholder="Välj:">
    <option value="">{bank_name}</option>
    <option value="Handelsbanken">Handelsbanken</option>
    <option value="Icabanken">Icabanken</option>
    <option value="Swedbank">Swedbank</option>
    <option value="Danskebank">Danskebank</option>
    </select> */}
{/* 
    <label htmlFor="cardnumber"
    >Skriv in kortnummer (måste vara sexton siffror)</label>
    <input 
    className="input" 
    type="text"
    onChange={changeCardNumber()}
    name="cardnumber"
    placeholder="XXXX XXXX XXXX XXXX"
    maxLength="16"
    id="cardnumber"
    data-max="16">
    </input>

    <label htmlFor="choosetype">Credit eller Debit?</label>
    <select className="input" 
    value={formprops.card_type}
    required
    id="choosetype"
    name="choosetype"
    onChange={changeType()}>
      <option value="" disabled>Välj:</option>
      <option value="CREDIT">Credit</option>
      <option value="DEBIT">Debit</option>
    </select> */}
    
    <input type="submit"
    value="Spara">
     </input>
    </form>
  </section>  );
}


 
export default AddCardsForm;