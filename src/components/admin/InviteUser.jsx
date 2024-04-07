import React from 'react'

const InviteUser = () => {
    return (
        <section className='flex justify-center items-center  md:pb-56 pb-20 border-b md:pt-16 pt-8'>
            <div className='  flex flex-col sm:items-center gap-5 '>
                <h3 className='font-semibold text-lg '>Start Building your organizatin</h3>
                <p className='text-base'>Invite users to unlock unique team schedulling features stating as low as $12 per user/mo.</p>
                <button className='bg-[#0268fe] text-sm sm:p-4 p-3 text-white rounded-full sm:max-wxs'>Invite Users</button>
            </div>

            <div className='fixed -right-7  -rotate-90 md:block hidden'>
                <button className='py-2.5 px-4 shadow-lg border rounded-md text-sm text-[#808080]'>Feedback</button>
            </div>
        </section>
    )
}

export default InviteUser