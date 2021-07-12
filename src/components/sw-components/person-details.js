import React from "react";
import ItemDetails, {Record} from "../item-details/item-details";
import withApiService from "../hoc-helpers/with-api-service";

const PersonDetails = (props) => {

    return (
        <ItemDetails
            {...props}>
            <Record field="birthYear" label="BirthYear"/>
            <Record field="eyeColor" label="Eye Color"/>
        </ItemDetails>
    )
};

const mapMethodsToProps = (apiService) => {
    return {
        getData: apiService.getPerson,
        getImageUrl: apiService.getPersonImage
    }
}

export default withApiService(PersonDetails, mapMethodsToProps)