import React from 'react'
import { connect } from 'react-redux'

const Smurf = props => {

    return (
        <div>
            <h3>
                Name: {props.smurf.name}, Age:{props.smurf.age}, Height:{props.smurf.height}
            </h3>
        </div>
    )
}

export default connect(null, {})(Smurf) 