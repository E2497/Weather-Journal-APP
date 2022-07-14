/* Global Variables */
const URL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const myApiKey = '&appid=63d8f4b041f1e2de3bd94873886eb6a1&units=imperial'; 
const ex ='api.openweathermap.org/data/2.5/weather?zip={zip codec}&appid={API key}';
const button = document.getElementById('generate');
const feelings = document.getElementById('feelings');
const content = document.getElementById('content');
const zip = document.getElementById('zip');
const date = document.getElementById('date');
const temp = document.getElementById('temp');
const city = document.getElementById('city');
// didn't understand the method in strtwe code so just used this one https://www.w3schools.com/js/js_dates.asp
const NewDate = new Date();
const d = NewDate.toDateString();
//let d = new Date();
//let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//button click Event
button.addEventListener("click", function (e) {
    //preventing default and getting test for button
    e.preventDefault();
    console.log("clicked");
    // getting zip value user entered
    const zipValue= zip.value;
    //generating url
    const TheURL = URL+zipValue+myApiKey;
       //const TheURL =` ${URL}${zipValue}${myApiKey}`;
    collectData(TheURL) 
      //POST           
        .then ((data) => {
            
            postData ("/addData",{
                d,
                feelings :feelings.value,
                temp : data.main.temp,
                city: data.name
        
            })
             // Get Route    
                    GetData('/all')
                    .then ((data)=>{
                      UpdateDOM(data);
                    }
                    );        
    })        
  });
  // POSt Request Function to server
  //thi part is compeletly done Following this tutorial https://classroom.udacity.com/nanodegrees/nd0011-fwd-t2/parts/cd0429/modules/d153872b-b417-4f32-9c77-d809dc21581d/lessons/ls1846/concepts/e93bda93-b181-4c44-b82c-79de646d9544

  const GetData = async (url ='')=>{
    //console.log("L");
    const request = await fetch(url);
    try {
    
    const allData = await request.json()
    console.log(allData);
    return allData;
    }
    catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
  }
  const postData = async ( url = '', data = {})=>{
    //console.log(url);
    //This Part from the same tutorial
      const response = await fetch( url, {
      method: 'post', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
           
      body: JSON.stringify(data), 
    });

      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }  
 // here we declare async functu=ion to get data from api turn it to json
 // used this tutorial https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function#examples
 //and this one https://www.youtube.com/watch?v=cuEtnrL9-H0
  async function collectData(url){
      //just testing the url
    
    //fetching data from url
    const RAWData = await fetch(url);
    //convert data to json format
    const data = await RAWData.json();
   //try function in case of sucsess
   try{
     // in the tutorial it was recommended to test if data is ok before taking any action
    
       if (RAWData.ok) {
        
        console.log(data);
        return data;
           
       }
       else{
           //if there is an error because the zipcod is not right log message from the data  
           //this part was recommended in FWD platform I wasn't aware of it on own
           console.log(data.message);
           //one or FWD tutors suggesting making the user see alert if the zip he entered was wrong
           alert (data.message + "\nEnter a Right Zipcode");
           
           
       }
    
   }
   //catch function
   catch(e){
    console.log(e);
}

 }
async function UpdateDOM(data){
 
  const output = await data;
  //console.log(output);
  //FWD Commuunity tutors Suggested making sure the date data is ok (true) before taking any action
  //https://www.w3schools.com/js/js_json_objects.asp wasn't aware how to update DOMelements with data used this tutorial on how to use data from output
  if (output.d){
    console.log("OK");
    city.innerHTML="City: " +output.city;
    date.innerHTML = "Date: " + output.d;
    console.log(output.feelings)
    content.innerHTML=output.feelings;
    temp.innerHTML="Temp: " +output.temp;
    //if weather is hot make color red
    console.log(output.city);
    if (output.temp>90){
      const x=  document.getElementsByClassName("entry");
      for (const e of x) {
        e.style.backgroundColor = "#CD5C5C";
      }
      

      
    }
    else if (output.temp<90){
      const x=  document.getElementsByClassName("entry");
      for (const e of x) {
        e.style.backgroundColor = "#ADD8E6";
      };

  }

  else {
    alert (data.message);
  }


 }
 
}
