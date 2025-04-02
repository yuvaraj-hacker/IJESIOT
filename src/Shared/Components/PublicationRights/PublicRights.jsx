import React from 'react'

function PublicRights() {
    return (
        <>
            <section className="flex flex-col gap-5 max-w-[90rem]  md:py-10 py-5 mx-auto md:px-5 px-3">
                <div className="  relative">
                    <section className="flex flex-col gap-5">
                        <section className="flex flex-col gap-4">
                            <div className=' '>
                                <h1 className="text-[#242120] text-center merry  font-semibold  lg:text-2xl  underline underline-offset-8  decoration-[#D3A66F]  text-lg ">
                                    Publication Rights Policy
                                </h1>
                            </div>
                            <p className="text-justify md:text-base text-sm">
                                International Journal of Embedded Systems and IoT implements a balanced publication rights policy that protects both author interests and journal integrity. Our approach focuses on exclusive licensing rather than copyright transfer, ensuring maximum distribution while maintaining authors' intellectual property rights.                            </p>                        </section>

                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#242120]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Copyright Policy
                            </h1>

                            <div className='flex flex-col gap-2 md:text-base text-sm'>
                                <ul className="list-disc pl-5   flex flex-col gap-2">
                                    <li>We maintain a sole and exclusive licence policy for published content rather than copyright transfer.</li>
                                    <li>Authors retain ownership of their copyright while granting exclusive publishing rights.</li>
                                    <li>This policy balances author interests with journal sustainability and reputation.</li>
                                    <li>Some specific cases may require different arrangements – refer to Author Instructions for details.</li>
                                </ul>
                            </div>

                        </section>
                        <section className="flex flex-col gap-2">
                              <h1 className="merry font-semibold text-[#242120]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Key Benefits
                            </h1>
                            <div className='flex flex-col gap-2 md:text-base text-sm'>
                                <ul className="list-disc pl-5 flex flex-col gap-2">
                                    <li>Authors are recognized as the copyright owners, demonstrating our value of author relationships</li>
                                    <li>Centralized management of permissions and licensing ensures maximum content dissemination</li>
                                    <li>Protection against infringement, inappropriate use, libel, and plagiarism</li>
                                    <li>Ability to maintain and monitor the integrity of published content across all media</li>
                                </ul>
                            </div>

                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#242120]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Rights Management
                            </h1>
                            <div className='flex flex-col gap-2 md:text-base text-sm'>
                                <ul className="list-disc pl-5 flex flex-col gap-2">
                                    <li>Exclusive rights enable efficient management of content distribution through intermediaries</li>
                                    <li>The journal can take protective measures on behalf of authors when necessary</li>
                                    <li>Maintaining exclusive rights helps uphold the integrity of peer-reviewed and accepted articles</li>
                                    <li>Comprehensive management of content across all media platforms</li>
                                </ul>
                            </div>
                        </section>
                    </section>
                </div>
            </section>
        </>
    )
}

export default PublicRights

