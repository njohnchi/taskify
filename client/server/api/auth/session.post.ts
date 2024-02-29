import { gql, GraphQLClient } from 'graphql-request';

export default defineEventHandler(async (event) => {
  const token = await getHeader(event, 'Authorization');

  const { gqlHost } = useRuntimeConfig(event)
  const graphQLClient = new GraphQLClient(gqlHost, {
    headers: {
      Authorization: `${token}`,
    },
  });

  const query = gql`
      query {
          session {
              id
              name
              email
          }
      }
  `;

  interface Data {
    session: { id: number, name: string, email: string }
  }

  const data = await graphQLClient.request<Data>(query);

  return data.session;
})