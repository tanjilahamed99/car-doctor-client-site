import PropTypes from 'prop-types';
import { AiFillDelete } from "react-icons/ai";
const DisplayBookings = ({ bookings,handleDelete }) => {

    const { _id, img, name, email, date, price } = bookings


   

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
    bookings: PropTypes.object,
    handleDelete: PropTypes.func
};

export default DisplayBookings;