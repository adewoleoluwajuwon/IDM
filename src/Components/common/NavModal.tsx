'use client';

// import { useState } from 'react';
import { Modal } from 'flowbite-react';

interface NavModalProps {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }

const NavModal: React.FC<NavModalProps>  = ({isModalOpen, setIsModalOpen}) => {
  

  return (
    <>
      {/* ✅ Modal Component */}
      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)} size="3xl">
        <Modal.Header>Request A Demo</Modal.Header>
        <Modal.Body>
          <div className="bg-black p-6 rounded-lg shadow-lg text-white">
            <h3 className="text-2xl font-semibold mb-4">We're Here To Help!</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 font-medium">First Name</label>
                  <input type="text" placeholder="Enter First Name" className="w-full p-3 border rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-red-600"/>
                </div>
                <div>
                  <label className="block text-gray-400 font-medium">Phone Number</label>
                  <input type="text" placeholder="(123) 456 789" className="w-full p-3 border rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-red-600"/>
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-gray-400 font-medium">Email</label>
                <input type="email" placeholder="eg email@email.com" className="w-full p-3 border rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-red-600"/>
              </div>

              <div className="mt-4">
                <label className="block text-gray-400 font-medium">Company Type</label>
                <input type="email" placeholder="Enter your company or school" className="w-full p-3 border rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-red-600"/>
              </div>

              <div className="mt-4">
                <label className="block text-gray-400 font-medium">Company Designation</label>
                <input type="email" placeholder="Enter Designation" className="w-full p-3 border rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-red-600"/>
              </div>

              <div className="mt-4">
                <label className="block text-gray-400 font-medium">Enquiry Type</label>
                <select className="w-full p-3 border rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-red-600">
                  <option>Demo</option>
                  <optgroup label="SAP">
                    <option>Training</option>
                  </optgroup>
                  <optgroup label="School">
                    <option>Training</option>
                    <option>IDM@School</option>
                  </optgroup>
                </select>
              </div>

              <button type="submit" className="w-40 bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-all duration-300 mt-6">
                Submit
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NavModal;
