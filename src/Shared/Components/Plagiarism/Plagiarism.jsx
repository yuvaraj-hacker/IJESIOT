import React from 'react'

function Plagiarism() {
    return (
        <>
            <section className="flex flex-col gap-5 max-w-[90rem] md:py-10 py-5  mx-auto md:px-5 px-3">
                <div className="  relative">
                    <section className="flex flex-col gap-5">
                        <section className="flex flex-col gap-4">
                            <div className=' '>
                                <h1 className="text-[#242120] text-center merry font-semibold  lg:text-2xl underline underline-offset-8  decoration-[#D3A66F] text-lg ">
                                    Plagiarism Policy
                                </h1>
                            </div>
                            <p className="text-justify md:text-base text-sm">
                                The International Journal of Embedded Systems and IoT maintains a strict zero-tolerance policy against plagiarism. All submitted manuscripts undergo rigorous plagiarism screening to ensure academic integrity.
                            </p>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#242120]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Plagiarism Detection
                            </h1>
                            <ul className="flex flex-col gap-2 list-disc list-inside md:text-base text-sm">
                                <li>All submissions are checked using plagiarism detection software.</li>
                                <li>Manuscripts with more than 10% similarity (excluding references) may be returned for revision or rejected.</li>
                            </ul>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#242120]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Types of Plagiarism
                            </h1>
                            <ul className="list-disc pl-5 flex flex-col gap-2 md:text-base text-sm text-[#242120]">
                                <li><span className="font-semibold">Direct Plagiarism:</span> Copying text verbatim without proper citation.</li>
                                <li><span className="font-semibold">Self-Plagiarism:</span> Reusing one’s own previously published work without disclosure.</li>
                                <li><span className="font-semibold">Mosaic Plagiarism:</span> Mixing copied phrases with original text without proper acknowledgment.</li>
                                <li><span className="font-semibold">Improper Paraphrasing:</span> Rewording another author’s work without appropriate citation.</li>
                            </ul>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#242120]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Consequences of Plagiarism
                            </h1>
                            <ul className="list-disc pl-5 flex flex-col gap-2 md:text-base text-sm  ">
                                <li>Manuscripts with minor plagiarism are sent back for immediate correction.</li>
                                <li>Papers with significant plagiarism are outright rejected.</li>
                                <li>Authors found guilty of plagiarism may be blacklisted from future submissions.</li>
                            </ul>

                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#242120]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Best Practices to Avoid Plagiarism
                            </h1>
                            <ul className="list-disc pl-5 flex flex-col gap-2 md:text-base text-sm  ">
                                <li>Rephrase concepts in your own words while maintaining original meaning.</li>
                                <li>Properly cite all sources and use quotation marks when necessary.</li>
                                <li>Utilize plagiarism detection tools before submission.</li>
                            </ul>

                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#242120]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Post-Publication
                            </h1>
                            <ul className="list-disc pl-5 flex flex-col gap-2 md:text-base text-sm  ">
                                <li>The article is indexed in relevant academic databases.</li>
                                <li>Authors receive a notification regarding citation tracking and dissemination.</li>

                            </ul>
                        </section>
                    </section>
                </div>
            </section>
        </>
    )
}

export default Plagiarism

