import React, {Component} from "react";
import Row from "../components/row/row";
import { PlanetList } from "../components/sw-components/item-lists";
import PlanetDetails from "../components/sw-components/planet-details";

export default class PlanetPage extends Component {
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
                left={<PlanetList onItemSelected={this.onItemSelected}/>}
                right={<PlanetDetails itemId={selectedItem}/>}
            />
        )
    }
}