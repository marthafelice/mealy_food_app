import RestaurantCard from "../components/RestaurantCard";
import "../styles/categories.css";


import Restuarant1 from "../images/rest1.svg";
import Restuarant2 from '../images/rest2.svg';
import Restuarant3 from '../images/rest3.svg';
import Restuarant4 from '../images/rest4.svg';
import Restuarant5 from '../images/rest5.svg';
import Restuarant6 from '../images/rest6.svg';
import Restuarant7 from '../images/rest7.svg';
import Restuarant8 from '../images/rest8.svg';
import Restuarant9 from '../images/rest9.svg';





import star from "../images/star.svg"
import axios from "axios";
import { useLoaderData } from "react-router-dom";

function DeliveryOrder() {

  const restaurants=useLoaderData()
  console.log(restaurants.length)
  console.log(restaurants)
  const restaurantImages = [
    Restuarant1,
  
    Restuarant6,
    Restuarant7,
    Restuarant8,
    Restuarant9,
  
  ];
  
 
   
 

  return (
    <div className="order-category_delivery order-category">
      <h3>All Restaurants</h3>
     
      <div className="order-category_restaurant-cards">
        
         {restaurants.map((restaurant,i)=>(
           <RestaurantCard key={restaurant._id} StarImg={star} name={restaurant.name} price="$400" Food={restaurantImages[i]} Monogram={restaurantImages[i]} rating={4.6}/>
         ))}
         <RestaurantCard StarImg={star} name='Breakfast Hub' price='$100' Food={Restuarant1} Monogram={Restuarant1} rating={4.7}/>
        
         <RestaurantCard StarImg={star} name='African Kitchen' price='$100' Food={Restuarant2} Monogram={Restuarant2} rating={4.7}/>
         <RestaurantCard StarImg={star} name='Platters Couch' price='$400' Food={Restuarant3} Monogram={Restuarant3} rating={4.7}/>
         <RestaurantCard StarImg={star} name='Golden Tulip' price='$260' Food={Restuarant4} Monogram={Restuarant4} rating={4.7}/>
         <RestaurantCard StarImg={star} name='African Pub' price='$170' Food={Restuarant5} Monogram={Restuarant5} rating={4.7}/>
         <RestaurantCard StarImg={star} name='Iya Moria' price='$500' Food={Restuarant6} Monogram={Restuarant6} rating={4.7}/>
         <RestaurantCard StarImg={star} name='Nana Buka' price='$200' Food={Restuarant7} Monogram={Restuarant7} rating={4.7}/>
         <RestaurantCard StarImg={star} name='7 Loaves Africa' price='$100' Food={Restuarant8} Monogram={Restuarant8} rating={4.7}/>
         <RestaurantCard StarImg={star} name='Martha Kitchen' price='$200' Food={Restuarant9} Monogram={Restuarant9} rating={4.7}/>
                 
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
