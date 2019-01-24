import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const App = ({ data }) => {
    if (data.loading) return null;
    return (
        <div>
            <h1>{data.hi}</h1>  
            <ul>
                {data.resolutions.map(res => (
                    <li key={res._id}>{res.name}</li>
                ))}
            </ul>
        </div>
    );
};

const hiQuery = gql`
    {
        hi
        resolutions {
            _id
            name
        }
    }
`;

export default graphql(
    hiQuery
)(App);
