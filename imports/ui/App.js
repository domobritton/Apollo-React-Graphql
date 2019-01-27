import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import ResolutionForm from './ResolutionForm';
import GoalForm from './GoalForm';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import { withApollo } from 'react-apollo';

const App = ({ loading, resolutions, client }) => {
    if (loading) return null;
    return (
        <div>
            <button 
            onClick={() => {
                Meteor.logout();
                client.resetStore();
                }}
                >
                Logout
            </button>
            <RegisterForm client={client} />
            <LoginForm client={client} />
            {/* <h1>{data.hi}</h1>   */}
            {/* <ResolutionForm refetch={data.refetch}/> */}
            <ResolutionForm />
            <ul>
                {resolutions.map(res => (
                    <li key={res._id}>{res.name}
                        <GoalForm resolutionId={res._id}/>
                    </li>
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
    })(withApollo(App));
    // withApollo makes resetStore available to us
