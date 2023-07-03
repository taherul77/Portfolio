import { FaLinkedin } from "react-icons/fa";
import "./home.css";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import CTA from "./CTA";



const Home = () => {
  return (
    <div>
      {/* <div className="flex fixed flex-col top-[30%] left-0">
        <ul>
          <li className="w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-0px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300 ml-5"
              href=""
            >
              Linkedin <FaLinkedin size={30}></FaLinkedin>
            </a>
          </li>
          <li className="w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-0px] duration-300 bg-blue-600 my-2">
            <a
              className="flex justify-between items-center w-full text-gray-300 ml-5"
              href=""
            >
              Linkedin <FaLinkedin size={30}></FaLinkedin>
            </a>
          </li>
          <li className="w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-0px] duration-300 bg-blue-600 my-2">
            <a
              className="flex justify-between items-center w-full text-gray-300 ml-5"
              href=""
            >
              Linkedin <FaLinkedin size={30}></FaLinkedin>
            </a>
          </li>
        </ul>
      </div> */}
      <div>
      <div className="container heder-content header_container">
        <div className="header-content animate__animated animate__slideInDown">
          <div className="me">
            <img src='' alt="" />
          </div>
          <h5>Hello I'm</h5>
          <h1>Sk Taherul Islam Taz</h1>
          <h5 className="text-light">Front-End Developer</h5>
          <CTA />
          
        </div>
        
      </div>
      </div>
    </div>
  );
};

export default Home;
