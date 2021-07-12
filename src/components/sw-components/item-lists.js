import React from 'react'
import withData from "../hoc-helpers/with-data";
import ItemList from "../item-list/item-list";
import withApiService from "../hoc-helpers/with-api-service";

const withChildFunction = (fn) => (Wrapped) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
}

const renderName = ({name}) => <span>{name}</span>
const renderModel = ({model}) => <span>{model}</span>

const mapPersonMethodsToProps = apiService => {
    return {
        getData: apiService.getAllPeople,
    }
}

const mapPlanetMethodsToProps = apiService => {
    return {
        getData: apiService.getAllPlanets,
    }
}

const mapStarshipMethodsToProps = apiService => {
    return {
        getData: apiService.getAllStarships,
    }
}

const PersonList = withApiService(mapPersonMethodsToProps)(
    withData(
        withChildFunction(renderName)(
            ItemList)))

const PlanetList = withApiService(mapPlanetMethodsToProps)(
    withData
        (withChildFunction(renderName)(
            ItemList)))
const StarshipList = withApiService(mapStarshipMethodsToProps)(withData(withChildFunction(renderModel)(ItemList)))

export {
    PersonList,
    PlanetList,
    StarshipList
}