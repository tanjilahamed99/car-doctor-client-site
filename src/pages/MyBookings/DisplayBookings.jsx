import PropTypes from 'prop-types';
import { AiFillDelete } from "react-icons/ai";
import Swal from 'sweetalert2';
const DisplayBookings = ({ bookings }) => {

    const { _id, img, name, email, date, price } = bookings


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
                    })
            }
        })


    }


    return (
        <tr>
            <th>
                <label>
                    <AiFillDelete onClick={() => handleDelete(_id)} className='text-2xl'></AiFillDelete>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td>{email}</td>
            <td>{price}</td>
            <td> {date} </td>
            <th>
                <button className="btn btn-ghost btn-xs">confirm</button>
            </th>
        </tr>
    );
};

DisplayBookings.propTypes = {
    bookings: PropTypes.object
};

export default DisplayBookings;