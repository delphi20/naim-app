import React, {useState} from "react";

const Home = ({onLoginStatus}) => {
    

    return (
      <div className="bg-gray-100">
        <header className="bg-blue-500 text-white py-4 px-6 rounded-3xl mt-3 ">
          <h1 className="text-4xl font-bold">Company Name</h1>
        </header>
        <main className="max-w-4xl mx-auto p-6">
          <section className="flex items-center justify-center h-screen">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">Welcome to Our Company</h2>
              <p className="text-lg text-gray-600 mb-8">
                We provide innovative solutions for your business needs.
              </p>
              <button onClick={onLoginStatus} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Login
              </button>
            </div>
          </section>
          <section className="my-8">
            <h2 className="text-2xl font-bold mb-4">Our Services</h2>
            <ul className="list-disc list-inside">
              <li>Service 1</li>
              <li>Service 2</li>
              <li>Service 3</li>
            </ul>
          </section>
          <section className="my-8">
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              commodo felis at tortor pharetra consequat. Sed lacinia metus a
              fermentum aliquet. Fusce at tellus ac lacus fermentum sagittis.
            </p>
          </section>
        </main>
        <footer className="bg-blue-500 text-white py-4 px-6 text-center">
          &copy; 2023 Company Name. All rights reserved.
        </footer>
      </div>
    );
  };
  

export default Home;