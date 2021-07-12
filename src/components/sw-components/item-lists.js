import React from 'react'
import withData from "../hoc-helpers/with-data";
import ItemList from "../item-list/item-list";
import withApiService from "../hoc-helpers/with-api-service";

const withChildFunction = (Wrapped,fn) => {
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

const PersonList = withApiService(withData(withChildFunction(ItemList, renderName)),mapPersonMethodsToProps)
const PlanetList = withApiService(withData(withChildFunction(ItemList, renderName)), mapPlanetMethodsToProps)
const StarshipList = withApiService(withData(withChildFunction(ItemList, renderModel)), mapStarshipMethodsToProps)

export {
    PersonList,
    PlanetList,
    StarshipList
}