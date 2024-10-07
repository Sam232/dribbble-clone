import PortfoliosData from "@/app/contants/PortfoliosData";
import Image from "next/image";

const Portfolios = () => {
  return (
    <div className="flex items-center justify-center w-full p-10">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-7">
        {
          PortfoliosData.length > 0 ? PortfoliosData.map((value: PortfolioType, index: number) => (
            <div className="flex flex-col cursor-pointer" key={index}>
              <div className="w-52 h-52">
                <Image className="w-full h-full object-cover rounded-lg" src={value.image} alt={`portfolio image ${index+1}`}/>
              </div>
              <p className="mt-1 mb-3 text-[18px]">{value.desc}</p>
            </div>
          )) : ""
        }
      </div>
    </div>
  )
}

export default Portfolios;