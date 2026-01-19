import { useEffect, useState } from "react";
import RestCard from "./RestCard";

export default function Restaurant(){


     const [RestData, setRestData] = useState([])

    useEffect(()=>{


        async function fetchData(){

            const response = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85020&is-seo-homepage-enabled=true")

            const data = await response.json();
            setRestData(data);


            setRestData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        }
        fetchData();
    },[])

    

    return(
        <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
        {
            RestData.map((restInfo)=><RestCard key={restInfo.info.id} restInfo={restInfo}></RestCard>)
        }

        </div>
    )

    
}