import { useState } from "react";
import DisplayService from "./DisplayService";


const Service = () => {

    const [service, setService] = useState([])

    useState(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div>
            <p className="text-[#FF3811] text-xl text-center font-bold">Service</p>
            <h2 className="text-center my-3 text-4xl text-[#151515] font-bold">Our Service Area</h2>
            <p className="text-center text-[#737373] lg:px-[250px]">
                the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.
            </p>
            <div className="grid grid-cols-3 my-3 items-center gap-10">
                {
                    service?.map(service => <DisplayService key={service._id} service={service}></DisplayService>)
                }
            </div>
            <button className="btn btn-outline text-[#FF3811] mx-auto flex my-10">More Services</button>
        </div>
    );
};

export default Service;