
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const data = [
  "All people",
  "Groups",
  "Managed events",
]

const Topbar = () => {
  const [value, setValue] = useState(0)

  const handleClick = (index) => {
    setValue(index)
  }
  return (
    <section className=''>
      <div className=' flex justify-between'>
        <div className='flex  sm:flex-row flex-col sm:items-center sm:gap-2.5'>
          <h3 className=' md:text-2xl text-lg'>Admin Managament</h3>
          <p className='text-[#b2b2b2] md:text-sm text-xs'>1/1seats occupied</p>
        </div>
        <button className='border-[1.5px] rounded-full md:h-12 h-8 md:w-32 w-20 md:text-sm text-[10px] border-[#0268fe] text-[#0268fe] hover:text-[#84b4fb] hover:border-[#84b4fb] duration-200'> <FontAwesomeIcon icon={faPlus} /> New User</button>
      </div>

      <div className='pt-6'>
        <div className='flex gap-3 relative'>
          <ul className='md:text-base text-xs flex md:gap-8 gap-3'>
            {
              data.map((item, index) => (
                <div key={index}>
                  <li className={`cursor-pointer ${value === index ? "": "text-[#b2b2b2] "}`} onClick={() => handleClick(index)}>{item}</li>
                  <div className={`${value === index ? "h-[2px] bg-[#0169ff] absolute -bottom-4 " : "  absolute bottom-0  "}  ` }  
                  style={{ width: `${item.length * 7}px` }} 
                  ></div>
                </div>
              ))
            }
          </ul>
          <button className='rounded-md py-1 px-3 bg-[#0268fe] text-white text-xs'>BETA</button>
        </div>
      </div>
    </section>
  )
}

export default Topbar