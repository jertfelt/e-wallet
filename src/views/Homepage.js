import styles from "./styles/Homepage.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cards from "../components/Cards.jsx";
import buttonstyles from "../components/styles/buttons.module.css"

const Homepage = ({title}) => {
  
  const { allCards, activeC, user } = useSelector((state) => state.cards
  );
  const username = user.name.first + " " + user.name.last;
  
  return (
    <section className={styles.homepagecont}>
    <span>
      <h2> Välkommen, <br/>{user.name.title} {user.name.first} {user.name.last}</h2>
      <Link to="/skapakort"
      state= {user}
      >
      <button className={buttonstyles.navigate__addcard}>
        Lägg till kort</button>
      </Link>
    </span>
    <h2>{title}:</h2>
    <article className={styles.homepagecontainer}>
    <div className={styles.inactive}>
    <h3>Inaktiva kort:</h3>
    {allCards.map(card => (
      <div className={styles.inactiveCards}
      key= {card.card_number}>
        <Cards {...card}
         cardholder_name= {username}
         cardButtons={{buttons:true}}
         />
      </div>
    ))}
    </div> 
    <div className={styles.active}>
      {activeC && 
      <div key={activeC.card_number}> 
        <h3>Aktivt:</h3>
        <Cards {...activeC} 
        cardholder_name= {username}/>
      </div>}
    </div>
    </article>
    </section>
  )
}

export default Homepage

