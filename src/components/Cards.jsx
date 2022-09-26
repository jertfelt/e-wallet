
import styles from "./styles/Cards.module.css";

const Card = ({
  card_brand, card_type, bank_name, bank_logo, brand_img, card_number,  expMonth, expYear, cardholder_name
}) => {
  
  return ( 
    <div className={styles.cardcontent}>

    <article className={styles.card}>
    <p>{card_type}</p>
    <h4>{card_number}</h4>
  
      <h4>{cardholder_name}</h4> 
 
      <span>
      <p>VALID THRU:</p> 
      <h4>{expMonth} {expYear}</h4>
      </span>
      <img 
    className={styles.icon}
    src={brand_img} 
    alt={card_brand}/>
     <img 
    className={styles.banklogo}
    src={bank_logo} 
    alt={bank_name}/>
   
    </article>
    </div>
   );
}
 
export default Card;