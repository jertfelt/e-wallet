import styles from "./styles/Navbar.module.css";
import { Link } from "react-router-dom";

const  Navbar = () => {
  return (
    <header className={styles.background}>
    <p className={styles.font}><Link to="/">START</Link></p>
    <p className={styles.font}> <a href="https://www.tovajertfelt.se" target="_blank" rel="noreferrer">
      tovajertfelt.se
      </a></p>

    </header>
  )
}
 
export default Navbar;