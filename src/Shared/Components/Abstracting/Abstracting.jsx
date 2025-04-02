import React from 'react'

function Abstracting() {
    return (
        <>
            <section className="flex flex-col gap-5 max-w-[90rem] md:py-10 py-5  mx-auto md:px-5 px-3">
                <div className="  relative">
                    <section className="flex flex-col gap-5">
                        <section className="flex flex-col gap-4">
                            <div className=' '>
                                <h1 className="text-[#242120] text-center merry   font-semibold  lg:text-2xl  underline underline-offset-8  decoration-[#D3A66F]  text-lg ">
                                    Abstracting and Indexing
                                </h1>
                            </div>
                            <p className="text-justify md:text-base text-sm">
                                The International Journal of Embedded Systems and IoT (IJESIOT) is committed to ensuring the visibility and accessibility of published research. Our journal is indexed in various reputed databases to enhance the reach and impact of our articles.
                            </p>
                        </section>

                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#242120]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Indexing Databases
                            </h1>

                            <ul className="list-disc list-inside flex flex-col gap-2 md:text-base text-sm">
                                <li>Google Scholar</li>
                                <li>Scopus (under evaluation)</li>
                                <li>DOAJ (Directory of Open Access Journals)</li>
                                <li>CrossRef (DOI Assignment for published articles)</li>
                                <li>ResearchGate</li>
                                <li>Semantic Scholar</li>
                                <li>BASE (Bielefeld Academic Search Engine)</li>
                            </ul>

                        </section>
                        <section className="flex flex-col gap-2  md:text-base text-sm">
                            <h1 className="    merry   font-semibold text-[#242120]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Benefits of Indexing
                            </h1>
                            <ul className="list-disc list-inside flex flex-col gap-2 md:text-base text-sm">
                                <li>Increased discoverability and citation potential.</li>
                                <li>Global accessibility to researchers, scholars, and industry professionals.</li>
                                <li>Enhanced credibility and recognition within the academic community.</li>

                            </ul>
                            <p className="text-justify md:text-base text-sm">
                                We continuously strive to expand our indexing coverage to maximize the dissemination of published research.
                            </p>
                        </section>
                    </section>
                </div>
            </section>
        </>
    )
}

export default Abstracting

