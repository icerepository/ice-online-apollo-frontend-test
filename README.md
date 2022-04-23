# Thank you for joining our recruitment process.

In a moment, you will have the opportunity to show us your technical skills with React and Redux Toolkit. We'll also ask you about solving the problem of code duplication when a team develops two or more applications at the same time.

Please turn on screen sharing so that we can see your workflow. During recruitment you can use the internet to find answers to the problems you are having. Remember that finding the best solutions quickly on the internet is an advantage, not a disadvantage.

> Please make sure you are using the LTS version of node.

## Task 0

Using only the console/terminal, clone the project, create a new branch named `surname-name` and get the project ready to run.

To start the application use `npm start`.

## Task I

### Task description

You have two Card components in the `Page` component. One component displays content for logged in users and the other for non-logged in users.
In the `Login` component, you will find pseudo logic that logs the user in.

### Task goal

The `Page` component has as little responsibility as possible:

- displays content only for logged in users
- content for non-login users is moved to a higher application layer

## Task II

### Task description

In the `authAPI` file, write an endpoint that, using the `logIn` function, simulates an HTTP request. Delete the `authSlice.ts` file, fix the `store.ts` file. Use the new endpoint in your application.

### Task goal

The application uses RTK Query to communicate with the server and cache responses.
