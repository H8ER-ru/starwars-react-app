import React from "react";
import {ApiServiceConsumer} from "../api-context/api-context";


const withApiService = (Wrapped, mapMethodsToProps) => {

    return (props) => {
        return <ApiServiceConsumer>
            {
                (apiService) => {

                    const serviceProps = mapMethodsToProps(apiService)

                    return (
                        <Wrapped {...props} {...serviceProps}/>
                    )
                }
            }
        </ApiServiceConsumer>
    }
}

export default withApiService