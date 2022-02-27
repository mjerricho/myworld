### To deploy with firebase
run `npm ci && npm run build`
then `firebase deploy --only hosting`

### Tech used
- React JS
- Three Js (react-three-fiber)
- drei

### Necessary libraries and function
- [react-colorful](https://www.npmjs.com/package/react-colorful): color picker component for React
- [drei](https://github.com/pmndrs/drei): provides useful add ons to react-three-fiber, like cameras, plane, and controls
- [valtio](https://github.com/pmndrs/valtio): a lightweight, proxy-based state management tool for React
- [gltf-pipeline](https://github.com/CesiumGS/gltf-pipeline): Help to preprocess the gltf into glb for better integration.

### find the project at 
Project Console: https://console.firebase.google.com/project/myworld-b449e/overview
Hosting URL: https://myworld-b449e.web.app

### To look at the 3D design
In VS Code, install gltf tool extension.
While opening gltf file, run `>glTF: Preview 3D Model` or inspect data then click on the show model button.
To upload file, use the `.glb` format.

### [Processing the 3D model](https://blog.logrocket.com/configure-3d-models-react-three-fiber/)
1. Converting into `.glb` file: `cd` into the model folder and run `gltf-pipeline -i <source-file> -o <output-file>`.
2. Compressing the model: `gltf-pipeline -i <source-file> -o <output-file> --draco.compressionLevel=10`
3. Break down and compile the model into declarative and reusable JSX component by running `npx gltfjsx <glTF model source file>`
4. Make sure that the new `.js` file is usseing `useGLTF()` on the `.glb` file.
5. Copy the `.glb` file into `/public`.
6. Do not forget to have a `<Suspense></Suspense>` wrap.

### Credits
- [Shiba](https://skfb.ly/6WxVW) by zixisun02 is licensed under [Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).
- [Computer Terminal](https://skfb.ly/6vrwA) by Chris Sweetwood is licensed under [Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).
- [Football](https://skfb.ly/6ur7P) by BSlegt is licensed under [Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).
- [Rustic halt](https://skfb.ly/6T8VC) by Geoffrey Marchal is licensed under [Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).
- All models are downloaded from sketchfab.com.

### TODO next
use all the models that represent who I am and put it on the first page.

--------------------------------------------------------------------------------

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

