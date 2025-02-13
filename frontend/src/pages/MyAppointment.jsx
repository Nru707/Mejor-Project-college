import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyAppointment = () => {
  const { doctors } = useContext(AppContext);
  return (
    <div>
      <p className="pd-3 mt-12  font-medium text-zinc-700 border-b">My appointmrnt</p>
      <div>
        {doctors.slice(0, 2).map((item, index) => (
          <div className="grid grid-cols-[1fr_2fr] gap-4 sm:gap-6 py-2 border-b" key={index}>
            <div>
              <img className="w-32 bg-indigo-50" src={item.image} alt="image" />
            </div>
            <div>
              <p>{item.name}</p>
              <p>{item.speciality}</p>
              <p>Address:</p>
              <p>{item.address.line1}</p>
              <p>{item.address.line2}</p>
              <p><span>Date & Time:</span>25, july, 2024 | 8:30 pm</p>
            </div>
            <div></div>
            <div>
              <button>Pay online</button>
              <button>Cancel appointmrnt</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointment;
