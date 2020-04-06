# Github repositories explorer

## Description

React application integrated with ​github.com​ API. It allows user to search for up to 5 users with a username similar to the value entered in text input and displays repositories for selected GitHub user.

## Development

To start the project, in the root project directory run:

1. `npm install`
2. `npm start`

To run the containerized version of the app, run:

for development:
`docker-compose up`

then navigate to [http://0.0.0.0:3000/](http://0.0.0.0:3000/)

### Storybook

To launch the storybook on port 9000 in dev-mode run:

1. `npm run storybook`

You can develop your components and write stories and see the changes in Storybook immediately

## Production

for production:

1. `docker build -t github-repositories-explorer .`
2. `docker run -p 80:80 github-repositories-explorer:latest`

and navigate to [http://127.0.0.1/](http://127.0.0.1/)
