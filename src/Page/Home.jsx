import { FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <div className="flex fixed flex-col top-[30%] left-0">
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
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Home;
