import { useContext, useEffect, useState } from "react";
import Footer from "../../shered/Footer/Footer";
import Navbar from "../../shered/Navbar/Navbar";
import { AuthContext } from "../../AuthPrivider/AuthProvider";
import DisplayBookings from "./DisplayBookings";
import axios from "axios";
import Swal from "sweetalert2";

const MyBookings = () => {
    const [bookings, setBookings] = useState([])

    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/booking?email=${user.email}`

    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => setBookings(res.data))
    }, [url])


    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/booking/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Good job!',
                                'Successful deleted',
                                'success'
                            )
                        }
                        const remaining = bookings?.filter(book => book._id !== id)
                        setBookings(remaining)
                    })
            }
        })


    }



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
                            bookings?.map(booking => <DisplayBookings key={booking._id} bookings={booking} handleDelete={handleDelete}></DisplayBookings>)
                        }
                    </tbody>
                </table>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default MyBookings;