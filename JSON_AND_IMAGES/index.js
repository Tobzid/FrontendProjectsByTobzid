const fetchData = async () => {

 try{
    const response = await fetch("data.json");
    const data = await response.json();
    const images = document.getElementById("root");

   const nairaFormatter = new Intl.NumberFormat("en-NG", {
      style : "currency",
      "currency": "NGN",
   });

    const itemsHTML = data.map( (items) => `  
    <div class="imageCont"> 
    
    <img src="${items.img}" />
   <p> ${nairaFormatter.format (items.Price)} </p>

    <p>${items.description}  </p>
    <h2> ${items.status} </h2>
    <h1> Hello ${items.name} </h1>

    
    </div>    
    `,).join("");
    images.innerHTML = itemsHTML;
 } catch(error){
    console.log("error");
 }
};
fetchData();

// I'm just trying this below to see if my code will show error.
const fetchDataTwo = async () => {
   try{

    const response = await fetch("data.json");
    const data = await response.json();
    const images = document.getElementById("rootTwo");

    const nairaFormatter = new Intl.NumberFormat("en-US", {
      style : "currency",
      "currency": "USD",
   });

   const itemsHTML = data.map( (items) => `  
   <div class="imageCont"> 
   
   <img src="${items.img}" />
  <p> ${nairaFormatter.format (items.Price)} </p>

   <p>${items.description}  </p>
   <h2> ${items.status} </h2>
   <h1> Hello ${items.name} </h1>

   
   </div>    
   `,).join("");
   images.innerHTML = itemsHTML;

   } catch(error){
      console.log(error);
   }
}

fetchDataTwo()
/*
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
//console.log(date)

const month = date.getMonth();
const day = date.getDate();
const dayandmonth = [date.innerHTML, month, day].join("/")

console.log(dayandmonth);
*/

const date = document.getElementById("date");
date.innerHTML = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

const datewithlashes = [day, month, year].join('-');
console.log(datewithlashes);