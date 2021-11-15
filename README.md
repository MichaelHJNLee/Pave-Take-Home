## Solution Formulation

Steps I took to achieve this solution: 
  1. Sorted both csv's by city, department, gender, and start date, assuming that these are the fields that could provide the most valuable insight to our customer. Created a json file for both sorted csv's.
  2. Implemented 4 bar graphs representing average salary regarding each sorted category.
  3. Implemented a bar graph that the user can toggle which city's data they'd like to view, allow the user to also select which field the user would like to view.
  4. Implement checkboxes for the user to toggle between Gamine's or Hookfish's data. 
  5. Implement a checkbox for the user to choose if they would like to see bonuses included in salary information.


## Libraries/Tools Used

Written in JavaScript using React, Lodash, and the charting library Recharts.

## Setup

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
