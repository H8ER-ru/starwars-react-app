import React from 'react'
import ItemDetails, {Record} from "../item-details/item-details";
import withApiService from "../hoc-helpers/with-api-service";

const PlanetDetails = (props) => {
    return (
        <ItemDetails
            {...props}>
            <Record field="rotationPeriod" label="Rotation Period"/>
            <Record field="diameter" label="Diameter"/>
            <Record field="population" label="Population"/>

        </ItemDetails>
    )
};

const mapMethodsToProps = (apiService) => {
    return {
        getData: apiService.getPlanet,
        getImageUrl: apiService.getPlanetImage
    }
}

export default withApiService(PlanetDetails, mapMethodsToProps)