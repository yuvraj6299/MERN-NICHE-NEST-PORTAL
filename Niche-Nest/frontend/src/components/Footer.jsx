import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <footer>
        <div>
          <img src="/logo nichest.png" alt="logo" />
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>Street No.007 Anugraha Nagar Aurangabad, India</li>
            <li>nichenest@gmail.com</li>
            <li>+91 6299667860</li>
          </ul>
        </div>

        <div>
  <h4>Quick Links</h4>
  <ul>
    <li>
      <Link to={"/"}>Home</Link>
    </li>
    <li>
      <Link to={"/jobs"}>Jobs</Link>
    </li>
    {isAuthenticated && (
      <li>
        <Link to={"/dashboard"}>Dashboard</Link>
      </li>
    )}
  </ul>
</div>

        
       
      </footer>
      
    </>
  );
};

export default Footer;