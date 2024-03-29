This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Amazon Reviews
A simple interface to read amazon reviews

## Tech Stack

| ES2018 | React | LunaUI | Jest |
|:------:|:-------:|:-----:|:----:|
| <img width="70px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2000px-Unofficial_JavaScript_logo_2.svg.png"> | <img width="70px" src="https://cdn.worldvectorlogo.com/logos/react.svg"> |  <img width="70px" src="https://raw.githubusercontent.com/luna-ui-lib/luna-ui/master/luna.png"> | <img width="70px" src="https://cdn.auth0.com/blog/testing-react-with-jest/logo.png"> |

* [LunaUI](https://github.com/luna-ui-lib/luna-ui) - It's a lite UI component lib, based on themes build with `React`+`StyledComponents`. This is also an opensource project I've been working for the past months. For more details, take a look on the repo :)

## Install
```
  yarn
```

## Development
To build in development mode
```
  yarn start
```

## Unit Tests
To run the unit tests:
```
  yarn test
```

## To production
```
  yarn build
```

## Project Structure
```
  .
  +-- README.md
  +-- .gitignore
  +-- .env
  +-- package.json
  +-- /public
  |   +-- ...
  +-- /src
  |   +-- history.js
  |   +-- index.css
  |   +-- index.js
  |   +-- store.js
  |   +-- setupTests.js
  |   +-- /actions
  |   |   +-- ...
  |   +-- /components
  |   |   +-- ...
  |   +-- /connectors
  |   |   +-- ...
  |   +-- /constants
  |   |   +-- ...
  |   +-- /reducers
  |   |   +-- ...
  |   +-- /sagas
  |   |   +-- ...
  |   +-- /services
  |   |   +-- ...
```
