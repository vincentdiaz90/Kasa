import React from 'react'
import './LogementSimple.css'
import { Navigate } from 'react-router-dom'
import Slider from '../../Components/Slider/Slider'
import Accord from '../../Components/Accord/Accord'
import Star from '../../assets/images/components/Page/logementindividual/Star.png'
import EmptyStar from '../../assets/images/components/Page/logementindividual/EmptyStar.png'
import ListeLogement from '../../assets/api/logements.json'

export default function LogementSimple() {
    /* Redirection vers 404 ou page logement*/

    const href = window.location.href
    let tabHref = href.split('/')
    let idHref = tabHref[tabHref.length - 1]

    const ficheLogement = ListeLogement.find(
        (logement) => logement.id === idHref
    )

    /*  Nom du prestataire */

    let name = ficheLogement?.host.name
    let name2 = name?.split(' ')

    /* Tags */
    let tags = ficheLogement?.tags

    /* Notes */

    const rating = ficheLogement?.rating

    let noteLogement = []

    let etoileComplete = true

    for (let index = 0; index < 5; index++) {
        if (index === parseInt(rating)) {
            etoileComplete = false
        }
        if (etoileComplete === true) {
            noteLogement.push(
                <img
                    key={index}
                    className="star"
                    src={Star}
                    alt={`${rating}/5`}
                />
            )
        } else {
            noteLogement.push(
                <img
                    key={index}
                    className="star"
                    src={EmptyStar}
                    alt={`${rating}/5`}
                />
            )
        }
    }

    return (
        <>
            {ficheLogement ? (
                <div className="logements">
                    <div className="carousel-container">
                        <div className="carousel">
                            <Slider images={ficheLogement.pictures} />
                        </div>
                    </div>
                    <div className="logement-fiche-containt">
                        <div className="logement-fiche-title-position-tags">
                            <h2>{ficheLogement.title}</h2>
                            <p>{ficheLogement.location}</p>
                            <div className="logement-tags">
                                {tags &&
                                    tags.map((items, key) => {
                                        return (
                                            <p key={key} className="tags">
                                                {items}
                                            </p>
                                        )
                                    })}
                            </div>
                        </div>
                        <div className="logement-fiche-pictures-name-rating">
                            <div className="logement-fiche-pictures-name">
                                <h2>
                                    {name2 &&
                                        name2.map((items, key) => {
                                            return (
                                                <p key={key} className="">
                                                    {items}
                                                </p>
                                            )
                                        })}
                                </h2>
                                <div className="logement-fiche-pictures">
                                    <img
                                        src={ficheLogement.host.picture}
                                        alt={`prestataire ${ficheLogement.host.name} `}
                                    />
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
                                title={'Description'}
                                description={ficheLogement.description}
                            />
                        </div>
                        <div className="logement-fiche-equipement">
                            <Accord
                                title={'Equipements'}
                                equipments={ficheLogement.equipments}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <Navigate to={`/erreur-404/`} />
            )}
        </>
    )
}
