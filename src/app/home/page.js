

import React from 'react';

const HomePage = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJ1Yc6cKR6ead-fUQAU1rd9Ekvi4K-Ca-1A&s")' }}>
      <div className="bg-white bg-opacity-40 text-black p-8 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to <span className='text-blue-600'>WELLSPRING</span> Hospital</h1>
        <p className="text-lg mb-6">Providing exceptional healthcare services since 1985.</p>
        <a href="#" className="text-blue-500 hover:text-gray-300 underline">
          Explore More
        </a>
        < div className='mt-5'>
        <h1 className="text-4xl font-bold mb-4"><span className='text-blue-600'>Piltovr</span> Interns</h1>
          <h3>Annapurna</h3>
          <h3>Nikitha</h3>
          <h3>kalyani</h3>
        </div>
      </div>
    </div>
  );
};

export default HomePage;