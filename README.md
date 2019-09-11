[![CircleCI](https://img.shields.io/circleci/project/github/ilanddev/javascript-sdk.svg)](https://circleci.com/gh/ilanddev/javascript-sdk/tree/master) [![Codecov](https://img.shields.io/codecov/c/github/ilanddev/javascript-sdk.svg)](https://codecov.io/gh/ilanddev/javascript-sdk) [![npm](https://img.shields.io/npm/dt/iland-sdk.svg)](https://www.npmjs.com/package/iland-sdk) [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://github.com/ilanddev/javascript-sdk/blob/master/LICENSE) [![Documentation](https://img.shields.io/badge/Documentation-TypeDoc-blue.svg)](https://ilanddev.github.io/javascript-sdk)

[![alt text](https://www.iland.com/wp-content/themes/iland/lib/module/header/img/iland-logo-2017.svg "Iland.com")](https://www.iland.com)
# iland Javascript SDK

Javascript SDK for the browser and node, written in TypeScript.

Full TypeDoc reference is available [here](https://ilanddev.github.io/javascript-sdk) .

# Developers
Required:

[x] NodeJS >=6.2.2

Clone repo then execute:
``npm install``

## Tests
For tests you'll have to add following environment variables, you can add them to your
bash_rc ou bash_profile file:

``export ILAND_USERNAME="<Production_username>"``

``export ILAND_PASSWORD="<Production_password>"``

``export ILAND_CLIENT_ID="<Client_ID>"``

``export ILAND_CLIENT_SECRET="<Client_secret>"``

To run tests:

``npm run test``
