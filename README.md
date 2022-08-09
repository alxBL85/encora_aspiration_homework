# GitHub Topic Explorer

## Assignment:
Your task is to build a React web application that displays all the
"[topics](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objec
ts#topic)" related to the term "react", using the GitHub GraphQL API.

The application should display how many
"[stargazers](https://docs.github.com/en/free-pro-team@latest/graphql/reference/o
bjects#stargazerconnection)" each topic has. 

A click on a topic should display the topics related to that topic, and how many stargazers they have. And so forth. 

There should also be Search capability to search/query on any term or topic.

You should implement best practices with the UI.
To interact with the Github GraphQL API you'll need to have
* a [Github API key](https://docs.github.com/en/free-pro-team@latest/graphql/guides/forming-calls
-with-graphql#authenticating-with-graphql)
* You'll want to make use of the key in the .env file within your application
You may use whatever React framework or library you find useful. URL routing is
optional.

## Evaluation:
* We will pay particular attention to the way the code is organized, and to the overall
readability
* Unit tests will be greatly appreciated
* Design will be ignored, however usability and accessibility will be taken into consideration
* Remember to update this README with instructions on how to install, run and test your application
* Your first goal is to have a working app, but feel free to improve the application
however you see fit
* We hope that you can complete the assignment within 2 hours but don't set any
time constraints
* Please reach out per email or by opening an issue if anything is unclear or blocking
you 

Best of luck

## Dev Notes
* Leave any technical notes on any libraries or tools you chose to use, the more detail
the better.

## How to run app & test
* Leave instruction on how to run and test your app here
Future Improvements

Feel free to elaborate on how you would improve any of the following topics
* Code Structuring:
* Refactoring:
* Additional Features:


-----
## Extras:

1. I have included an alternate version of this excercise using Redux Thunks for async actions (as a demo) for comparision

## Future Enhancements:

1. In future versions, it should be interesting to include Mutations with GraphQL or more complex escenarios to render more data.


### Dependencies:

1. @apollo/client: ^3.6.9,
1. @material-ui/core: ^4.11.3,
1. @material-ui/lab: ^4.0.0-alpha.57,
1. @reduxjs/toolkit: ^1.8.3,
1. @testing-library/jest-dom: ^5.12.0,
1. @testing-library/react: ^11.2.6,
1. @testing-library/user-event: ^12.8.3,
1. axios: ^0.21.4,
1. dotenv: ^16.0.1,
1. graphql: ^16.5.0,
1. react: ^17.0.2,
1. react-debounce-input: ^3.3.0,
1. react-dom: ^17.0.2,
1. react-redux: ^7.2.4,
1. react-scripts: 4.0.3,
1. web-vitals: ^1.1.1

You can download the source code directly from Github (https://github.com/alxBL85/encora_aspiration_homework.git) downloading the source code or via the command line:

> git clone https://github.com/alxBL85/encora_aspiration_homework.git

Once, downloaded, you must install the required modules:

> npm install

Create an .env file with your Github Personal Access Token:

> GITHUB_PERSONAL_ACCESS_TOKEN

After successfully download and install the dependencies, you can run the application:

> npm run start




