import { useState } from "react";
import { useDispatch } from 'react-redux'
import { addCard } from "../redux/cardSlice";
import Cards from "../components/Cards";
const AddCardsForm = () => {
  const dispatch = useDispatch();
  // const [cardLogo, setCardLogo] = useState("");
  // const [cardLogoimg, setCardLogoImg] = useState("");
  // const [type, setType] = useState("Credit");

  

  // const nameOfMonth = new Date().toLocaleString(
  //   'default', {month: 'long'}
  // );
  // let currentTime = new Date();
  // let currentYear = currentTime.getFullYear()
  // let expireYear = currentYear + 5;

  // const spaceInNumbers = (text, nr) => {
  //   let newArray = [];
  //   for (let i=0; i<text.length; i+=nr){
  //     newArray.push(text.substring(i, i+nr))
  //   }
  //   return newArray.join(" ");
  // }

  const saveCard = () => {
    // if (title && content) {
      dispatch(
        // addCard({
        //   card_brand,
        //   card_type,
        //   bank_name,
        //   bank_logo,
        //   brand_img,
        //   card_number,
        //   expMonth,
        //   expYear,
        //   cardholder_name
        // })
      )

      
  }

  return (<section>
    <h2>Lägg till:</h2>
    <Cards/>
    <form>
      <button type="button"
      onClick={saveCard}>Spara</button>
    </form>
  </section>  );
}
 
export default AddCardsForm;