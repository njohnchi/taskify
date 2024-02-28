import { gql, GraphQLClient } from 'graphql-request';

export default defineEventHandler(async (event) => {
  const token = await getHeader(event, 'Authorization');

  console.log(token);

  const graphQLClient = new GraphQLClient('http://localhost:4000/graphql', {
    headers: {
      Authorization: `${token}`,
    },
  });

  const query = gql`
      query {
          tasks {
              id
              title
              description
              status
          }
      }
  `;

  interface Data {
    tasks: [{ id: number, title: string, description: string, status: string }]
  }

  const data = await graphQLClient.request<Data>(query);

  return data.tasks;
})