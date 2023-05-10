## Tech Stack
- React
- Typescript
- ZOD
- SASS
- Vite
- Three.js + React Three Fiber + drei
- Framer Motion

## How the project was setup
Create Vite + React template
```
npm create vite@latest my-vue-app -- --template react
```
**Setting up react app**
Install the app package
```
npm install react-app-dom
```

Create a new file called *App.jsx*
Create the following files:
- *App.jsx*
- folder: *pages*
    - inside *pages* folder: *Home.jsx*
    - also inside *pages* folder: *About.jsx*

Fill Home.jsx with temporariy code
```
// pages/Home.jsx
const Home = () => {  
    return(  
        <>  
          <h1>Home Page</h1>
        </>  
    )  
}  
  
export default Home
```

Same with the About.jsx file
```
// pages/ About.jsx
const About = () => {  
    return(  
        <>  
          <h1>About Page</h1>
        </>  
    )  
}  
  
export default About
```
Now to App.jsx
```
// App.jsx
import './App.css'  
import { Routes, Route } from 'react-app-dom';  
import Home from "./pages/Home.jsx"; 
import About from "./pages/About.jsx";  
  
function app() {  
  return (  
    <>  
        <Routes>  
            <Route path="/" element={<Home />} />  
            <Route path="/" element={<About />} /> 
        </Routes>  
    </>  
  )  
}  
  
export default app
```
- import Routes & Route from react-app-dom package
- import the Home + About pages we have created
- route the pages Home + About using the following structure

Update index.jsx or app.jsx (name of the file may vary)
```
// index.jsx
import React from 'react'  
import ReactDOM from 'react-dom/client'  
import app from './App.jsx'  
import { BrowserRouter } from 'react-app-dom';  
  
ReactDOM.createRoot(document.getElementById('root')).render(  
  <React.StrictMode>  
      <BrowserRouter>  
          <app />  
      </BrowserRouter>  
  </React.StrictMode>
)
```
- First you import BrowserRouter from the package you installed in the previous step
- Then you import app.jsx
- Insert the app function within BrowserRouter

**Install SCSS**
```
npm install --save-dev sass
```

**Update vite.config.js**
Vite has built-in support for Sass, so you don't need to add any additional configuration.
Now you can use Sass in your React components by creating `.scss` or `.sass` files and importing them into your components. For example, create a `styles.scss` file:
```scss
// styles.scss
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
}
```

Then, import the `styles.scss` file in your React component:
```
// App.jsx
import React from 'react'
import './styles.scss'

const App = () => {
  return (
    <div className="container">
      <h1>Hello, Vite + React + Sass!</h1>
    </div>
  )
}

export default App  
```

Now you have successfully added Sass to your React Vite project. The Sass styles should be applied to your components, and you can use all Sass features like variables, mixins, and nested styles.