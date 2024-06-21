import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./NavB.module.css"

const NavB = () => {
  return (
    <nav className={styles.aa}>
        <ul  className={styles.container}>
            <li className={styles.Ls}>
                <Link className={styles.A} to="/"> Motos </Link>
            </li>
            <li className={styles.Ls}>
                <Link className={styles.A} to="/usadas"> Usadas </Link>
            </li>
            <li className={styles.Ls}>
                <Link className={styles.A} to="/pecas"> Peças </Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavB