# Rainforest Deforestation Visualizer 
## SAE Institute Project
The "Rainforest Deforestation Visualizer" is a web-based application that uses WebGL (Web Graphics Library) to depict a virtual rainforest. The visualisation shows how long it would take for the rainforest, which corresponds to the area of Vienna, to be completely deforested.
Furthermore, the application provides statistics on the deforestation of the rainforest, which give the user an insight into the extent of the destruction. Information such as the annual rate of deforestation, the area affected and the associated loss of biodiversity and natural resources can be displayed.
Through the interactive presentation, awareness of the need for conservation and sustainable management of these important ecosystems is raised.

# E-Learning / readme content

Info: 15 minute read
1. Tech Stack
2. Running the project (how to install this repository to your local device)
3. How to find the best 3D models on the web for free
4. Creating React Components and Page Structure with TypeScript
5. Creating a 3D terrain of an existing map of a city
6. Using Leva for Debugging in React and Three.js
7. Using Leva with Three.js
8. Using Zod with TypeScript in React
9. How to deploy your project to Vercel for free

# Tech Stack
### React 🦋 ###
An open-source JavaScript library developed by Facebook for building user interfaces, particularly for single-page applications. It allows developers to create reusable UI components, and manage and track the state of these components, providing a responsive and efficient way to build web applications.

### Typescript 🤓 ###
An open-source programming language developed and maintained by Microsoft. It's a statically typed superset of JavaScript that compiles to plain JavaScript, adding optional static typing and class-based object-oriented programming to the language, which can help catch errors early during development and improve code maintainability and readability.

### ZOD 🐭 ###
ZOD is a TypeScript-first schema declaration and validation library, which enables developers to build and validate complex data structures in a type-safe manner.

### Sass 💅 ###
Sass (Syntactically Awesome Stylesheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS), enabling developers to use variables, nested rules, mixins, functions, and more, all with a CSS-compatible syntax.

### Vite 🚀 ###
Vite is a modern front-end build tool, created by Evan You (the creator of Vue.js), that offers a faster and leaner development experience for modern web projects, leveraging browser's native ES modules (ESM) for hot-module replacement during development, and featuring efficient, out-of-the-box optimized production builds.

### Three.js + React Three Fiber + drei 🖼️ ###
Three.js is a cross-browser JavaScript library that enables the creation and display of 3D computer graphics in a web browser, using WebGL. React Three Fiber is a React renderer for Three.js that brings the reactivity of React to the world of 3D graphics, allowing developers to work with Three.js in a more React-like way. Drei is a useful collection of reusable components and utilities for React Three Fiber, aimed at simplifying and speeding up development with Three.js and React Three Fiber.

### Framer Motion 💨 ###
Framer Motion is a production-ready motion library for React that enables developers to create animations and interactions with a simple and intuitive API. It provides features like gesture recognition, pose animation, drag controls, and more, making it easier to implement complex user interface transitions and animations.

## Installation

1. Clone the repository:

    ```
    git clone https://github.com/BenKoenig/visualizer.git
    ```

2. Navigate into the cloned repository:

    ```
    cd visualizer
    ```

3. Install the dependencies:

    ```
    npm i
    ```

## Running the Project

After you've installed the project, you can run it with the following command:

    npm run dev

This will start the development server. You can then open your browser and navigate to `http://localhost:3000` (or whatever URL/port the console output tells you) to view the project.

