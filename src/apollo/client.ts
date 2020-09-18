import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://vojutvtvqfd3bdoj43w4abiouu.appsync-api.ap-northeast-2.amazonaws.com/graphql',
  headers: {
    'X-Api-Key': 'da2-qcdtidjtdzefxd4xvj5oc5zhpi'
  },
  cache: new InMemoryCache(),

})