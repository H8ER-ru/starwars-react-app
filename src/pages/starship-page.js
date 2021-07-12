import React, {Component} from "react";
import Row from "../components/row/row";
import {StarshipList} from "../components/sw-components/item-lists";
import StarshipDetails from "../components/sw-components/starship-details";

export default class StarshipPage extends Component {
    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    }

    render() {

        const { selectedItem } = this.state

        return (
            <Row
                left={<StarshipList onItemSelected={this.onItemSelected}/>}
                right={<StarshipDetails itemId={selectedItem}/>}
            />
        )
    }
}