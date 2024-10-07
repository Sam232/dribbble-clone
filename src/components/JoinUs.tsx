
const JoinUs = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-20 bg-yellow-300">
        <div className="flex flex-col items-center gap-y-1">
            <p className="text-4xl md:text-6xl tracking-wide">Find your next</p>
            <p className="text-4xl md:text-6xl tracking-wide">designer today</p>
        </div>
        <div className="flex flex-col items-center mt-7 gap-y-1">
            <p className="text-[13px] md:text-xl">The world's leading brands use Dribble to hire creative talent</p>
            <p className="text-[13px] md:text-xl">Browse millions of top-rated portfolios to find the perfect</p>
            <p className="text-[13px] md:text-xl">creative match.</p>
        </div>
        <div className="flex items-center gap-x-2 mt-12">
            <button className="w-40 bg-black rounded-full text-white p-4">Get started now</button>
            <button className="w-40 bg-white rounded-full text-black p-4">Learn about hiring</button>
        </div>
        <div className="flex items-center gap-x-1 mt-10">
            <p className="text-xl">Are you a designer?</p>
            <a href="" className="text-xl underline">Join Dribble</a>
        </div>
    </div>
  )
}

export default JoinUs;