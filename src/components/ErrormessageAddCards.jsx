import { Link } from "react-router-dom";
import styles from "../views/styles/AddCards.module.css"
import buttonstyles from "./styles/buttons.module.css"
const ErrormessageAddCards = () => {


  return ( 
  <section className={styles.errorLoading}>
    <h2 className="fancyfont">Något har blivit fel </h2>
    <img 
    src="https://media3.giphy.com/media/Ss5nyLJYk0hY5HgnH9/giphy.gif?cid=ecf05e47p28dgnv9hhppp9114d54fiuerccc8skcqltogee9&rid=giphy.gif&ct=g" alt="Something went wrong"/>
    <h3>Vi kunde inte hitta dina uppgifter. Du behöver gå tillbaka till start och börja om processen.</h3>
    <Link to ="/"><button className={buttonstyles.navigation__button}>Gå till start</button></Link>
    <div>
      <p>Den här hemsidan är ett studentprojekt och kommer förmodligen ha både en och två och kanske fler buggar. Ha tålamod! </p>
    </div>
  </section> );
}
 
export default ErrormessageAddCards;