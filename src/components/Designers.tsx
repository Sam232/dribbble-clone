import Image from "next/image";
import DesignersData from "@/app/contants/DesignersData";
import JobTitle from "./JobTitle";

const Designers = () => {
  return (
    <div className="flex w-full items-center justify-center mt-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-8 gap-y-6">
        {
          DesignersData.map((value: DesignerType, index: number) => (
              <div className="h-80 w-72 sm:w-60 relative" key={index}>
                  <Image className="h-full w-full object-cover rounded-lg" src={value.image} alt={`image of ${value.name}`} />
                  <JobTitle name={value.name} title={value.role} roles={value.skills}/>
              </div>
          ))
        }
        </div>
    </div>
  )
}

export default Designers;