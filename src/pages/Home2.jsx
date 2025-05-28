import React from 'react';
import { Link } from 'react-router-dom';
import organizePdfTools from '../assets/Organize';

const Home2 = () => {
    return (
        <div className="p-7">
            <h2 className="text-2xl font-semibold mb-4 text-center">PDF Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {organizePdfTools.map((item, index) => (
                    <Link to={item.path} key={index} className="bg-white rounded-xl shadow-md p-7 hover:shadow-xl transition block">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 object-cover rounded-md mb-3 transform transition-transform duration-300 hover:scale-110"
                        />
                        <p className="font-semibold text-lg">{item.name}</p>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Home2;

