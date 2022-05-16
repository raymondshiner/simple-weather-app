# Geode IP Weather Application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Note: I did not optionally dockerize the application.

## 1. Building/Running the application

In the project directory, you can run:

### `npm start`

This Runs the app in the development mode.
Open [http://localhost:8080](http://localhost:8080) to view it in your browser.

The page will reload when you make changes to the source code.
You may also see any lint errors in the console.

## 2. Running the Tests of the Application

### `npm test`

Launches the headless jest test runner in the interactive watch mode.

## 3. Modifying the API Access Key

This application uses the weatherstack.com API which on the free subscription plan only allows 250/requests a month. I am currently using an access key for a dummy account i have created for this specific applications purposes. But if you are getting continual error messages in the application then it is likely that the API is out of monthly calls (you can verify this by checking the network response in the dev tools when you type something into the search bar). To update the API key to use your own account so you will be under the monthly limit, simply replace the environment variable REACT_APP_API_KEY value found in the .env file in the project with your own API Key found on weatherstack.com.

## 4. Improving the application

This application, although fairly clean, is missing quite a bit before i would consider it production ready. Below is a small list of points that i would want to Improve before shipping this product.

- Testing

  - The most glaring whole in this project in my mind is the slightly lackluster testing implementation. Although the tests that are written are fairly robust, they imply an equally robust mocking solution that i did not have time to implement for this example. The tests themselves are also incomplete. useWeatherInformation, for example, was not tested for this example as I didn't have that much time, in a production scenario this would be fully tested, which also might inform some of the architecture decisions about the code. It would likely be re factored when you go to test it fully, as this hook wasn't really designed with testability in mind, just core functionality. There are many other small optimizations that can be made within testing. Adding cypress tests for better user imitation, making sure that we are using test-ids as little as possible as they break the user/developer initiation testing paradigm (ask me more about that if curious!), etc. Once again, all of this was simply avoided for lack of time.

- API and Data Fetching

  - My solution for fetching 3 data sets from weatherstack api is intentionally basic as to avoid obfuscation. I tried to make the logic streamlined, simple, and easy to follow. This resulted in some basic package choices (fetch api as opposed to something a bit more robust) and simple error handling (manual loading state, error handling via try/catch which lumps together alot of errors instead of switching on specific error codes, etc.). These solutions are basic, and effective, but not great. Similar to my testing point above, I would want to reapproach this logic and implement a more robust library such as React Query or Axios for the fetching/loading state logic, in addition with some better refactoring to make testing the individual pieces of functionality better and easier to follow. This simply requires more time and effort than i had time to spend this weekend. That being said, i stand by the solution I have presented, as i think it is simple, easy to follow, and fully functional.

- Design

  - SImply put, I am nt a designer. And this design that i have presented for the application was not great. Even though i designed it mobile first, The focus of my assignment was the core functionality, so the design was intentionally low profile. I would want to spend more time on this design implementing core design principles such as Keeping elements above the fold, or maybe adding some sort of an optional button to 'see nearby locations', so the user isn't peppered with information they aren't interested in, as well as adding better error messages based on the error code returned by the network request should something fail. The whole UI also just needs what i refer to as a "gloss update". Where the core components should be made to simply look nicer (UI updates as opposed to UX upgrades mentioned before). A very simple way to do this would be to use something like Material UI as a start to make things look homogenous. This version of the application was intentionally made using only styled-components to keep the focus on the logic of the application, and to make as much of the styling/css code that is rendered on the screen easily identifiable/changeable in the source code.
