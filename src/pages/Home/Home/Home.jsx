import Navbar from "../../../shered/Navbar/Navbar";
import AboutHome from "../AboutHome/AboutHome";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";

const Home = () => {
    return (
        <div>
            <div className="container mx-auto">
                <Navbar></Navbar>
                <Banner></Banner>
                <AboutHome></AboutHome>
                <Service></Service>
            </div>
        </div>
    );
};

export default Home;