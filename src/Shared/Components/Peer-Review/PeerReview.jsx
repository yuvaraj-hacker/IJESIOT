import React from 'react'

function PeerReview() {
    return (
        <>
            <section className="flex flex-col gap-5 max-w-[90rem] md:py-10 py-5  mx-auto md:px-5 px-3">
                <div className="  relative">
                    <section className="flex flex-col gap-5">
                        <section className="flex flex-col gap-4">
                            <div className=' '>
                                <h1 className=" text-[#242120] text-center merry   font-semibold  lg:text-2xl underline underline-offset-8  decoration-[#D3A66F]   text-lg ">
                                    Peer Review Process
                                </h1>
                            </div>
                            <p className="text-justify md:text-base text-sm">
                                The International Journal of Embedded Systems and IoT follows a rigorous peer review process to maintain the highest standards of academic excellence and research integrity.                            </p>
                        </section>

                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#242120]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Initial Screening
                            </h1>

                            <ul className="list-disc list-inside  flex flex-col gap-2 md:text-base text-sm">
                                <li><span className='font-semibold'>Scope Alignment:</span> The editorial team conducts an initial review to ensure the manuscript aligns with the journal’s focus on Embedded Systems and IoT.</li>
                                <li><span className='font-semibold'>Formatting Compliance:</span> Submissions are checked for adherence to the journal’s formatting guidelines, including structure, citations, and referencing style.</li>
                                <li><span className='font-semibold'>Scholarly Standards:</span> The manuscript is evaluated for clarity, originality, and relevance to the field.</li>
                                <li><span className='font-semibold'>Preliminary Decision:</span> Manuscripts that do not meet the basic requirements may be returned to the authors for necessary revisions before proceeding to peer review.</li>
                            </ul>

                        </section>
                        <section className="flex flex-col gap-2 ">
                            <h1 className="    merry   font-semibold text-[#242120]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Double-Blind Peer Review
                            </h1>
                            <ul className="list-disc list-outside flex flex-col gap-2 pl-5 md:text-base text-sm">
                                <li><span className='font-semibold'>Evaluation by Experts:</span> Manuscripts that pass the initial screening are assigned to at least two independent reviewers with expertise in Embedded Systems and IoT.</li>
                                <li><span className='font-semibold'>Anonymity for Fairness:</span> The identities of both authors and reviewers remain anonymous to ensure an unbiased and objective assessment.</li>
                                <li><span className='font-semibold'>Comprehensive Assessment:</span> Reviewers evaluate the manuscript based on originality, technical quality, research methodology, significance, clarity, and adherence to ethical guidelines.</li>
                                <li><span className='font-semibold'>Constructive Feedback:</span> Authors receive detailed feedback, including suggestions for improvement, modifications, or clarifications to enhance the quality of the research.</li>
                                <li><span className='font-semibold'>Revision and Re-evaluation:</span> If required, authors may be asked to revise their manuscript based on reviewer comments. Revised submissions may undergo further rounds of review before a final decision is made.</li>
                                <li><span className='font-semibold'>Editorial Decision:</span> The final acceptance or rejection decision is based on the reviewers’ recommendations and the editorial board’s assessment of the manuscript’s contribution to the field.</li>
                            </ul>

                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#242120]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Author Revisions
                            </h1>
                            <ul className="list-disc list-inside flex flex-col gap-2 md:text-base text-sm">
                                <li><span className='font-semibold'>Revision Request:</span> Based on reviewer feedback, authors may be requested to revise their manuscript.</li>
                                <li><span className='font-semibold'>Submission Deadline:</span> A revised version must be submitted within the specified deadline, with a detailed response addressing the reviewers' comments.</li>
                            </ul>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#242120]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Editorial Decision
                            </h1>
                            <p className="text-justify md:text-base text-sm">
                                After revisions, the editorial board makes the final decision:
                            </p>
                            <ul className="list-disc list-inside flex  flex-col gap-2 md:text-base text-sm">
                                <li><span className='font-semibold'>Accepted:</span> The manuscript is approved for publication.</li>
                                <li><span className='font-semibold'>Minor/Major Revisions:</span> The author must make necessary changes before acceptance.</li>
                                <li><span className='font-semibold'>Rejected:</span> The manuscript does not meet the journal's standards.</li>
                            </ul>
                            <p className="text-justify md:text-base text-sm">
                                The decision is communicated to the author via email.
                            </p>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#242120]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Final Proof & Publication
                            </h1>
                            <ul className="list-disc list-inside flex flex-col gap-2 md:text-base text-sm">
                                <li><span className='font-semibold'>Final Proof Approval:</span> Once accepted, authors receive a final proof for approval before publication.</li>
                                <li><span className='font-semibold'>Publication & Indexing:</span> The article is published in the upcoming issue and indexed accordingly.</li>
                            </ul>
                        </section>
                    </section>
                </div>
            </section>
        </>
    )
}

export default PeerReview

