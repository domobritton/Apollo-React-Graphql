import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const createResolution = gql`
    mutation createResolution($name: String!) {
        createResolution(name: $name) {
            _id
        }
    }
`;

class ResolutionForm extends Component {

    submitForm = () => {
        console.log(this.name.value);
        this.props.createResolution({
            variables: {
                name: this.name.value
            }
        }).then(({ data }) => {
            // dont need this if set up autorefetch below
            // this.props.refetch();
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
        <div>
            <input 
                type='text' 
                ref={(input) => (this.name = input)}>
            </input>
            <button onClick={this.submitForm}>Submit</button>
        </div>
        )
    }
}

export default graphql(createResolution, {
    // name it so it isnt called Mutation
    name: 'createResolution',
    // options is a way to set up auto refetching with apollo
    options: {
        refetchQueries: [
            'Resolutions'
        ]
    }
})(ResolutionForm);
