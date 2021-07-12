import React from "react";
import ItemDetails, {Record} from "../item-details/item-details";
import withApiService from "../hoc-helpers/with-api-service";

const StarshipDetails = (props) => {

    return (
        <ItemDetails
            {...props}>
            <Record field="model" label="Model"/>
            <Record field="length" label="Length"/>
            <Record field="costInCredits" label="Cost"/>
            <Record field="passengers" label="Passengers"/>

        </ItemDetails>
    )
};

const mapMethodsToProps = (apiService) => {
    return {
        getData: apiService.getStarship,
        getImageUrl: apiService.getStarshipImage
    }
}

export default withApiService(mapMethodsToProps)(StarshipDetails)