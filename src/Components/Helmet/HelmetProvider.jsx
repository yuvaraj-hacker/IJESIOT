import { Helmet } from "react-helmet";

const HelmetComponent = ({ title }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="keywords" content="International Journal of Embedded Systems and IoT, IJESIOT, Embedded Systems research, IoT technologies, Smart devices, Wireless sensor networks, Edge computing, Cyber-physical systems, IoT security, Industrial IoT, AI in IoT" />
            <meta name="description" content="The International Journal of Embedded Systems and IoT (IJESIOT) is a peer-reviewed, open-access journal publishing high-quality research on embedded computing, IoT architectures, smart devices, and intelligent automation." />
            <meta name="author" content="IJESIOT Editorial Team" />
            <meta name="robots" content="index, follow" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="International Journal of Embedded Systems and IoT (IJESIOT)" />
            <meta property="og:description" content="Explore the latest research in embedded systems and IoT, including smart technologies, real-time computing, cyber-physical systems, and intelligent automation." />
            <meta property="og:url" content="https://www.ijesiot.com/" />
            <meta property="og:image" content="https://www.ijesiot.com/assets/Images/IJESIOT.png" />
            <link rel="canonical" href="https://www.ijesiot.com/" />
            <link rel="icon" type="image/png" href="https://www.ijesiot.com/assets/Images/Fav.png" />
        </Helmet>
    );
};

export default HelmetComponent;
