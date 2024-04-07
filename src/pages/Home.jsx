import React from 'react'
import Navbar from '../components/Navbar'
import Topbar from '../components/admin/Topbar'
import InviteUser from '../components/admin/InviteUser'
import Team from '../components/admin/Team'

const Home = () => {
    return (
        <div className=' relative'>
            <Navbar />
            <div className='shadow-lg mt-[73px] '>
                <div className='max-w-6xl mx-auto p-4'>
                    <Topbar />
                </div>
            </div>

            <div className='max-w-6xl mx-auto p-4 '>
                <InviteUser />
                <Team />
            </div>

            <div className='absolute 2xl:bottom-72 bottom-96 md:block hidden right-12'>
                <button className='rounded-md bg-[#353f4e] text-white p-3.5 text-sm font-light'>Getting started</button>
                <div className='absolute -top-2 -right-2 w-4 h-4 bg-red-600 rounded-full text-[8px] text-white flex items-center justify-center'>3</div>
            </div>

          
        </div>
    )
}

export default Home