## Goals

- Get familiar with Styled Components as styling strategy
- Get a good understanding of Apollo Client and how to integrate Graphql to a React front end application
- Use Graphql Fragments
- Acquire good practices with Jest and testing both components and hooks
- Review React hooks concepts and develop custom hooks

## Requirements

- Implement a home page with a grid of products that includes product picture, description and price (from any product variant). Hint: use Graphql query.
- Create a "Buy" button for each product in the greed and implement a mutation to update an order everytime a user clicks on that button.
  The mutation is called `addItemToOrder`. Hint: look into the API documentation section of this document
- Implement app header component that includes the subtotal of the current order and persists through page refresh. Hint: use Graphql mutation and Context API
- Add custom hook named `useStateWithStorage` with same API as `useState` hook but adding local storage capabilities. Can be used for header subtotal
- Create tests for grid UI item and other components

## API documentation

Even thought the app is already connected to a graphql endpoint, the trainee can find here all required information about `queries`, `mutations` and Graphql types.

- https://docs.vendure.io/graphql-api/shop/
- https://demo.vendure.io/shop-api

## Scripts

### `pnpm dev`

Runs the app in the development mode.
