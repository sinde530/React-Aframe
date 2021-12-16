![Aframe](https://img.shields.io/badge/aframe-20232A?style=for-the-badge&logo=aframe&logoColor=EF2D5E)
![Three.js](https://img.shields.io/badge/three.js-20232A?style=for-the-badge&logo=three.js&logoColor=ffffff)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![NPM](https://img.shields.io/badge/npm-20232A?style=for-the-badge&logo=npm&logoColor=CB3837)
![Yarn](https://img.shields.io/badge/yarn-20232A?style=for-the-badge&logo=yarn&logoColor=2C8EBB)

<br>

## Create React App

```javascript
npx create-react-app {app Name}
or
yarn create react-app {app Name}
```
<br>

## Install with npm or yarn.

```javascript
npm install --save aframe react-aframe-ar react react-dom
or
yarn add aframe react-aframe-ar react react-dom
```

## Assets Install
```javascrit
yarn add aframe-react-assets
```

<br>

- checkout this basic example
```javascript
import 'aframe';
import React from 'react';
import ReactDOM from 'react-dom';
import {Box, Sphere, Cylinder, Plane, Sky, Text, Scene} from 'react-aframe-ar';
 
class AppScene extends React.Component {
  render () {
    return (
      <Scene>
        <Box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9" shadow />
        <Sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E" shadow />
        <Cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D" shadow />
        <Plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4" shadow />
        <Sky color="#ECECEC" />
        <Text value="Hello world, react-aframe-ar!" align="center" position="0 2.3 -1.5" color="#7BC8A4" />
      </Scene>
    );
  }
}
 
ReactDOM.render(<AppScene/>, document.querySelector('#sceneContainer'));
```