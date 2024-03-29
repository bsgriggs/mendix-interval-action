## Interval Action

Call a Mendix action based on an interval/periodically. Automatically removes the interval when the page is unloaded.

![demo](https://github.com/bsgriggs/mendix-interval-action/blob/media/Demo.png)

## Features

-   Run an action periodically
-   Number of milliseconds can be dynamic
-   Debug mode to log when the action is executed to the browser console
-   Automatically removes the interval when the page is unloaded

## Usage

![general](https://github.com/bsgriggs/mendix-interval-action/blob/media/General.png)

1.  Add the widget to a page in Studio Pro
2.  Set the Interval expression to the number of milliseconds between each execution
3.  Set the action as a Microflow or Nanoflow that you need to run periodically

## Demo project

https://widgettesting105-sandbox.mxapps.io/p/interval-action

## Issues, suggestions and feature requests

https://github.com/bsgriggs/mendix-interval-action/issues

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v8.19.x, which can be checked by executing
   `npm -v`, execute: `npm install --legacy-peer-deps`.
2. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

Benjamin Griggs
