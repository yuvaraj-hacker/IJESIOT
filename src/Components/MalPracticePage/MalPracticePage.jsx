import React from 'react'
import MalPractice from '../../Shared/Components/MalPractice/MalPractice'
import HelmetComponent from '../Helmet/HelmetProvider'

function MalPracticePage() {
    return (
        <>
            <HelmetComponent title="Malpractice - International Journal of Embedded Systems and IoT" />
            <MalPractice />
        </>
    )
}

export default MalPracticePage
