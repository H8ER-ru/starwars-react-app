import React, {Component} from "react";
import Row from "../components/row/row";
import {PersonList} from "../components/sw-components/item-lists";
import PersonDetails from "../components/sw-components/person-details";

export default class PeoplePage extends Component {
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
                left={<PersonList onItemSelected={this.onItemSelected}/>}
                right={<PersonDetails itemId={selectedItem}/>}
            />
        )
    }
}