import React from "react";
import { Link } from "react-router-dom";
import { BsDot } from "react-icons/bs";
function Home() {
  return (
    <>
      <section className="flex flex-col gap-5  max-w-[90rem] md:py-10 py-5  mx-auto md:px-5 px-3">
        <div className="relative">
          <section className="flex flex-col md:gap-10 gap-5">
            <section className="flex justify-between flex-wrap md:flex-nowrap gap-5">
              <div className="flex flex-col justify-evenly md:gap-4 gap-3">
                <p className="text-justify md:text-base text-sm">
                  <strong className="text-[#242120] md:text-xl text-lg ">
                    The International Journal of Embedded Systems and IoT (IJESIOT)
                  </strong>{" "}
                  is a scholarly, peer-reviewed journal dedicated to research in embedded systems, the Internet of Things (IoT), and their applications in various domains. It aims to promote advancements in smart, energy-efficient, and secure embedded solutions, IoT architectures, real-time computing, and intelligent sensor networks.
                  The journal welcomes original research articles, reviews, and case studies that contribute to the development of innovative embedded and IoT technologies, improving connectivity, automation, and sustainability across industries.
                </p>
                <a href="https://ijesiot.com/Ijesiot/index.php/ijesiot/about/submissions" target="_blank" rel="noopener noreferrer" className="mx-auto" >
                  <button className=" px-6   py-3  border-2 rounded-full shadow-md  md:text-base text-sm  group  border-[#D3A66F] flex gap-2 items-center hover:bg-[#242120] hover:text-white text-[#242120] duration-300 cursor-pointer  ">
                    Submit Your Paper
                    <i class="fi fi-ss-redo group-hover:translate-x-1 duration-300 "></i>
                  </button>
                </a>
              </div>
              {/* <img className="mx-auto   w-96 " src="/assets/Images/right.jpg" alt="" /> */}
            </section>
            <section className="flex flex-col gap-4">
              <div className=' '>
                <h1 className="  text-center merry text-[#242120]   font-semibold  lg:text-2xl   text-lg ">
                  About the Journal
                </h1>
              </div>
              <p className="text-justify md:text-base text-sm">
                The International Journal of Embedded Systems and IoT (IJESIOT) is a peer-reviewed, open-access journal dedicated to advancing research and innovation in embedded systems, the Internet of Things (IoT), and their real-world applications. Our mission is to promote cutting-edge research that enhances connectivity, automation, and intelligence in smart devices, enabling transformative solutions across industries such as healthcare, smart cities, industrial automation, and cybersecurity.
              </p>
              <Link to='/about' className="w-fit mx-auto">
                <button className="md:p-3 p-2 border-2 w-[170px] group flex gap-2 justify-center   md:text-base text-sm   rounded-full  border-[#D3A66F]   shadow-md hover:bg-[#242120] hover:text-white text-[#242120] duration-300 cursor-pointer">
                  Read More
                  <i class="fi fi-ss-redo group-hover:translate-x-1 duration-300 "></i>
                </button>
              </Link>
            </section>
            <section className="flex flex-col gap-4">
              <div className=' '>
                <h1 className="text-[#242120] text-center merry   font-semibold  lg:text-2xl   text-lg ">
                  The Journal covers following areas
                </h1>
              </div>
              <div className="border-2  border-[#D3A66F] p-2  rounded-xl">
                <div className="grid grid-cols-1 lg:grid-cols-3  md:grid-cols-3   w-full rounded-xl justify-center  max-w-[75rem] trext-start mx-auto  ">
                  {["Real-Time Embedded IoT", "Embedded IoT Security", "MCU-based IoT", "FPGA for IoT", "Low-power IoT Devices", "RTOS in IoT", "AI in Embedded IoT", "Wireless IoT Systems", "IoT-enabled Sensors", "Smart City IoT",
                    "IoT Healthcare Systems", "Firmware for IoT", "ARM-based IoT", "IoT Edge Computing", "IoT Gateways", "Energy-efficient IoT", "Predictive IoT Maintenance", "Blockchain IoT Security", "AI-powered IoT", "Industrial IoT",
                    "IoT in Vehicles", "Cloud IoT Systems", "Smart Surveillance IoT", "5G in IoT", "IoT Smart Homes", "IoT Wearables", "AI-ML in IoT", "Edge AI in IoT", "Smart Agriculture IoT", "Renewable IoT Systems",
                    "IoT Smart Grid", "IoT in Supply Chain", "IoT in Robotics", "IoT Remote Monitoring", "IoT Disaster Management", "Water Quality IoT", "Asset Tracking IoT", "Smart Manufacturing IoT", "Fleet Management IoT", "IoT Data Analytics",
                    "Smart Parking IoT", "AI-driven IoT", "IoT Cybersecurity", "IoT Disaster Prediction", "IoT Smart Wearables", "IoT in Biomedicine", "AI in IoT Automation", "Aerospace IoT", "IoT Vision Systems", "Neural Networks in IoT",
                    "IoT Smart Contracts", "IoT Virtual Assistants", "Smart Grid IoT", "Retail IoT", "IoT Big Data", "AI Chatbots in IoT", "IoT Smart Sensors", "Fog Computing IoT", "IoT in Learning", "Industrial IoT (IIoT)",
                    "IoT Digital Twins", "IoT in Transport", "IoT Supply Chain", "IoT for Environment", "Blockchain in IoT", "IoT Precision Medicine", "Smart Transactions IoT", "IoT Energy Management", "Quantum IoT"
                  ].map((topics, index) => (
                    <div key={index} className="flex items-center gap-2 mb-1   ">
                      <BsDot className="flex items-center bg-[#242120] text-xs rounded-full text-[#242120] " />
                      <h1 className="md:text-base text-sm ">{topics}</h1>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <section className="flex flex-col gap-4">
              <div className=' '>
                <h1 className="  text-center merry  text-[#242120] font-semibold  lg:text-2xl text-lg ">
                  Journal  overview
                </h1>
              </div>
              <p className=" text-center">The International Journal of Embedded Systems and IoT (IJESIOT) is a multidisciplinary, peer-reviewed, open-access journal committed to publishing high-quality research on embedded systems, the Internet of Things (IoT), and their innovative applications. The journal aims to foster advancements in smart embedded technologies, real-time computing, and secure IoT solutions that drive automation, connectivity, and intelligence across various industries.</p>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 grid-cols-1  ">
                <div className=" border-2 border-[#D3A66F]   rounded-xl bg-[#D9D9D9]  ">
                  <div className=" p-4 flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <i class="fi fi-sr-check-circle flex items-center text-xl text-[#28a745]"></i>
                      <h2 className="text-[#242120] font-bold merry md:text-lg ">Open Access</h2>
                    </div>
                    <div className="flex gap-4">
                      <p className=" md:text-base text-sm">IJESIOT follows a fully open-access publishing model, ensuring that all published articles are freely accessible to a global audience without any subscription or paywall restrictions. This allows for the broad dissemination of knowledge and maximizes research impact.</p>
                    </div>
                  </div>

                </div>
                <div className=" border-2 border-[#D3A66F] rounded-xl bg-[#D9D9D9]  ">
                  <div className=" p-4 flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <i class="fi fi-sr-check-circle flex items-center text-xl text-[#28a745]"></i>
                      <h2 className="text-[#242120] font-bold merry md:text-lg ">Peer-Review</h2>
                    </div>
                    <div className="flex gap-4">
                      <p className=" md:text-base text-sm">IJESIOT upholds the highest standards of academic integrity through a rigorous blind peer-review process. Each submitted manuscript undergoes evaluation by expert reviewers to ensure originality, scientific quality, and relevance to the field.</p>
                    </div>
                  </div>
                </div>

                <div className=" border-2 border-[#D3A66F] rounded-xl  bg-[#D9D9D9] ">
                  <div className=" p-4 flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <i class="fi fi-sr-check-circle flex items-center text-xl text-[#28a745]"></i>
                      <h2 className="text-[#242120] font-bold merry md:text-lg ">Indexing</h2>
                    </div>
                    <div className="flex gap-4">
                      <p className=" md:text-base text-sm">To enhance the visibility and impact of published research, all articles in IJESIOT adhere to advanced SEO standards and are optimized for maximum discoverability on search engines. The journal is committed to continuous efforts for indexing in leading academic databases and repositories.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
        {/* <section className=" ">
          <h1 className="bg-[#242120] h-[1px] w-full  "></h1>
        </section> */}
      </section>
      <section className="bg-[#242120] text-white border-b border-b-[#D3A66F]">
        <div className="text-center flex flex-col gap-2 xl:w-1/2 mx-auto  md:px-5 px-3 py-5  ">
          <p className="  md:text-base text-sm text-justify">
            We publish original research articles, review articles and technical notes. The journal reviews papers within two weeks of submission and publishes accepted articles on the internet immediately upon receiving the final versions.
            <span className="  font-bold">   Our fast reviewing process is our strength.
            </span>
          </p>
          <div className="flex items-center  ">
            <i className="fi fi-tr-calendar text-white "></i>
            <h1 className="bg-[#D3A66F] text-white py-2 font-semibold md:text-base text-sm rounded-lg  w-full  text-center mx-auto p-3">
              Launch of Next Issue: 28
              <sup>th</sup> Oct 2025
            </h1>
          </div>
          <h1 className=" ">With Warm Regards,</h1>
          <h1 className="  font-semibold  md:text-base text-sm">
            Editor-in-chief
          </h1>
          <h1 className="  font-semibold md:text-base text-sm">IJESIOT</h1>
        </div>
      </section>
    </>
  );
}
export default Home;
