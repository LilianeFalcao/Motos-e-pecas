import React from 'react'
import styles from './FormBusca.module.css'

const FormBusca = ({setSearch, search}) => {

  const HandleSubmit = (e) => {
    e.preventDefault();

    console.log(search)
  }
  return (
    <div>
        <form onSubmit={HandleSubmit}>
          <label>

            <input className={styles.busca} 
              type="text"
              name='search'
              placeholder='Digite uma marca ou um modelo de moto'
              value={search}
              onChange={(e) => setSearch(e.target.value)} />
          </label>
          <button className={styles.button}>Pesquisar</button>
        </form>
    </div>
  )
}

export default FormBusca