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


## Having Issues with code 
the issue I was having was in line 26 of Character : missing dependency react-hooks/exhaustive-deps. The way I tried to resolve this warning was by installing these packages: 
first install ESLint
`npm install eslint --save-dev`
then the the package missing 
`npm install eslint-plugin-react-hooks --save-dev`

I still had the same issue. 
I installed: 
`npm i cors`
then researched more on CORS and the main issue as seen in the screenshot below
![cors_ERROR](https://user-images.githubusercontent.com/83961643/149460299-7d220258-5ba7-497e-9275-d96b98de7cb8.jpeg)

After all my research and findings I came to know that SWAPI isn't maintained anymore which would mean that I wouldn't ba able to gain access to the data. 

![swapi](https://user-images.githubusercontent.com/83961643/149470377-24840b99-3686-4b0b-bfe2-7482fd493827.jpeg)

However, I could not find what would be supported from their statement. 

![starwars](https://user-images.githubusercontent.com/83961643/149471581-002d508c-7fee-45aa-b11b-c525e8557f83.jpeg)
![totaldestruction](https://user-images.githubusercontent.com/83961643/149471600-0d8b1bac-b827-4a45-96eb-355a9d3b0a17.jpeg)

This was how the app turned out due to the fact that it couldn't fetch data but the app should be able to run in it had the data.
