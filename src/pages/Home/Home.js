import React from 'react'
import Card from '../../components/CardMotos/Card'

const Home = ({motos}) => {
  return (
    <div>
      <Card motos={motos} />
    </div>
  )
}

export default Home