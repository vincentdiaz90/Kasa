import React from 'react'
import './LogementSimple.css'
import { useLocation } from 'react-router-dom'
import Slider from '../../Components/Slider/Slider'
import Accord from '../../Components/Accord/Accord'


export default function LogementSimple() {

  const location = useLocation()

  console.log(location);

  return (
    <div className='logements'>
      <div className="carousel-container">
        <div className="carousel">
          <Slider />
        </div>
      </div>
      <div className="logement-fiche-containt">
        <div className="logement-fiche-title-position-tags">
          <h2>{location.state.title}</h2>
          <p>{location.state.location}</p>
          <div className="logement-tags">
            <p className='tags-1'>{location.state.tags[0]}</p>
            <p className='tags-2'>{location.state.tags[1]}</p>
          </div>
            
        </div>
        <div className="logement-fiche-pictures-name-rating">
          <div className="logement-fiche-pictures-name">
            <h2>{location.state.host.name}</h2>
            <div className="logement-fiche-pictures">
              <img src={location.state.host.picture} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="logement-fiche-description-equipement">
        <div className="logement-fiche-description">
          <Accord 
            title = {"Description"}
            description = {location.state.description}
          />
        </div>
        <div className="logement-fiche-equipement">
          <Accord 
            title = {"Equipements"}
            description = {location.state.equipments}
          />
          </div>
      </div>
        
    </div>
  )
}


// state:{
//   title: item.title, 
//   location: item.location, 
//   tags: item.tags, 
//   description: item.description, 
//   equipements: item.equipements, 
//   host: item.host, 
//   rating: item.rating, 
//   pictures: item.pictures
//  
// }