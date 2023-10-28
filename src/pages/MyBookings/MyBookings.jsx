import { useContext, useState } from "react";
import Footer from "../../shered/Footer/Footer";
import Navbar from "../../shered/Navbar/Navbar";
import { AuthContext } from "../../AuthPrivider/AuthProvider";
import DisplayBookings from "./DisplayBookings";
import axios from "axios";

const MyBookings = () => {
    const [bookings, setBookings] = useState([])

    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/booking?email=${user.email}`

    axios(url, { withCredentials: true })
        .then(res => setBookings(res.data))

    return (
        <div>
            <Navbar></Navbar>

            <div className="overflow-x-auto my-20 container mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>email</th>
                            <th>price</th>
                            <th>date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings.map(booking => <DisplayBookings key={booking._id} bookings={booking}></DisplayBookings>)
                        }
                    </tbody>
                </table>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default MyBookings;