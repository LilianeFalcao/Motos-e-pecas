import React from 'react'
import styles from "./Card.module.css"
import styled from 'styled-components'

const Card = ({motos}) => {
    const Imagem = styled.img`
        width: 100%;
        height: auto;
        display: block;
        border-bottom: 1px solid #ddd;
        padding-bottom: 15px;
    `

  return (
    <div className={styles.container}>
        <ul>
            {motos && motos.map((moto) => (
                <li className={styles.Lista} key={moto.id}> 
                    <h2>{moto.marca}</h2>
                    <Imagem className={styles.image} src={moto.imageUrl} alt={moto.marca} />
                    <p className={styles.Pes}>Modelo: {moto.modelo}</p>
                    <p className={styles.Pes}> R$: {moto.preco}</p>
                </li>
            )) }
        </ul>
    </div>
  )
}

export default Card