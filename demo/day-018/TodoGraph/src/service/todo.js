import {gql} from '@apollo/client';
// import gql from 'graphql-tag';

export default {};

export const GET_USER = gql`
  query {
    todo {
      id
      name
      status
    }
  }
`;

export const INSERT_USER = gql`
  mutation($name: String!, $status: Boolean) {
    insert_todo(objects: {name: $name, status: $status}) {
      returning {
        id
        name
        status
      }
    }
  }
`;
