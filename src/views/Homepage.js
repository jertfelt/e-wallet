import styles from "./styles/Homepage.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//components
import Card from "../components/Cards.jsx";


const Homepage = () => {
  // const { allCards, activeC, user } = useSelector(
  //   (state) => state.cards
  // );
  // const name = user.name;

  return (
    <div className={styles.maincontent}>
    {/* <div className="page-section">
      {activeC && 
      <Card {...activeC} 
      cardholder_name={name} />}
    </div>
    <div className="page-section">
    <ul className="">
    {allCards.map((card) => (
    <li key={card.index}>
    <Card {...card} cardholder_name={name} menuButtonOptions={{deleteOption:true, activeOption:true}} />
            </li>
    ))}
    </ul>
    </div> */}
    </div>
  )
}

export default Homepage