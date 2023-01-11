import React from 'react'
import './About.css'
import Banniere from '../../assets/images/components/Page/about/Banniere.png'
import Accord from '../../Components/Accord/Accord'

export default function About() {
  return (
    <div className='about-container'>
      <div className="banniere-home-container">
        <img className="banniere-home-img" src={Banniere} alt="" />
      </div>
      <Accord
        title = {"Fiabilité"}
        description = { "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes" }
      />
      <Accord 
      title = {"Respect"}
      description = {"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}
      />

      <Accord 
      title = {"Service"}
      description = {"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."}
      />

      <Accord 
      title = {"Sécurité"}
      description = {"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}
      />

    </div>
  )
}
