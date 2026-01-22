import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function RestaurantMenu(){

    let {id} = useParams();
    console.log(id);

    const [RestData, setRestData] = useState(null);

    useEffect(()=>{


        async function fetchData(){

            const response = await fetch (`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.52110&lng=73.85020&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)

            const data = await response.json();
            setRestData(data);


           
        }
        fetchData();
    },[])

    console.log(RestData);

    return(
        <>
        <h1>Hello World</h1>
        <h2>{id}</h2>
        </>
    )

}