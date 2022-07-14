# Weather-Journal App Project
## Table of Contents
- [Project Title](#project-title)
- [Overview](#Overview)
- [Project Description](#project-description)
- [Development](#development)
- [References](#references)

## Project Title
Weather-Journal App Project
## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 
 ## Project Description
 The user side of this project is that the user enters a Zip code for a city and how he feels and then the interface updates with the city, temperature and date
 I added that the text box color changes according to temp so if it's hot it will be red or cold blue

## Development
 First Part I watched all tutorials providedin udacity class room then started the project.

 I didn't clearly understand the requirments so I used FWD Community platform to understand the project.

 first step I took was intializing the server I used the tutorial in the classroom to do this step I made port 3000 and connected the website folder to it.

 on the server file I also prepared the GET and POST Functions on seerver side I also used the tutorial in classroom for this.

 Then in the app file we start calling Diffrent DOM elements as first step.

 I set up the click event on button and then it was time to fetch data from open weather map using the created api.

 after fetching the data we use fetch again to do POST function to send data to server.

 after that we update the UI of the user using GET to data and update date, city and temp .


## References
PLEASE BE aware that I used the steps provide in the classroom the example in classs room is pretty similar just few modfication https://classroom.udacity.com/nanodegrees/nd0011-fwd-t2/parts/cd0429/modules/d153872b-b417-4f32-9c77-d809dc21581d/lessons/ls1846/concepts/e93bda93-b181-4c44-b82c-79de646d9544.

https://www.youtube.com/watch?v=cuEtnrL9-H0&ab_channel=WebDevSimplified this helped in writting the fetch function.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function#examples to async functions.

used FWD Project walk through video.




