import { GroceryGridCards } from "../utils/Grocery"
import Grocerycard from "./Grocerycard"
export default function GroceryOption(){

    return(
        <>

        <div className=" w-[80%] container mx-auto mt-15">
        <h1 className="text-2xl font-bold">Shop Groceries on Instamart</h1>
         <div className=" container mx-auto flex flex-nowrap overflow-x-auto mt-5  gap-5 ">
                    {
                        GroceryGridCards.map((foodData)=><Grocerycard key={foodData.id} foodData={foodData}></Grocerycard>)
                    }
                </div>
            </div>
        </>
    )
}