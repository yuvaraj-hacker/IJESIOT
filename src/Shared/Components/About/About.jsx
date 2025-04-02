import React from 'react'

function About() {
  return (
    <>
      <section className="flex flex-col gap-5 max-w-[90rem] md:py-10 py-5  mx-auto md:px-5 px-3">
        <div className="  relative">
          <section className="flex flex-col md:gap-10 gap-5">
            <section className="flex justify-between flex-wrap md:flex-nowrap gap-5">
              <div className="flex flex-col gap-4">
                <div className=' '>
                  <h1 className="text-[#242120] text-center merry   font-semibold  lg:text-2xl   text-lg ">
                    About Us
                  </h1>
                </div>
                <p className="text-justify md:text-base text-sm">
                  The International Journal of Embedded Systems and IoT (IJESIOT) is a pioneering peer-reviewed, open-access publication that bridges the critical gap between cutting-edge embedded technologies and the rapidly evolving Internet of Things (IoT) landscape. Dedicated to advancing research in embedded computing and IoT, the journal focuses on developing intelligent, efficient, and secure systems that drive automation, connectivity, and real-time decision-making. Its comprehensive scope encompasses research areas such as edge computing, sensor networks, real-time embedded systems, cybersecurity in IoT, and smart applications across industries. By providing a global platform for researchers, engineers, and policymakers, IJESIOT aims to accelerate technological innovations that shape the future of interconnected and intelligent systems.
                </p>
              </div>
              <img className='w-96 rounded-xl border-2 border-[#D3A66F]' src="/assets/Images/right.jpg" alt="" />
            </section>
            <section className="flex flex-col gap-4">
              <div className=' '>
                <h1 className="text-[#242120] text-center merry   font-semibold  lg:text-2xl   text-lg ">
                  Scope
                </h1>
              </div>
              <p className="text-justify md:text-base text-sm bg-[#242120] text-white p-4 rounded-lg">
                IJESIOT covers a wide range of topics, including but not limited to:
              </p>
              <div className="md:text-base text-sm">
                <ul className="list-disc list-inside flex flex-col gap-2">
                  <li>
                    <strong>Embedded Systems Design & Optimization</strong> – Low-power computing, real-time embedded applications, FPGA-based solutions.
                  </li>
                  <li>
                    <strong>Internet of Things (IoT) Technologies</strong> – IoT architectures, protocols, and frameworks for smart devices and connected systems.
                  </li>
                  <li>
                    <strong>Edge & Cloud Computing for IoT</strong> – Edge intelligence, distributed computing, and IoT-cloud integration.
                  </li>
                  <li>
                    <strong>Wireless Sensor Networks & Communication Protocols</strong> – Secure, efficient communication in embedded and IoT networks.
                  </li>
                  <li>
                    <strong>Cybersecurity & Privacy in IoT</strong> – Secure authentication, encryption, and data protection in connected systems.
                  </li>
                  <li>
                    <strong>Artificial Intelligence & Machine Learning for Embedded Systems</strong> – AI-driven embedded applications, predictive analytics, and automation.
                  </li>
                </ul>
              </div>

            </section>
            <section className="flex flex-col gap-4">
              <div className=' '>
                <h1 className=" text-[#242120]  text-center merry   font-semibold  lg:text-2xl   text-lg ">
                  Mission
                </h1>
              </div>
              <p className="text-justify md:text-base text-sm bg-[#242120] text-white p-4 rounded-lg">
                The mission of IJESIOT is to advance knowledge and foster innovation in embedded systems and IoT by providing a high-impact platform for cutting-edge research. The journal seeks to:
              </p>
              <div className="md:text-base text-sm">
                <ul className="list-disc list-inside flex flex-col gap-2">
                  <li>
                    <strong>Promote Interdisciplinary Research</strong> – Bridging embedded systems, IoT, AI, and networking technologies.
                  </li>
                  <li>
                    <strong>Drive Sustainable and Efficient Solutions</strong> – Encouraging energy-efficient, cost-effective, and scalable IoT and embedded applications.
                  </li>
                  <li>
                    <strong>Enhance Security and Reliability</strong> – Addressing challenges in cybersecurity, fault tolerance, and real-time processing.
                  </li>
                  <li>
                    <strong>Support Real-World Implementations</strong> – Showcasing practical applications in industries such as healthcare, smart cities, and automation.
                  </li>
                </ul>
              </div>

            </section>

            <section className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  md:gap-10 gap-5'>
              <div className='flex flex-col gap-2 p-4 bg-[#D9D9D9]   border-2 border-[#D3A66F]   rounded-xl'>
                <h2 className=' font-bold merry md:text-lg underline underline-offset-2'>Editorial Excellence</h2>
                <div className='flex   gap-3'>
                  <i className="fi fi-rr-angle-double-small-right"></i>
                  <p className="text-justify  md:text-base text-sm">Our esteemed editorial board consists of renowned experts from leading research institutions and industry organizations worldwide. Their diverse expertise ensures a thorough peer review process, upholding the highest standards of academic excellence, scientific integrity, and publication quality.</p>
                </div>
              </div>
              <div className='flex flex-col gap-2 p-4 bg-[#D9D9D9]   border-2 border-[#D3A66F]   rounded-xl'>
                <h2 className=' font-bold merry md:text-lg  underline underline-offset-2'>Global Reach and Impact</h2>
                <div className='flex   gap-3'>
                  <i className="fi fi-rr-angle-double-small-right     "></i>
                  <p className="text-justify  md:text-base text-sm">IJESIOT has built a global readership across six continents, with articles indexed in major academic databases for maximum visibility and impact. We are committed to fostering interdisciplinary collaborations and bridging geographical boundaries to drive innovation in embedded systems and IoT technologies worldwide.</p>
                </div>
              </div>
              <div className='flex flex-col gap-2 p-4 bg-[#D9D9D9]   border-2 border-[#D3A66F]   rounded-xl'>
                <h2 className=' font-bold merry md:text-lg  underline underline-offset-2' >Publication Ethics</h2>
                <div className='flex   gap-3'>
                  <i className="fi fi-rr-angle-double-small-right"></i>
                  <p className="text-justify  md:text-base text-sm">We uphold the highest ethical standards in scientific publishing. IJESIOT ensures transparency in the peer-review process, implements rigorous plagiarism checks, and guarantees a fair and unbiased evaluation of all submissions, regardless of authors' backgrounds or affiliations.</p>
                </div>
              </div>
            </section>
          </section>
        </div>
      </section>
    </>
  )
}

export default About
