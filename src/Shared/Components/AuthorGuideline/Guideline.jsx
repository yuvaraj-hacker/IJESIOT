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
                                The International Journal of Embedded Systems and IoT (IJESIOT) welcomes high-quality, original research contributions in the fields of embedded systems, IoT, real-time computing, and related disciplines. Authors must adhere to the following guidelines when preparing and submitting their manuscripts.
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
                                    <li><strong>Formatting Requirements</strong> – Manuscripts must strictly follow the IJESIOT template and adhere to proper formatting guidelines.</li>
                                    <li><strong>Abstract Guidelines</strong> – Abstracts should be between 200–1000 characters, structured clearly with concise objectives, methodology, and findings.</li>
                                    <li><strong>Keyword Inclusion</strong> – Include 3 to 8 keywords to enhance indexing and searchability.</li>
                                    <li><strong>Reference Style</strong> – References must comply with IEEE/APA citation style, ensuring consistency and accuracy.</li>
                                    <li><strong>Language & Writing Quality</strong> – Maintain proper grammar, spelling, and formal academic English throughout the manuscript.</li>
                                    <li><strong>Figures & Tables</strong> – All figures and tables must have descriptive captions and be appropriately referenced in the text.</li>
                                    <li><strong>Ethical Compliance</strong> – Ethical approval statements must be provided where applicable, particularly for studies involving human or animal subjects.</li>
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
                                    <li><strong className="">Initial Manuscript Screening</strong> – The editorial team evaluates submissions for scope, quality, and adherence to guidelines.</li>
                                    <li><strong className="">Double-Blind Peer Review</strong> – Manuscripts are reviewed by at least two independent experts to ensure scholarly integrity.</li>
                                    <li><strong className="">Author Revision Period</strong> – Authors receive reviewer feedback and are provided with clear deadlines for revisions.</li>
                                    <li><strong className="">Final Editorial Decision</strong> – The editorial board makes the final decision based on reviewer recommendations.</li>
                                    <li><strong className="">Publication & Licensing</strong> – Articles are published under a Creative Commons license for maximum visibility.</li>
                                    <li><strong className="">DOI Assignment</strong> – Each article is assigned a unique DOI for permanent identification and citation.</li>
                                    <li><strong className="">Digital Archiving</strong> – Published research is digitally archived to ensure long-term availability and accessibility.</li>
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
