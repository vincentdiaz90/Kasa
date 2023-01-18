import React from 'react'
import './LogementSimple.css'
import { useLocation } from 'react-router-dom'
import Slider from '../../Components/Slider/Slider'
import Accord from '../../Components/Accord/Accord'
import Star from '../../assets/images/components/Page/logementindividual/Star.png'
import EmptyStar from '../../assets/images/components/Page/logementindividual/EmptyStar.png'


export default function LogementSimple() {

  const location = useLocation()

  /*  Nom du prestataire */

  let name = location.state.host.name;
  let name2 = name.split(' ')

  /* Tags */
  let tags = location.state.tags



  /* Notes */

  const rating = location.state.rating;

  let noteLogement = [];

  let etoileComplete = true;

  for (let index = 0; index < 5; index++) {
     if(index === parseInt(rating)) {
         etoileComplete = false;
     }
     if(etoileComplete === true) {
         noteLogement.push(<img key={index} className="star" src={Star} alt={`${rating}/5`} />)
     } else {
          noteLogement.push(<img key={index} className="star" src={EmptyStar} alt={`${rating}/5`} />)
     }
  }



  return (
    <div className='logements'>
      <div className="carousel-container">
        <div className="carousel">
          <Slider images={location.state.pictures}/>
        </div>
      </div>
      <div className="logement-fiche-containt">
        <div className="logement-fiche-title-position-tags">
          <h2>{location.state.title}</h2>
          <p>{location.state.location}</p>
          <div className="logement-tags">
            {tags && tags.map( (items, key) => {
              return(
                <p 
                key = {key}
                className='tags'>
                  {items}
                </p>
              )
            })}
          </div>
            
        </div>
        <div className="logement-fiche-pictures-name-rating">
          <div className="logement-fiche-pictures-name">
            <h2>{name2 && name2.map( (items, key) => {
              return(
                <p 
                  key={key}
                  className="" > 
                    {items}
                  </p>
              )
            })}</h2>
            <div className="logement-fiche-pictures">
              <img src={location.state.host.picture} alt="" />
            </div>
          </div>
          <div className="logement-fiche-rating">
            {noteLogement}
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
            equipments = {location.state.equipments}
          />
          </div>
      </div>
        
    </div>
  )
}
