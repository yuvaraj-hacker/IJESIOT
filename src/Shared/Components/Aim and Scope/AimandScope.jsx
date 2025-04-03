import React from 'react'

function AimandScope() {
    return (
        <>
            <section className="flex flex-col gap-5 max-w-[90rem] md:py-10 py-5  mx-auto md:px-5 px-3">
                <div className="  relative">
                    <section className="flex flex-col md:gap-10 gap-5">
                        <section className="flex flex-col gap-4">
                            <div className=''>
                                <h1 className="text-[#242120] text-center merry  font-semibold  lg:text-2xl   text-lg ">
                                    Aim and Scope
                                </h1>
                            </div>
                            <p className="text-justify md:text-base text-sm">
                                The International Journal of Embedded Systems and IoT aims to advance research and innovation in embedded systems and the Internet of Things (IoT) by providing a global platform for researchers, engineers, and industry professionals. The journal publishes high-quality research on embedded computing, real-time systems, IoT architectures, wireless sensor networks, cybersecurity, AI-driven automation, and industrial IoT applications. It covers topics such as low-power embedded solutions, edge and cloud computing, smart sensing, and secure communication protocols, fostering interdisciplinary collaboration to drive intelligent, efficient, and secure computing solutions. IJESIOT is committed to promoting sustainable and cutting-edge technologies that enhance connectivity, automation, and intelligence across industries, including healthcare, smart cities, automotive, and industrial automation.
                            </p>                        </section>

                        <section className="flex flex-col gap-4">
                            <div className=''>
                                <h1 className="text-[#242120] text-center merry   font-semibold  lg:text-2xl   text-lg ">
                                    Aim
                                </h1>
                            </div>
                            <p className="text-justify md:text-base text-sm">
                                The International Journal of Embedded Systems and IoT aims to advance research and innovation in embedded systems and the Internet of Things (IoT). The journal provides a global platform for researchers, engineers, and industry professionals to share cutting-edge developments that drive intelligent, efficient, and secure computing solutions. IJESIOT fosters interdisciplinary collaboration, bridging embedded computing, real-time processing, smart automation, and IoT-driven innovations across various domains.
                            </p>

                        </section>
                        <section className="flex flex-col gap-4">
                            <div className=' '>
                                <h1 className="text-[#242120] text-center merry   font-semibold  lg:text-2xl   text-lg ">
                                    Scope
                                </h1>
                            </div>
                            <p className="text-justify md:text-base text-sm bg-[#242120] text-white p-4 rounded-lg">
                                IJESIOT publishes high-quality research articles, reviews, and case studies covering a broad spectrum of topics, including but not limited to
                            </p>
                            <div className="md:text-base text-sm">
                                <ul className="list-disc list-inside flex flex-col gap-2">
                                    <li><span className='font-semibold'>Embedded Systems Design & Development</span> – Microcontrollers, system-on-chip (SoC), FPGA-based solutions, low-power and real-time embedded computing.</li>
                                    <li><span className='font-semibold'>Internet of Things (IoT) Architectures & Applications</span> – IoT frameworks, device-to-cloud integration, smart sensing, and connected systems.</li>
                                    <li><span className='font-semibold'>Edge & Cloud Computing for IoT</span> – Edge intelligence, fog computing, distributed systems, and cloud-assisted IoT solutions.</li>
                                    <li><span className='font-semibold'>Wireless Sensor Networks & Communication Protocols</span> – Secure and efficient communication in IoT ecosystems, including LPWAN, Bluetooth, Zigbee, and 5G.</li>
                                    <li><span className='font-semibold'>Cybersecurity & Privacy in IoT</span> – Secure authentication, encryption, blockchain for IoT security, and data protection.</li>
                                    <li><span className='font-semibold'>AI & Machine Learning in Embedded Systems</span> – AI-driven edge computing, real-time predictive analytics, and intelligent automation.</li>
                                    <li><span className='font-semibold'>Industrial IoT (IIoT) & Smart Applications</span> – Applications in healthcare, agriculture, automotive, smart cities, and Industry 4.0.</li>
                                    <li><span className='font-semibold'>Energy-Efficient & Sustainable IoT</span> – Green IoT solutions, energy harvesting in embedded devices, and low-power computing.</li>
                                    <li><span className='font-semibold'>Real-Time & Safety-Critical Systems</span> – Embedded solutions for automotive, aerospace, healthcare, and defense industries.</li>
                                </ul>
                            </div>
                        </section>
                        <section className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  md:gap-10 gap-5'>
                            <div className='flex flex-col gap-2 p-4 bg-[#D9D9D9]   border-2 border-[#D3A66F]   rounded-xl'>
                                <h2 className='text-[#242120] font-bold merry md:text-lg underline underline-offset-2 text-center' >Innovation</h2>
                                <div className='flex   gap-3'>
                                    <i className="fi fi-rr-angle-double-small-right     "></i>
                                    <p className="text-justify  md:text-base text-sm">Driving pioneering research and transformative innovations in embedded systems and IoT across diverse applications.</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 p-4 bg-[#D9D9D9]   border-2 border-[#D3A66F]   rounded-xl'>
                                <h2 className='text-[#242120] font-bold merry md:text-lg  underline underline-offset-2 text-center'>Collaboration</h2>
                                <div className='flex   gap-3'>
                                    <i className="fi fi-rr-angle-double-small-right     "></i>
                                    <p className="text-justify  md:text-base text-sm">Fostering cross-disciplinary collaboration and knowledge exchange to drive advancements in embedded systems and IoT.</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 p-4 bg-[#D9D9D9]   border-2 border-[#D3A66F]   rounded-xl'>
                                <h2 className='text-[#242120] font-bold merry md:text-lg  underline underline-offset-2 text-center' >Research Excellence</h2>
                                <div className='flex   gap-3'>
                                    <i className="fi fi-rr-angle-double-small-right     "></i>
                                    <p className="text-justify  md:text-base text-sm">Advancing high-quality research and original theoretical contributions that push the frontiers of innovation in embedded systems and IoT.</p>
                                </div>
                            </div>
                        </section>
                    </section>
                </div>
            </section>
        </>
    )
}

export default AimandScope

