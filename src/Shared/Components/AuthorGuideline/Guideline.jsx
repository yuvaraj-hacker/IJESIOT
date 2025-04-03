import React from 'react'

function Guideline() {
    return (
        <>
            <section className="flex flex-col gap-5 max-w-[90rem] md:py-10 py-5  mx-auto md:px-5 px-3">
                <div className="  relative">
                    <section className="flex flex-col md:gap-10 gap-5">
                        <section className="flex flex-col gap-4">
                            <div className=' '>
                                <h1 className="text-[#242120] text-center merry   font-semibold  lg:text-2xl   text-lg ">
                                    Author Guidelines
                                </h1>
                            </div>
                            <p className="text-justify md:text-base text-sm">
                                The International Journal of Embedded Systems and IoT welcomes high-quality, original research contributions in the fields of embedded systems, IoT, real-time computing, and related disciplines. Authors must adhere to the following guidelines when preparing and submitting their manuscripts.
                            </p>
                        </section>

                        <section className="flex flex-col gap-4">
                            <div className=''>
                                <h1 className="text-[#242120] text-center merry   font-semibold  lg:text-2xl   text-lg ">
                                    Publishing Requirements
                                </h1>
                            </div>

                            <div className="md:text-base text-sm">
                                <ul className="list-disc list-inside flex flex-col gap-2">
                                    <li><span className='font-semibold'>Formatting Requirements</span> – Manuscripts must strictly follow the IJESIOT template and adhere to proper formatting guidelines.</li>
                                    <li><span className='font-semibold'>Abstract Guidelines</span> – Abstracts should be between 200–1000 characters, structured clearly with concise objectives, methodology, and findings.</li>
                                    <li><span className='font-semibold'>Keyword Inclusion</span> – Include 3 to 8 keywords to enhance indexing and searchability.</li>
                                    <li><span className='font-semibold'>Reference Style</span> – References must comply with IEEE/APA citation style, ensuring consistency and accuracy.</li>
                                    <li><span className='font-semibold'>Language & Writing Quality</span> – Maintain proper grammar, spelling, and formal academic English throughout the manuscript.</li>
                                    <li><span className='font-semibold'>Figures & Tables</span> – All figures and tables must have descriptive captions and be appropriately referenced in the text.</li>
                                    <li><span className='font-semibold'>Ethical Compliance</span> – Ethical approval statements must be provided where applicable, particularly for studies involving human or animal subjects.</li>
                                </ul>
                            </div>

                        </section>
                        <section className="flex flex-col gap-4  md:text-base text-sm">
                            <div className=''>
                                <h1 className="text-[#242120] text-center merry   font-semibold  lg:text-2xl   text-lg ">
                                    Submission Process
                                </h1>
                            </div>
                            <div className="md:text-base text-sm">
                                <ul className="list-disc list-inside flex flex-col gap-2">
                                    <li><span className='font-semibold'>Initial Manuscript Screening</span> – The editorial team evaluates submissions for scope, quality, and adherence to guidelines.</li>
                                    <li><span className='font-semibold'>Double-Blind Peer Review</span> – Manuscripts are reviewed by at least two independent experts to ensure scholarly integrity.</li>
                                    <li><span className='font-semibold'>Author Revision Period</span> – Authors receive reviewer feedback and are provided with clear deadlines for revisions.</li>
                                    <li><span className='font-semibold'>Final Editorial Decision</span> – The editorial board makes the final decision based on reviewer recommendations.</li>
                                    <li><span className='font-semibold'>Publication & Licensing</span> – Articles are published under a Creative Commons license for maximum visibility.</li>
                                    <li><span className='font-semibold'>DOI Assignment</span> – Each article is assigned a unique DOI for permanent identification and citation.</li>
                                    <li><span className='font-semibold'>Digital Archiving</span> – Published research is digitally archived to ensure long-term availability and accessibility.</li>
                                </ul>
                            </div>

                        </section>

                    </section>
                </div>
            </section>
        </>
    )
}

export default Guideline
