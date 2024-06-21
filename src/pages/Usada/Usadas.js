import React from 'react'
import styled from 'styled-components'
import styles from "./Usadas.module.css"

const Usadas = ({motosU}) => {
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
        {motosU && motosU.map((motoU) =>(
          <li className={styles.Lista} key={motoU.id}>
            <h2>{motoU.marca}</h2>
            <Imagem src={motoU.imageUrl} alt={motoU.marca} />
            <p className={styles.Pes}>Modelo: {motoU.modelo}</p>
            <p className={styles.Pes}>Quilometragem: {motoU.quilometragem}</p>
            <p className={styles.Pes}> R$: {motoU.preco}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Usadas