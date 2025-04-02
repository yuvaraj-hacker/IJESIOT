import React from 'react'

function Publication() {
    return (
        <>
            <section className="flex flex-col gap-5 max-w-[90rem] md:py-10 py-5  mx-auto md:px-5 px-3">
                <div className="  relative">
                    <section className="flex flex-col gap-5">
                        <section className="flex flex-col gap-4">
                            <div className=' '>
                                <h1 className="text-[#242120] text-center merry   font-semibold  lg:text-2xl underline underline-offset-8  decoration-[#D3A66F]    text-lg ">
                                    Publication Ethics
                                </h1>
                            </div>
                            <p className="text-justify md:text-base text-sm">
                                The International Journal of Embedded Systems and IoT (IJESIOT) is committed to upholding the highest ethical standards in scholarly publishing. Authors, reviewers, and editors are expected to adhere to the following principles:
                            </p>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#242120]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Author Responsibilities
                            </h1>
                            <ul className="list-disc list-inside flex flex-col gap-2 md:text-base text-sm">
                                <li>Ensure that their work is original and properly cites all sources.</li>
                                <li>Avoid plagiarism, data fabrication, and redundant publication.</li>
                                <li>Disclose any potential conflicts of interest.</li>
                                <li>Obtain necessary permissions for copyrighted material.</li>
                                <li>Adhere to ethical research practices involving human or animal subjects.</li>
                            </ul>

                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#242120]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Reviewer Responsibilities
                            </h1>

                            <ul className="list-disc list-inside flex flex-col gap-2 md:text-base text-sm">
                                <li>Provide an objective and unbiased evaluation of the manuscript.</li>
                                <li>Maintain confidentiality and not disclose manuscript details.</li>
                                <li>Avoid conflicts of interest and decline reviews when necessary.</li>
                                <li>Provide constructive feedback to help improve the manuscript.</li>

                            </ul>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#242120]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Editorial Responsibilities
                            </h1>
                            <ul className="list-disc list-inside flex flex-col gap-2 md:text-base text-sm">
                                <li>Ensure a fair and unbiased peer-review process.</li>
                                <li>Maintain the confidentiality of submitted manuscripts.</li>
                                <li>Make publication decisions based on the manuscript’s quality and relevance.</li>
                                <li>Address any ethical concerns, including plagiarism or research misconduct.</li>

                            </ul>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#242120]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Handling Misconduct
                            </h1>
                            <ul className="list-disc list-inside flex flex-col gap-2 md:text-base text-sm">
                                <li>Allegations of plagiarism, data falsification, or other ethical breaches will be investigated thoroughly.</li>
                                <li>If misconduct is confirmed, appropriate actions, including retractions or corrections, will be taken.</li>
                            </ul>
                        </section>
                    </section>
                </div>
            </section>
        </>
    )
}

export default Publication

