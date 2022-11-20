import React from "react";

export default function Profle() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <img
          className="inline-block h-36 w-36 mt-12 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <p className="mt-2 text-gray-700">Profile Photo</p>
      </div>
      <div className="flex items-center justify-center mt-10">
        <div className="flex flex-col mr-4">
          <label className="text-gray-400">First Name</label>
          <p className="w-56 h-10 bg-blue-50 border rounded-lg pl-2  py-2 mt-2 text-gray-700">
            Emmanuel
          </p>
        </div>
        <div className="flex flex-col ml-4">
          <label className="text-gray-400">Last Name</label>
          <p className="w-56 h-10 bg-blue-50 border rounded-lg pl-2 py-2 mt-2 text-gray-700">
            Dodoo
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4">
        <div className="flex flex-col">
          <label className="text-gray-400">Email</label>
          <p className="w-[480px] h-10 bg-blue-50 border rounded-lg pl-2 py-2 mt-2 text-gray-700">
            edodoo01@st.ug.edu.gh
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4">
        <div className="flex flex-col">
          <label className="text-gray-400">Phone Number</label>
          <p className="w-[480px] h-10 bg-blue-50 border rounded-lg pl-2 py-2 mt-2 text-gray-700">
            +233-241-4895-76
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4">
        <div className="flex flex-col">
          <label className="text-gray-400">Address</label>
          <p className="w-[480px] h-10 bg-blue-50 border rounded-lg pl-2 py-2 mt-2 text-gray-700">
            22 Dome Street
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4">
        <div className="flex flex-col">
          <label className="text-gray-400">Phone Number</label>
          <p className="w-[480px] h-10 bg-blue-50 border rounded-lg pl-2 py-2 mt-2 text-gray-700">
            +233-241-4895-76
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4">
        <div className="flex flex-col mr-4">
          <label className="text-gray-400">City</label>
          <p className="w-56 h-10 bg-blue-50 border rounded-lg pl-2  py-2 mt-2 text-gray-700">
            Dome
          </p>
        </div>
        <div className="flex flex-col ml-4">
          <label className="text-gray-400">Region</label>
          <p className="w-56 h-10 bg-blue-50 border rounded-lg pl-2 py-2 mt-2 text-gray-700">
            Greater Accra
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4 mb-10">
        <div className="flex flex-col mr-4">
          <label className="text-gray-400">Digital Address</label>
          <p className="w-56 h-10 bg-blue-50 border rounded-lg pl-2  py-2 mt-2 text-gray-700">
            GE-310-22
          </p>
        </div>
        <div className="flex flex-col ml-4">
          <label className="text-gray-400">Country</label>
          <p className="w-56 h-10 bg-blue-50 border rounded-lg pl-2 py-2 mt-2 text-gray-700">
            Country
          </p>
        </div>
      </div>
    </>
  );
}
