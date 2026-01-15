

export default function DineCard({RestData}){
    return(
    <div className="max-w-sm flex-none">
    <a target="_blank" href={RestData?.cta?.link}>
  <div className="relative w-80 h-50">
    
    {/* Image */}
    <img
      className="w-full h-full object-cover rounded-lg"
      src={"https://media-assets.swiggy.com/swiggy/image/upload/" + RestData?.info?.mediaFiles[0]?.url}
      alt="restaurant"
    />

    {/* Dark Gradient Overlay */}
    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent rounded-lg"></div>

    {/* Restaurant Name */}
    <p className="absolute bottom-2 left-2 text-lg font-bold text-white drop-shadow-lg z-10">
      {RestData?.info?.name}
    </p>

    {/* Rating */}
    <p className="absolute bottom-2 right-2 text-lg font-bold text-white drop-shadow-lg z-10">
    {RestData?.info?.rating?.value}
    </p>

  </div>
  </a>
</div>

    )


}