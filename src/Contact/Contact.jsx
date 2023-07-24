import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto">
            {
                <Navbar></Navbar>
            }
            <div className="pt-10 bg-slate-200 pb-10 ">
                <div className="md:flex pl-4 gap-6">
                    <div className="md:w-2/5 shadow-white mb-5">
                        <h4 className="text-3xl mb-5">Get in Touch</h4>
                        <p className="mb-8">Email:<a className="ml-2 text-orange-500" href="">arifhasan1402@gmail.com</a></p>
                        <p className="mb-8">Whats'app:<a className="ml-2 text-orange-500" href="">+8801748817402</a></p>
                        <p className="">LinkedIn:<a className="ml-2 text-orange-500" href="https://www.linkedin.com/in/md-arif-hasan-aa1752282/">Arif Hasan</a></p>

                    </div>
                    <div className="md:w-3/5 pr-16">
                        <form action="">
                            <input className="w-full pb-7 marker: text-gray-700" type="text" name="" placeholder="Your Name" id="" />
                            <hr></hr>
                            <input className="w-full pb-7 mt-3  text-gray-700" type="email" name="" placeholder="Your Email" id="" />
                            <hr className="h-2"></hr>
                            <textarea name="pb-12 mt-3  text-gray-700" placeholder="Messages" id="" cols="92" rows="3"></textarea>
                            <hr></hr>
                            <input className="px-5 py-2 cursor-pointer sumbmit-btn bg-orange-600 rounded-md mt-10 text-white"
                                type="button" value="Send Message" />
                        </form>
                    </div>
                </div>
            </div>
            {
                <Footer></Footer>
            }
        </div>
    );
};

export default Contact;