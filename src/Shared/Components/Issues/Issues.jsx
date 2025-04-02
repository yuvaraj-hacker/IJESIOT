import React from 'react'
import { FiCheckCircle } from 'react-icons/fi'

function Issues() {
    return (
        <>
            <section className='h-[60vh] flex items-center gap-3 justify-center'>
                <i class="fi fi-rr-time-check text-[#242120] flex items-center text-xl"></i>
                <p className=" md:text-xl text-[#242120] ">There are no active issues at this time.</p>
            </section>
        </>
    )
}

export default Issues
