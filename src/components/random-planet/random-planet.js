import React, { Component } from 'react';

import './random-planet.css';
import ApiService from "../../services/api-service";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

export default class RandomPlanet extends Component {

    apiService = new ApiService()

    state = {
        planet: {},
        loading: true,
        error: false
    }

    onPlanetLoaded(planet) {
        this.setState({planet, loading: false})
    }

    onError = error => {
        this.setState({
            error: true,
            loading: false
        })
        console.log(error)
    }
    componentDidMount() {
        this.updatePlanet()
        setInterval(this.updatePlanet, 4000)
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 18) + 1
        this.apiService
            .getPlanet(id)
            .then(planet => {this.onPlanetLoaded(planet)})
            .catch(this.onError)
    }

    render() {

        const {planet, loading, error} = this.state

        const hasData = !(loading || error)

        const spinner = loading ? <Spinner/> : null
        const content = hasData? <PlanetView planet={planet}/> : null
        const errorIndicator = error ? <ErrorIndicator/> : null

        if(loading) {
            return <Spinner/>
        }

        return (
            <div className="random-planet jumbotron rounded">
                {spinner}
                {content}
                {errorIndicator}
            </div>
        );
    }
}

const PlanetView = ({ planet }) => {

    const {id, name, population, rotationPeriod, diameter} = planet

    return (
        <>
            <img className="planet-image"
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet" />
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </>
    )
}