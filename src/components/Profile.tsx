import React from "react";

export default function Profle() {
  return (
    <>
      <div className="flex items-center justify-center">
        <img
          className="inline-block h-36 w-36 mt-12 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
      <div className="flex items-center justify-evenly px-10">
        <div className="flex flex-col">
          <label className="text-gray-400">First Name</label>
          <p className="w-56 h-10 bg-blue-50 border rounded-lg text-center py-2 mt-2 text-gray-700">
            Emmanuel
          </p>
        </div>
        <div className="flex flex-col">
          <label className="text-gray-400">Last Name</label>
          <p className="w-56 h-10 bg-blue-50 border rounded-lg text-center py-2 mt-2 text-gray-700">
            Dodoo
          </p>
        </div>
      </div>
    </>
  );
}
