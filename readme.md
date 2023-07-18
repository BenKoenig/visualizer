## Tech Stack
- React
- Typescript
- ZOD
- SASS
- Vite
- Three.js + React Three Fiber + drei
- Framer Motion

## How to find the best 3D models on the web for free
[<img alt="unity store" width="100%" src="https://github.com/BenKoenig/visualizer/blob/master/public/readme/unity.png" />](https://assetstore.unity.com/)

On the Internet, popular platforms like Sketchfab.com or TurboSquid.com offer a wide range of 3D models. However, these models are often not available for free or they might not have the level of detail you might desire.
An alternative source for 3D models is the Unity Store. It offers a lot of free assets, which can be perfectly used for a WebGL project. The only downside is that these models can only be exported as .dae files. This means that they must first be converted into a WebGL-compatible file.
To do this, you'll need to import the .dae file into the Blender program and add the corresponding textures to the models. Once you have completed these steps, you can then export the file as a .gltf file. This file format is compatible with WebGL and allows you to use your models in this context.

## Exporting 3D models in GLTF format and setting up a WebGL project.

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

## How to deploy your project with Vercel
# How to Deploy a Project to Vercel

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

