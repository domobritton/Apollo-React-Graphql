import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import ResolutionForm from './ResolutionForm';

const App = ({ loading, resolutions }) => {
    if (loading) return null;
    return (
        <div>
            {/* <h1>{data.hi}</h1>   */}
            {/* <ResolutionForm refetch={data.refetch}/> */}
            <ResolutionForm />
            <ul>
                {resolutions.map(res => (
                    <li key={res._id}>{res.name}</li>
                ))}
            </ul>
        </div>
    );
};

const resolutionsQuery = gql`
    query Resolutions {
        resolutions {
            _id
            name
        }
    }
`;

export default graphql(
    resolutionsQuery, {
        // further destructuring of data so we can use 'resolutions', etc..
        // instead of 'data.resolutions' above
        props: ({ data }) => ({ ...data })
    }
)(App);
