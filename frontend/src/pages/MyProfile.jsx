import { useState } from "react";
import { assets } from "../assets/assets";
const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "xyz",
    image: assets.profile_pic,
    email: " xyz@gmail.com",
    phone: "1234567890",
    address: {
      line1: "4222 cross, ffssd",
      line2: "sdfsdf",
    },
    gender: "Male",
    dob: "2000-01-22",
  });

  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img className="w-36 rounded" src={userData.image} />
      {isEdit ? (
        <input
          className="bg-gray-50 text-2xl font-medium rounded w-full p-1 mt-1 border border-gray-600"
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4">
          {userData.name}
        </p>
      )}
      <hr className="bg-gray-400 h-[1px] border-none" />
      <div>
        <p className="text-neutral-500 mt-3">CONTACT INFORMATION</p>
        <div className="grid  grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium ">Email id:</p>
          <p className="text-blue-500">{userData.email}</p>
          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 text-xl w-full rounded w-full p-1 mt-2 border border-gray-600 "
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              } 
            />
          ) : (
            <p className="text-blue-400">{userData.phone}</p>
          )}
          <p className="font-medium">Address:</p>
          {isEdit ? (
            <p>
              <input
                className="bg-gray-50 w-full text-xl rounded w-full p-1 mt-2 border border-gray-600"
                type="text"
                value={userData.address.line1}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
              />
              <br />
              <input
                className="bg-gray-50 text-xl w-full rounded w-full p-1 mt-1 border border-gray-600 "
                value={userData.address.line2}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                type="text"
              />
            </p>
          ) : (
            <p className="text-gray-500">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p className="text-neutral-500 mt-3">BASIC INFORMATION</p>
        <div className="grid  grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
              className="bg-gray-100 w-full text-xl rounded w-full p-1 mt-1 border border-gray-600"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          ) : (
            <p className="text-gray-500">{userData.gender}</p>
          )}
          <p className="font-medium">Birthday:</p>
          {isEdit ? (
            <input
              className="bg-gray-200 w-full text-xl rounded w-full p-1 mt-1 border border-gray-600"
              type="date"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={userData.dob}
            />
          ) : (
            <p className="text-gray-500">{userData.dob}</p>
          )}
        </div>
      </div>
      <div className="mt-10">
        {isEdit ? (
          <button
            className="border border-gray-600 px-8 py-2 rounded-full cursor-pointer"
            onClick={() => setIsEdit(false)}
          >
            Save information
          </button>
        ) : (
          <button
            className="border border-gray-600 px-8 py-2 rounded-full cursor-pointer"
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
