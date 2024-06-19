'use client';

import React from 'react';

const ContactUs = () => {
  return (
    <div className="contact-us">
      
      {/* Contact information */}
      <div className="card mt-12">
        <div className="card-header">
          <h1>Contact Us</h1>
        </div>
        <div className="card-body mt-12">
          <p>SHRI VISHNU ENGINEERING COLLEGE FOR WOMEN (Autonomous)</p>
          <p>APPROVED BY A.I.C.T.E & AFFILIATED TO JNTUK, KAKINADA</p>
          <p>Counseling Code – VISW</p>
          <p>Vishnupur, BHIMAVARAM – 534202</p>
          <p>West Godavari District, Andhra Pradesh, India.</p>
          <p>Phone: 08816 – 250864</p>
          <p>Fax: 08816 – 250099</p>
          <p>Email: info@svecw.edu.in, principal@svecw.edu.in</p>
        </div>
      </div>
      
      {/* How can we help you - Email form */}
      <div className="card">
        <div className="card-header">
          <h2>How can we help you?</h2>
        </div>
        <div className="card-body">
          <div className="email-input">
            <input type="email" placeholder="Enter your email" />
            <button>Send</button>
          </div>
        </div>
      </div>
      
      {/* Department and administrative office contacts */}
      <div className="card">
        <div className="card-header">
          <h2>Department Contacts</h2>
        </div>
        <div className="card-body">
          <ul className="department-list">
            <li>Computer Science Department: csdepartment@svecw.edu.in</li>
            <li>Electronics and Communication Department: ecedept@svecw.edu.in</li>
            <li>Mechanical Engineering Department: medept@svecw.edu.in</li>
            <li>Civil Engineering Department: civildept@svecw.edu.in</li>
            {/* Add more departments as needed */}
          </ul>
        </div>
      </div>
      
      {/* Social media links */}
      <div className="card">
        <div className="card-header">
          <h2>Connect With Us</h2>
        </div>
        <div className="card-body">
          <div className="icons">
            <a href="https://www.instagram.com/vishnu_svecw/" target="_blank" rel="noopener noreferrer">
              <img src="/insta.webp" alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/school/vishnusvecw/" target="_blank" rel="noopener noreferrer">
              <img src="/linkdin.png" alt="LinkedIn" />
            </a>
            <a href="https://www.facebook.com/svecwcollege" target="_blank" rel="noopener noreferrer">
              <img src="/facebook.jpeg" alt="Facebook" />
            </a>
            <a href="https://twitter.com/svecw2" target="_blank" rel="noopener noreferrer">
              <img src="/twitter.png" alt="Twitter" />
            </a>
            <a href="https://www.youtube.com/@SVECW-B0" target="_blank" rel="noopener noreferrer">
              <img src="/youtube.png" alt="YouTube" />
            </a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .contact-us {
          padding: 50px;
          background-color: #f0f8ff;
          color: #333;
          font-family: Arial, sans-serif;
        }

        .card {
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 10px;
          margin-bottom: 30px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 20px;
          text-align: center;
        }

        .card-header {
          margin-bottom: 20px;
        }

        .card-header h1,
        .card-header h2 {
          font-size: 24px;
          margin: 0;
          color: #007bff;
        }

        .card-body p,
        .card-body li {
          margin: 10px 0;
        }

        .email-input {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .email-input input {
          padding: 10px;
          margin-right: 10px;
          width: 300px;
          border-radius: 5px;
          border: 1px solid #ced4da;
          outline: none;
        }

        .email-input button {
          padding: 10px 20px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .email-input button:hover {
          background-color: #0056b3;
        }

        .department-list {
          list-style-type: disc;
          margin-left: 0;
          padding-left: 20px;
          text-align: left;
          display: inline-block;
        }

        .icons {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .icons a {
          margin: 0 10px;
          transition: transform 0.3s ease;
        }

        .icons img {
          width: 40px;
          height: 40px;
        }

        .icons a:hover {
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
}

export default ContactUs;
