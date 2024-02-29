import { gql, GraphQLClient } from 'graphql-request';

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { gqlHost } = useRuntimeConfig(event)
  const graphQLClient = new GraphQLClient(gqlHost);

  const mutation = gql`
      mutation($name: String!, $email: String!, $password: String!) {
          register(registerUserInput: {
              name: $name,
              email: $email,
              password: $password,
          }){
              email,
          }
      }
  `;

  interface Data {
    register: { email: string }
  }

  const data = await graphQLClient.request<Data>(mutation, {
    name: body.name,
    email: body.email,
    password: body.password,
  });

  return {
    email: data.register.email,
  }
})