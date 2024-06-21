import React from 'react'
import styled from 'styled-components'
import styles from "./Pecas.module.css"

const Pecas = ({MotoPecas}) => {
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
        {MotoPecas && MotoPecas.map((peca) =>(
          <li className={styles.Lista} key={peca.id}>
            <h2>{peca.nome}</h2>
            <Imagem src={peca.imageUrl} alt={peca.marca} />
            <p className={styles.Pes}>Modelo: {peca.modelos}</p>
        
            <p className={styles.Pes}> R$: {peca.preco}</p>
          </li>
        ))}
      </ul>
  </div>
  )
}

export default Pecas