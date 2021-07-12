import React, {Component} from "react";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

const withData = (View) => {

    return class extends Component {

        state = {
            data: null,
            loading: true,
            error: false
        }

        componentDidMount() {
            this.props.getData()
                .then((data) => {
                    this.setState({
                        data,
                        loading: false
                    })
                })
                .catch((error) => {
                    this.setState({
                        error: true,
                        loading: false,
                    })
                    console.log(error)
                })
        }

        render() {

            const { data, loading, error } = this.state

            if(loading) {
                return <Spinner/>
            }
            if(error) {
                return <ErrorIndicator/>
            }

            return <View {...this.props} data={data}/>
        }
    }
};

export default withData