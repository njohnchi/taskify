import { gql, GraphQLClient } from 'graphql-request';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const token = await getHeader(event, 'Authorization');

  console.log(token);

  const graphQLClient = new GraphQLClient('http://localhost:4000/graphql', {
    headers: {
      Authorization: `${token}`,
    },
  });

  const mutation = gql`
      mutation($title: String!, $description: String) {
          createTask(createTaskInput:  {
              title: $title,
              description: $description,
          }){
              id,
              title,
              description,
              status,
          }
      }
  `;

  interface Data {
    createTask: { id: number, title: string, description: string, status: string }
  }

  const data = await graphQLClient.request<Data>(mutation, {
    title: body.title,
    description: body.description,
    status: body.status,
  });

  return {
    id: data.createTask.id,
    title: data.createTask.title,
    description: data.createTask.description,
    status: data.createTask.status,
  }
})