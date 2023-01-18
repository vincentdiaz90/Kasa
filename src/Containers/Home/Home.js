import React, {useState, useEffect} from 'react'
import './Home.css'
import Card from '../../Components/Card/Card'
import Banniere from '../../assets/images/components/Page/home/Banniere.png'
import logements from '../../assets/api/logements.json'
import { Link } from 'react-router-dom'

export default function Home() {

  return (
    <div className="home">
        <div className="banniere-home-container">
          <img className="banniere-home-img" src={Banniere} alt="" />
          <h1 className="home-title">Chez vous, partout et ailleur</h1>
        </div>
        <div className="home-container-cards">
          {logements.map( item => {
                          
            return (
              <Card key={item.id} >
                <Link to ={`logements/${item.title.replace(/\s+/g,'-').trim()}`}
                state={item}>
                <img 
                  className="home-img-cover" src={item.cover} alt="" 
                />
                </Link> 
                <h2 className='home-img-title'>{item.title}</h2>
              </Card>
            )
          })}

        </div>
    </div>
  )
}