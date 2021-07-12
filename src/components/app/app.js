import React, {Component} from 'react';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';

import './app.css';
import ErrorIndicator from "../error-indicator/error-indicator";
import ApiService from "../../services/api-service";
import {ApiServiceProvider} from "../api-context/api-context";
import ErrorBoundry from "../error-boundry/error-boundry";
import PeoplePage from "../../pages/people-page";
import PlanetPage from "../../pages/planet-page";
import StarshipPage from "../../pages/starship-page";

export default class App extends Component{

    apiService = new ApiService()

    state = {
        hasError: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        })
        console.log(error)
    }


    render() {

        if(this.state.hasError) {
            return <ErrorIndicator/>
        }

        return (
            <ErrorBoundry>
                <ApiServiceProvider value={this.apiService}>
                    <Header />
                    <RandomPlanet />

                    <PeoplePage/>
                    <PlanetPage/>
                    <StarshipPage/>
                </ApiServiceProvider>
            </ErrorBoundry>
        )
    }
}
