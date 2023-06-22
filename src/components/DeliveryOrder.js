import RestaurantCard from "./RestaurantCard";
import "../styles/categories.css";
import Monogram from "../images/monogram.svg";
// import Monogram1 from "../images/monogram1.png";
// import Monogram2 from "../images/monogram2.png";
import Restuarant1 from "../images/rest1.png";
// import Restuarant2 from "../images/rest2.png";
// import Restuarant3 from "../images/rest3.png";
// import Restuarant4 from "../images/rest4.png";
// import Restuarant5 from "../images/rest5.png";
// import Restuarant6 from "../images/rest6.png";
// import Restuarant7 from "../images/rest7.png";
// import Restuarant8 from "../images/rest8.png";
// import Restuarant9 from "../images/rest9.png";
// import Restuarant10 from "../images/rest10.png";
// import BreakfastHub from "../images/breakfasthub.svg";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
// import { useEffect, useState } from "react";
function DeliveryOrder() {
//   const[loading,setLoad]=useState(false)
  const restaurants=useLoaderData()
//   const dataState=useNavigation()
//  useEffect(()=>{
//   if (dataState.state==='loading'){
//     console.log('i am loading')
//     setLoad(true)
//   }
//   else{
//     setLoad(false)
//   }
//  },[dataState.state])

  console.log(restaurants.length)

  return (

    
    <div className="order-category_delivery order-category">
      <h3>African Restaurants</h3>
     
      <div className="order-category_restaurant-cards">
         {restaurants.map((restaurant)=>(
           <RestaurantCard key={restaurant._id} name={restaurant.name} price="400" Food={Restuarant1} Monogram={Monogram} rating={4.6}/>
         ))}
      </div>

    </div>
  );
}
export async function loader(){
  try{
    const response= await  axios.get("https://mealyapp-bdev.onrender.com/api/v1/restaurant/keyword/?restaurants=Delivery")
    const  data=response.data.data.restaurants
    return data
  
  }
  catch(err){
    console.log(err)
    return null
  }
 
}



export default DeliveryOrder;