## How to find the best 3D models on the web for free
[<img alt="unity store" width="100%" src="https://github.com/BenKoenig/visualizer/blob/master/public/readme/unity.png" />](https://assetstore.unity.com/)

On the Internet, popular platforms like Sketchfab.com or TurboSquid.com offer a wide range of 3D models. However, these models are often not available for free or they might not have the level of detail you might desire.
An alternative source for 3D models is the Unity Store. It offers a lot of free assets, which can be perfectly used for a WebGL project. The only downside is that these models can only be exported as .dae files. This means that they must first be converted into a WebGL-compatible file.
To do this, you'll need to import the .dae file into the Blender program and add the corresponding textures to the models. Once you have completed these steps, you can then export the file as a .gltf file. This file format is compatible with WebGL and allows you to use your models in this context.

# E-Learning: How to create a WebGL Application with React and Three.js

## Creating React Components and Page Structure with TypeScript

React is a library for building user interfaces, and it does this by allowing you to create reusable components. TypeScript is a typed superset of JavaScript that adds static types to your code, making it more robust and maintainable.

### Creating a Component

Here's how you can create a simple functional component in React with TypeScript:
```tsx
import React, { FC } from 'react'

const MyComponent: FC = () => {
return (
  <div>
    Hello, world!
  </div>
  )
}

export default MyComponent
```



In this example, `MyComponent` is a functional component that returns a JSX element. `FC` is a type from React that stands for Function Component. It's a generic type that takes the props of the component as its generic parameter.

### Page Structure

In a typical React application, you would have a hierarchy of components that make up your pages. For example, you might have a `Page` component that contains a `Header` component, a `Content` component, and a `Footer` component:

```tsx
import React, { FC } from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const Page: FC = () => {
return (
   <div>
      <Header />
      <Content />
      <Footer />
   </div>
   )
}

export default Page
```

In this example, `Page` is a functional component that returns a JSX element containing the `Header`, `Content`, and `Footer` components. Each of these components would be defined in their own files and exported, so they can be imported into other files like this.

## Creating a 3D terrain of an existing map of a city

[<img alt="unity store" width="100%" src="https://github.com/BenKoenig/visualizer/blob/master/public/readme/blender-1.jpeg" />](https://blender.com)
[<img alt="unity store" width="100%" src="https://github.com/BenKoenig/visualizer/blob/master/public/readme/blender-2.jpeg" />](https://blender.com)
1. Look up an SVG map of Vienna online. 
2. Once found, import the SVG file into Blender. 
3. Within Blender, take the SVG and first convert it to a grease pencil stroke, and then subsequently to a curve. 
4. Given that the converted SVG path often contains an excessive number of vertices, you'll need to scale it down and use the "merge by distance" function to simplify the path. 
5. After you've refined the curve, proceed to convert that curve into a mesh. 
6. Once in mesh form, extrude the edges along the Z-axis. 
7. With the mesh extruded, go ahead and fill in the faces to complete the 3D shape. 
8. For optimization, it's crucial to triangulate the mesh. Remember, having ngons in a mesh can lead to various issues, so it's best to avoid them. 
9. Separately, box model a representation of the Danube River to accompany the Vienna map. 
10. Add the appropriate materials to the meshes to give them realistic or stylized textures and colors. 
11. Once both meshes — the Vienna map and the Danube River — are ready, join them together to create a unified model. 
12. Lastly, export your completed model for use in other applications or for sharing.

## Exporting 3D models in GLTF format and setting up a WebGL project

1. Creating a new Vite/React project: Open your terminal and create a new Vite/React project with the following command:
    ```
    npm create vite@latest rainforest_deforestation -- --template react
    ```
2. Installing necessary packages: Next, install the necessary packages with the following command:
    ```
    npm install @react-three/fiber three zod @react-three/drei @types/three react-router-dom
    ```
3. Setting up React Router Dom: React Router Dom is a package that facilitates navigation within your React application. Import the necessary components from `react-router-dom` and set up routing according to your application requirements. Here's a basic example:
    ```jsx
    import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
    
    function App() {
      return (
        <Router>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      );
    }
    ```
4. Exporting a 3D model from Blender: Blender is a very popular open-source 3D modeling software. To export a 3D model from Blender, you click on "File > Export" in the menu and then select "GLTF 2.0". GLTF (sometimes also called GLB) stands for GL Transmission Format and is a 3D file format that stores 3D model information in JSON format. It's one of the most popular and powerful formats in WebGL alongside FBX. The advantage of GLTF is that all textures are stored directly in the JSON file, so you don't have to upload them separately to the project file.
5. Using the exported file: After exporting the file from Blender, you can easily drag and drop this file into your project using an appropriate tool. The tool then generates a code snippet that you insert into your project to render the 3D model. Create a new file in the Components folder named "Model.tsx" and insert the code there.
6. Creating a CanvasWrapper component: Create another component, for example "CanvasWrapper.tsx", which serves as a canvas and is used as a basis for importing all models. Here is an example of how to create a Sky model with React Three Fiber, Drei, and TypeScript:
    ```jsx
    import { Canvas } from '@react-three/fiber';
    import { Stars } from '@react-three/drei';
    
    function CanvasWrapper() {
      return (
        <Canvas>
          <Stars />
        </Canvas>
      );
    }
    
    export default CanvasWrapper;
    ```
7. Importing the Model component: Finally, import the previously created Model component into the CanvasWrapper component with `import Model from './Model'` and use it in the Canvas, as shown here:
    ```jsx
    import { Canvas } from '@react-three/fiber';
    import { Stars } from '@react-three/drei';
    import Model from './Model';
    
    function CanvasWrapper() {
      return (
        <Canvas>
          <Stars />
          <Model />
        </Canvas>
      );
    }
    
    export default CanvasWrapper;
    ```

You have successfully integrated and rendered a 3D model in your React Three Fiber project.

## Using Leva for Debugging in React and Three.js

Leva is a lightweight and customizable React hook library that exposes a GUI to control your variables in real-time. It can be used as a debugging tool for Three.js or any other JavaScript/React application.

### Installation

First, you need to install the package using npm:
```jsx
npm i leva
```
### Importing Leva

Then, in your React component, you need to import the useControls hook from Leva:
```jsx
import { useControls } from 'leva'
```
### Using Leva

You can then use the useControls hook to create a GUI for controlling your variables. Here's an example:
```jsx
function MyComponent() {
const { name, aNumber } = useControls({ name: 'World', aNumber: 0 })

return (
   <div>
    Hey {name}, hello! {aNumber}
   </div>
   )
}
```

### Using Leva with Three.js

If you're using Leva with Three.js, you can use it to control any variable in your Three.js scene. For example, you could control the position of a mesh, the color of a material, the intensity of a light, etc. Here's an example:
```jsx
import { useControls } from 'leva'
import { useFrame } from '@react-three/fiber'

function MyComponent() {
const { color, intensity } = useControls({ color: '#ffffff', intensity: 1 })

useFrame(({ scene }) => {
  const light = scene.getObjectByName('MyLight')
  if (light) {
    light.color.set(color)
    light.intensity = intensity
  }
})

return null
}

```

This way you achieve a debugging GUI that looks like this:
[<img alt="leva" width="100%" src="https://github.com/BenKoenig/visualizer/blob/master/public/readme/leva.png" />](https://github.com/pmndrs/leva/blob/main/docs/getting-started.md)

## Using Zod with TypeScript in React

Zod is a TypeScript-first schema declaration and validation library. It allows you to create schemas for your data and then use those schemas to generate TypeScript types. Here's how you can use Zod to create TypeScript types and use them in your React components:

### Creating the types

First, you need to create your Zod schemas and generate TypeScript types from them. You can do this in a separate `types.ts` file:
```tsx
import { z } from 'zod'

/* User */
export const userPrototype = z.object({
   name: z.string(),
   age: z.number(),
   email: z.string().email()
})
export type userType = z.infer<typeof userPrototype>

/* Product */
export const productPrototype = z.object({
   name: z.string(),
   price: z.number(),
   description: z.string()
})
export type productType = z.infer<typeof productPrototype>
```
In this file, you're using Zod's `object` function to create schemas for your data, and then using Zod's `infer` function to generate TypeScript types from those schemas.

### Using the types in a React component

You can then import these types into your React components and use them to type your props. Here's how you can do this:
```tsx
import React from 'react'
import { userType, productType } from './types'

interface UserProps {
  user: userType
}

const User: React.FC<UserProps> = ({ user }) => {
  return <div>{user.name}</div>
}

interface ProductProps {
  product: productType
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return <div>{product.name}</div>
}
```
In this example, the `User` and `Product` components each take a prop that is typed with one of the types you generated with Zod. This ensures that the props passed to these components always adhere to the correct shape, and you get autocompletion and type checking in your IDE.


## How to deploy your project to Vercel for free
[<img alt="unity store" width="100%" src="https://github.com/BenKoenig/visualizer/blob/master/public/readme/vercel.png" />](https://vercel.com)


This guide walks through the process of deploying a project to Vercel using GitHub and the Vercel web interface.
### Step 1: Create and Push Your Project to GitHub

Before deploying to Vercel, your project needs to be available in a GitHub repository.

1. Navigate to the main page of your GitHub account.
2. Click the "New" button next to Repositories. You will be redirected to a new page.
3. Provide a repository name, and optional description.
4. Choose whether the repository should be public or private.
5. Initialize the repository with a README, .gitignore, or license if you want (these are optional).
6. Click the "Create Repository" button to create your new repository.

Next, push your project to this newly created GitHub repository. Navigate to your local project directory in the terminal and run the following commands (replace `<username>` with your GitHub username and `<repository>` with your newly created repository name):

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<username>/<repository>.git
git push -u origin main]

Now your project is on GitHub and ready to be deployed to Vercel.

### Step 2: Log into Vercel

Visit [Vercel](https://vercel.com/) and click on "Log In" at the top right corner of the page. You can log in using your GitHub, GitLab, or Bitbucket account. For this guide, we will use GitHub.

### Step 3: Import Your Project

Click on the "New Project" button. On the next page, choose the "Import Git Repository" option. Enter the URL of your GitHub repository and click "Continue".

### Step 4: Configure Your Project

You'll be taken to a page to configure your project. Here you can choose the project's name (it will suggest the same name as your repository, but you can change it if you like). In the Root Directory field, leave it empty if your code is in the root of the repository. If your code is in a subdirectory, specify it here.

For the "Build and Output Settings", Vercel should automatically detect these if you're using a popular framework like Next.js, Gatsby, or Create React App. If not, you need to specify them manually. Click "Deploy" to deploy your project.

### Step 5: Automatic Deployment on Push

Vercel can automatically build and deploy your project every time you push to the selected branch (default is "main"). This is set up automatically when you import your project.

# Future Plans
- [ ] Add more visualizations
- [ ] Add more statistics
- [ ] Add deforestation visualisation 
- [ ] Add donation links 
- [ ] Improve shaders
