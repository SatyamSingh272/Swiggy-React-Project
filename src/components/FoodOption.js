import { imageGridCards } from "../utils/FoodData"
import FoodCard from "./FoodCard"

export default function FoodOption(){

    return(
        <>
    

           <div className="w-[80%] container mx-auto mt-15">
           <h1 className="text-2xl font-bold">Order our best food options</h1>

           <div className="overflow-x-auto mt-5">
           <div className="grid grid-flow-col grid-rows-2 gap-5 w-max">
             {imageGridCards.map((foodData) => (
             <FoodCard key={foodData.id} foodData={foodData} />
          ))}
          </div>
          </div>
          </div>



        </>
    )

}