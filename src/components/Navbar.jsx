import styles from "./styles/Navbar.module.css";

const  Navbar = () => {
  return (
    <header className={styles.background}>
    
    <p className={styles.font}> <a href="https://www.tovajertfelt.se" target="_blank" rel="noreferrer">
      tovajertfelt.se
      </a></p>

    </header>
  )
}
 
export default Navbar;