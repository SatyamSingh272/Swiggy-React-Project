import { dineoutRestaurants } from "../utils/DineData"
import DineCard from "./DineCard"


export default function DineOption(){
    return(
        <>
        <div className="w-[80%] mx-auto mt-20 mb-20">
            <h1 className="font-bold text-2xl">Discover best restaurants on Dineout</h1>
            <div className="flex flex-nowrap overflow-x-auto mt-5 gap-4">
                {
                    dineoutRestaurants.map((RestData)=><DineCard key={RestData?.info?.id} RestData={RestData}></DineCard>)
                }
            </div>
        </div>

        </>
    )

}