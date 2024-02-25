import React from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

function ContactUs() {
  return (
    <div  id="contact" className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <FiPhone className="text-blue-500 mr-9" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p>(961) 123456</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <FiMail className="text-blue-500 mr-9" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p>Maroun123@gamil.com</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <FiMapPin className="text-blue-500 mr-9" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p>Lebanon Jbeil Blat</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
