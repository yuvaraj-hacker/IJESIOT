import React from 'react'

function Correction() {
    return (
        <>
            <section className="flex flex-col gap-5 max-w-[90rem]  md:py-10 py-5 mx-auto md:px-5 px-3">
                <div className="  relative">
                    <section className="flex flex-col gap-5">
                        <section className="flex flex-col gap-4">
                            <div className=' '>
                                <h1 className="text-[#212420] text-center merry font-semibold  lg:text-2xl  underline underline-offset-8  decoration-[#D3A66F]  text-lg ">
                                    Journal Correction Policy
                                </h1>
                            </div>
                            <p className="text-justify md:text-base text-sm">
                                Our journal maintains strict standards for publishing corrections to ensure the integrity and accuracy of scientific literature. We carefully evaluate each correction request to maintain the highest quality of published research while ensuring transparency in scientific communication.                            </p>
                        </section>

                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#212420]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Version of Record (VoR)
                            </h1>

                            <div className='flex flex-col gap-2 md:text-base text-sm'>
                                <ul className="list-disc pl-5 flex flex-col gap-2">
                                    <li>The paper, revised and accepted following peer review, in its final form, including the abstract, text, references, and bibliography</li>
                                    <li>All accompanying tables, illustrations, and data</li>
                                    <li>Any supplemental material provided with the paper</li>
                                </ul>
                            </div>

                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#212420]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Correction Criteria
                            </h1>
                            <div className='flex flex-col gap-2 md:text-base text-sm'>
                                <ul className="list-disc pl-5 flex flex-col gap-2">
                                    <li>Corrections are published only for significant errors affecting factual information</li>
                                    <li>Minor corrections (spelling, typographical, grammatical errors) will not be published</li>
                                    <li>Corrections are published as errata or corrigenda for serious errors affecting scientific accuracy</li>
                                    <li>Changes that don't materially affect the article or reader understanding are not published</li>
                                </ul>
                            </div>

                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#212420]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Correction Process
                            </h1>
                            <div className='flex flex-col gap-2 md:text-base text-sm'>
                                <ul className="list-disc pl-5 flex flex-col gap-2">
                                    <li>Authors must submit a letter to the Editor-in-Chief stating the reason and justification for changes</li>
                                    <li>All changes must be clearly detailed and signed by all authors</li>
                                    <li>Editor-in-Chief consults with original Editors and Reviewers</li>
                                    <li>Refutations undergo peer review, typically with original referees</li>
                                    <li>Refutations may be published in Communications Arising or Correspondence sections</li>
                                </ul>
                            </div>

                        </section>

                    </section>
                </div>
            </section>
        </>
    )
}

export default Correction

