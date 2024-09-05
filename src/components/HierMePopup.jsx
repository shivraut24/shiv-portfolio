import React from 'react';

const HierMePopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-96 p-6 relative">
        <button
          onClick={onClose}
          className="absolute flex justify-center items-center right-0 top-0 rounded-tr-lg hover:bg-red-800 bg-red-400 text-[25px] text-white w-8 h-8 "
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">Hire Me</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Organization Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Designation</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Job Vacancy Post</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Salary</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Work Experience</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 mt-1"
            />
          </div>
          <button
            type="submit"
            className="bg-myColor-primary w-full py-2 text-white rounded-md hover:bg-red-700"
          >
            Hire
          </button>
        </form>
      </div>
    </div>
  );
};

export default HierMePopup;
