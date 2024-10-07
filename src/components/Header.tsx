import { FiSearch } from 'react-icons/fi';
import { LuAlignJustify } from "react-icons/lu";

const Header = () => {
  return (
    <div className=''>
        <div className='hidden xl:flex items-center justify-between mx-14 my-5'>
            <div className='flex items-center justify-start p-2 gap-x-3'>
                <p className='headerLinks'>Find Talent</p>
                <p className='headerLinks'>Inspiration</p>
                <p className='headerLinks'>Learn Design</p>
                <p className='headerLinks'>Jobs</p>
                <p className='headerLinks'>Go Pro</p>
            </div>
            <div className='flex items-center justify-center'>
                <p className='text-xl font-semibold'>Dribble</p>
            </div>
            <div className='flex items-center justify-end gap-x-4'>
                <div className='flex items-center justify-center bg-white rounded-full p-2 w-full gap-x-1'>
                    <FiSearch/>
                    <input className='outline-none' type="text" placeholder='Search...' />
                </div>
                <p className='headerLinks'>Login</p>
                <div>
                    <button className='bg-blue-950 text-white rounded-full px-4 py-2'>Signup</button>
                </div>
            </div>
        </div>
        <div className="xl:hidden">
            <div className="flex items-center justify-between mx-14 my-5">
                <div className="flex items-center justify-center gap-x-3">
                    <span className='text-2xl cursor-pointer' id="menu-button" aria-expanded="true" aria-haspopup="true"><LuAlignJustify /></span>
                    <p className='text-xl font-semibold cursor-pointer'>Dribble</p>
                </div>
                <div className="flex items-center justify-center gap-x-3">
                    <span className='text-2xl cursor-pointer'><FiSearch/></span>
                    <button className='bg-blue-950 text-white rounded-full px-6 py-3'>Signup</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header;