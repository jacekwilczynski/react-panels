# react-panels

A demo app of a React component I've been working on. Renders window-like panels which can be moved by dragging the title bar or resized by dragging the edges. Pressing Escape before dropping a panel will cause it to return to the previous position.

## Prerequisites

Either:
- Node.js & npm or yarn
- Docker

## Installing

### npm / yarn

```
yarn install
yarn start
```
The default browser will open automatically.

### Docker

```
docker build . -t react-panels
docker run -p 3000:3000 react-panels
```
Then navigate to http://localhost:3000.
