import React from 'react'

function ArticleProcess() {
    return (
        <>
            <section className="flex flex-col gap-5 max-w-[90rem] md:py-10 py-5  mx-auto md:px-5 px-3">
                <div className="  relative">
                    <section className="flex flex-col gap-5">
                        <section className="flex flex-col gap-4">
                            <div className=' '>
                                <h1 className="text-[#242120] text-center merry   font-semibold  lg:text-2xl underline underline-offset-8  decoration-[#D3A66F]   text-lg ">
                                    Article Processing
                                </h1>
                            </div>
                            <p className="text-justify md:text-base text-sm">
                                The International Journal of Embedded Systems and IoT (IJESIOT) follows a structured article processing workflow to ensure timely and high-quality publication of research articles.                            </p>
                        </section>

                        <section className="flex flex-col gap-2">
                            <h1 className="  merry font-semibold text-[#242120]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Submission
                            </h1>
                            <ul className="list-disc list-inside flex flex-col gap-2 md:text-base text-sm">
                                <li>Authors submit their manuscripts through the journal’s online submission system.</li>
                                <li>A confirmation email is sent upon successful submission.</li>
                            </ul>

                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#242120]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Editorial Screening
                            </h1>

                            <ul className="list-disc list-inside flex flex-col gap-2 md:text-base text-sm">
                                <li>The editorial team conducts a preliminary check for plagiarism, formatting compliance, and relevance to the journal’s scope.</li>
                                <li>Manuscripts not meeting the criteria may be returned for modifications.</li>
                            </ul>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#242120]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Acceptance and Proofreading
                            </h1>

                            <ul className="list-disc list-inside flex flex-col gap-2 md:text-base text-sm">
                                <li>Manuscripts undergo a double-blind peer review by at least two independent reviewers.</li>
                                <li>Authors receive constructive feedback and are required to submit revisions if necessary.</li>
                            </ul>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#242120]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                DOI Assignment & Online Publication
                            </h1>


                            <ul className="list-disc list-inside flex flex-col gap-2 md:text-base text-sm">
                                <li>Each article is assigned a Digital Object Identifier (DOI) for permanent accessibility.</li>
                                <li>The article is published online and made available for indexing.</li>
                            </ul>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#242120]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Post-Publication
                            </h1>

                            <ul className="list-disc list-inside flex flex-col gap-2 md:text-base text-sm">
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

export default ArticleProcess

