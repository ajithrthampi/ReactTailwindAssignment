import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faTools } from '@fortawesome/free-solid-svg-icons';
import round from "../../assets/round.png"
import tools from "../../assets/tools.jpg"

const Team = () => {
  return (
    <section className='pt-7 px-3 md:pb-32 pb-10 relative '>
      <div className=''>
        <p className='text-lg'>What can I do as a team?</p>
      </div>

      <div className=' flex md:flex-row flex-col gap-5 pt-6'>

        <div className='w-full lg:p-5 p-4 md:h-[220px] h-full border bg-[#ffffff] md:pb-16 '>
          <div className='flex sm:flex-row flex-col lg:gap-6 gap-4'>
            <div>
              <img className='sm:w-64' src={round} alt="" />
            </div>
            <div className='flex flex-col gap-5'>
              <div className='flex flex-col lg:gap-5 gap-3'>
                <p className=' font-semibold text-base '>Round Robin Scheduling</p>
                <p className=' lg:text-base text-sm'>Automaticaly assign meetings based on what
                  makes the most sense for your team's goals - whether by availibility. priority or equity.
                </p>
              </div>
              <p className='text-[#6195d0] cursor-pointer hover:text-[#466e9d] duration-200'>Watch Video</p>
            </div>
          </div>
        </div>


        <div className='w-full lg:p-5 p-4 md:h-[220px] h-full border bg-[#ffffff] md:pb-16 '>
        <div className='flex sm:flex-row flex-col lg:gap-6 gap-4'>
            <div>
              <img className='sm:w-64 ' src={tools} alt="" />
            </div>
            <div className='flex flex-col gap-5'>
              <div className='flex flex-col lg:gap-5 gap-3'>
                <p className=' font-semibold text-base '>Access Powerful Management Tools</p>
                <p className=' lg:text-base text-sm'>Automaticaly assign meetings based on what
                  makes the most sense for your team's goals - whether by availibility. priority or equity.
                </p>
              </div>
              <p className='text-[#6195d0] cursor-pointer hover:text-[#466e9d] duration-200'>Watch Video</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Team