import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const populateHeader = async () => {
    const query = gql`
      query GetItems {
        headerItems {
            name
          }
      }
    `;
  
    const result = await request(graphqlAPI, query);
  
    return result.headerItems;
  };