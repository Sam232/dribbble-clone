import Image from 'next/image';
import { FaRegBookmark } from "react-icons/fa6";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { PiEyeFill } from "react-icons/pi";
import InspiringDesign from '@/app/contants/InspiringDesignsData';

const InspiringDesigns = () => {
  return (
    <div className='flex flex-col w-full items-center justify-center mt-12 gap-y-5'>
        <p className='text-4xl sm:text-5xl font-semibold'>Explore Inspiring Designs</p>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-8 gap-y-20 mt-8'>
            {
                InspiringDesign.length > 0 ? InspiringDesign.map((value: InspiringDesignType, index: number) => (
                    <div className='h-64 w-72 sm:w-60 relative cursor-pointer hover group' key={index}>
                        <Image className='w-full h-full object-cover rounded-lg' src={value.inspiringDesign} alt={`inspiring design ${index+1}`}/>
                        <div className='hidden group-hover:flex'>
                            <div className='group-hover:bg-gradient-to-t opacity-75 from-black bottom-0 w-full h-16 rounded-b-lg absolute'></div>
                            <span className='absolute bottom-2 text-white text-sm gap-x-2 p-3 duration-200'>{value.desc}</span>
                            <div className="flex absolute bottom-2 right-4 gap-x-2">
                                <span className='bg-white rounded-full p-3'><FaRegBookmark/></span>
                                <span className='bg-white rounded-full p-3'><FaRegHeart/></span>
                            </div>
                        </div>
                        <div className='flex items-center justify-between mt-2'>
                            <div className='flex items-center'>
                                <Image className='h-9 w-9 object-cover rounded-full' src={value.designer.image} alt={`image of ${value.designer.name}`} />
                                <p className='ml-1 text-sm'>{value.designer.name}</p>
                                <span className='bg-slate-100 p-1 text-xs ml-1'>{value.level}</span>
                            </div>
                            <div className='flex items-center gap-x-1'>
                                <div className='flex items-center gap-x-1'>
                                    <span className='text-slate-400 text-sm'><FaHeart/></span>
                                    <p className='text-sm'>{value.likes}</p>
                                </div>
                                <div className='flex items-center gap-x-1'>
                                    <span className='text-slate-400 text-sm'><PiEyeFill/></span>
                                    <p className='text-sm'>{value.views}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )) : ""
            }
        </div>
        <div className='flex items-center justify-center h-52 w-full mt-1'>
            <button className='w-42 bg-white p-5 rounded-full border-black border-[1px]'>Browse more Inspiration</button>
        </div>
    </div>
  )
}

export default InspiringDesigns;