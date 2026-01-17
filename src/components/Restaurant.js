import { useEffect, useState } from "react";


export default function Restaurant(){


     const [RestData, setRestData] = useState({})

    useEffect(()=>{


        async function fetchData(){


           const proxyServer = "https://thingproxy.freeboard.io/fetch/";
           const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85020&is-seo-homepage-enabled=true";
           const response = await fetch(proxyServer+swiggyAPI)
           const data = await response.json();

           setRestData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        }
        fetchData();
    },[])

    console.log(RestData);

    
}