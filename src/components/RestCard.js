

export default function RestCard({restInfo}){

    return(
        <div className="max-w-70 mb-2 transform transition duration-150  hover:scale-95">
        <img className="w-70 h-45 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo?.info?.cloudinaryImageId}></img>
        <div className="w-[90%] mx-auto mt-3">
        <div className="font-bold text-xl">{restInfo?.info?.name}</div>
        <div className="flex items-center gap-2">
         <svg
            width={16}
            height={16}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="#48C479" />
            <path
              d="M12 3.8l2.47 5.01 5.53.8-4 3.9.94 5.5L12 16.9l-4.94 2.6.94-5.5-4-3.9 5.53-.8L12 3.8z"
              fill="#FFFFFF"
            />
          </svg>

        <span className="text-lg">{restInfo?.info?.avgRating}</span>
        <span className="text-lg font-semibold">{restInfo?.info?.sla?.slaString}</span>
       
        </div>

         <div className="text-gray-500 text-xl mt-1 h-7 overflow-hidden ">{restInfo?.info?.cuisines.join(" ")}</div>
        </div>

    
    </div>
    )
}