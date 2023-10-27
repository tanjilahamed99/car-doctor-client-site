import { useLoaderData } from "react-router-dom";
import Navbar from "../../shered/Navbar/Navbar";
import Footer from "../../shered/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../AuthPrivider/AuthProvider";
import Swal from "sweetalert2";

const Book = () => {

    const { user } = useContext(AuthContext)

    const { title, price, img } = useLoaderData()


    const handleBooking = e => {

        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const date = form.date.value
        const price = form.price.value

        const newBooking = { name, email, date, price, img }

        fetch(`http://localhost:5000/booking`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newBooking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire(
                        'Good job!',
                        'Successful added',
                        'success'
                    )
                }
            })
    }


    return (
        <div>
            <Navbar></Navbar>

            <form onSubmit={handleBooking}>
                <h2 className="font-bold text-4xl text-center ">{title}</h2>
                <div className="grid grid-cols-2 justify-center mx-auto my-32 container gap-10">
                    <input type="text" name="name" placeholder="Type here" defaultValue={user?.displayName}
                        className="input input-bordered w-full " />
                    <input type="text" name="email" placeholder="Type here" defaultValue={user?.email}
                        className="input input-bordered w-full " />
                    <input type="text" name="price" placeholder="Type here" defaultValue={price}
                        className="input input-bordered w-full " />
                    <input type="date" name="date" placeholder="Type here"
                        className="input input-bordered w-full " />
                    <input className="btn btn-primary btn-block col-span-2 " type="submit" value="Book" />
                </div>
            </form>
            <Footer></Footer>
        </div>
    );
};

export default Book;