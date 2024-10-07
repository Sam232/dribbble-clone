
const Banner = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center mt-12 py-5 gap-y-8">
        <div className="bg-yellow-300 rounded-full p-2 md:px-5 md:py-2">
            <p className="text-sm md:text-sm">Over 3 million ready-to-work creatives!</p>
        </div>
        <div className="flex flex-col w-full items-center justify-center">
            <p className="text-3xl md:text-7xl">Work with the world's top</p>
            <p className="text-3xl md:text-7xl">creative talent.</p>
        </div>
        <div>
            <p className="hidden sm:flex sm:text-sm md:text-xl">Connect with millions of top-rated designers & agencies around the world.</p>
            <div className="flex flex-col items-center justify-center text-sm sm:hidden">
                <p>Connect with millions of top-rated</p>
                <p>designers & agencies around the world.</p>
            </div>
        </div>
        <div>
            <button className="bg-blue-950 text-white rounded-full px-6 py-4">Start hiring today</button>
        </div>
    </div>
  )
}

export default Banner;