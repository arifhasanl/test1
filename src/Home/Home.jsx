import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import Category from "./Category";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            {
                <Navbar></Navbar>
            }
            {
                <Slider></Slider>

            }
            {
                <Category></Category>
            }
            {
                <Footer></Footer>
            }
        </div>
    );
};

export default Home;