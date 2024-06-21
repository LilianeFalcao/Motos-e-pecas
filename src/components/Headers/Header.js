import React from 'react'
//import LogoS  from "../../assets/logoSite.png"
import styles from "./Header.module.css"
import NavB from '../NavBar/NavB'

const Header = () => {
      

  return (
    <header className={styles.container}>
      {/*<img src={LogoS} className={styles.logo} alt="Logo Site" />*/} 
        <h1  className={styles.Text}>
            Motos e Peças
        </h1>
        <NavB />
    </header>
  )
}

export default Header