import Footer from "../../../shered/Footer/Footer";
import Navbar from "../../../shered/Navbar/Navbar";
import AboutHome from "../AboutHome/AboutHome";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Customer from "../Customer/Customer";
import Features from "../Features/Features";
import Products from "../Products/Products";
import Service from "../Service/Service";
import Team from "../Team/Team";

const Home = () => {
    return (
        <div>
            <div className="container mx-auto">
                <Navbar></Navbar>
                <Banner></Banner>
                <AboutHome></AboutHome>
                <Service></Service>
                <Contact></Contact>
                <Products></Products>
                <Team></Team>
                <Features></Features>
                <Customer></Customer>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;