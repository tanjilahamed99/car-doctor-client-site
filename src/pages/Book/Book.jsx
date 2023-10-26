import { useLoaderData } from "react-router-dom";
import Navbar from "../../shered/Navbar/Navbar";
import Footer from "../../shered/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../AuthPrivider/AuthProvider";

const Book = () => {

    const { user } = useContext(AuthContext)

    const { title, price } = useLoaderData()

    return (
        <div>
            <Navbar></Navbar>

            <div className="grid grid-cols-2 justify-center mx-auto my-32 container gap-10">
                <input type="text" placeholder="Type here" defaultValue={user.displayName}
                    className="input input-bordered w-full " />
                <input type="text" placeholder="Type here" defaultValue={user.email}
                    className="input input-bordered w-full " />
                <input type="text" placeholder="Type here" defaultValue={price}
                    className="input input-bordered w-full " />
                <input type="text" placeholder="Type here" defaultValue={title}
                    className="input input-bordered w-full " />
               <button className="btn btn-primary btn-block col-span-2">Book</button>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Book;