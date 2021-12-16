# Interview Scheduler
## Project Features
- Interviews can be booked between Monday and Friday.
- A user can switch between weekdays.
- A user can book an interview in an empty appointment slot.
- Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers.
- A user can cancel an existing interview.
- A user can edit the details of an existing interview.
- The list of days informs the user how many slots are available for each day.
- The expected day updates the number of spots available when an interview is booked or canceled.
- A user is presented with a confirmation when they attempt to cancel an interview.
- A user is shown an error if an interview cannot be saved or deleted.
- A user is shown a status indicator while asynchronous operations are in progress.
- When the user presses the close button of the error they are returned to the Form or Show view (skipping Status and Confirm).
- The application makes API requests to load and persist data. We do not lose data after a browser refresh.


### Application First view
!['First View'](https://github.com/kmunirpm/InterviewScheduler/blob/master/blob/docs/default.png)
_Default view of the application when it first loads._


### New appointment booking
!['Bookings View'](https://github.com/kmunirpm/InterviewScheduler/blob/master/blob/docs/book.png)
_Booking a new interview for a student with an interviewer._


### Appointment cancelation confirmation
!['Delete confirmation'](https://github.com/kmunirpm/InterviewScheduler/blob/master/blob/docs/delete.png)
_A user can cancel an existing appointment by pressing delete icon and confirming on subsequent confirmation dialog._


### Appointment cancelation confirmation
!['Error message'](https://github.com/kmunirpm/InterviewScheduler/blob/master/blob/docs/error.png)
_If something goes wrong it returns an error message._


## Prerequisites (API server/*Database Setup)

It is a client server based application, which requires API server connected to a database running in the background.
- API server code can be cloned from [here](https://github.com/lighthouse-labs/scheduler-api)
- Follow the instruction in README to install and setup the database
- Navigate to the API server clone directory and install dependencies using `npm install`
- Once setup is complete, run the API server using `npm start`

## Download

Download the project code by using the following command in terminal
`git clone git@github.com:kmunirpm/InterviewScheduler.git <destination directory>`

## Installation

Navigate to `<destination directory>` and install all the dependencies by running `npm install` command

## Running Webpack Development Server

Once everything is installed and API server is running `npm install` command will load the app in browser

## Running Jest Test Framework

In order to run the test, navigate to `<destination directory>` and run `npm test` command

## Running Storybook

`npm run storybook` runs the storybook testing

## Project Stack

__Front-End:__ React, Axios, JSX, HTML, SASS, JavaScript

__Testing:__ Storybook, Webpack Dev Server, Jest and Cypress
