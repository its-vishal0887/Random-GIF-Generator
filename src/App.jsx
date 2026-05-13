import Random from "./components/Random";
import Tag from "./components/Tag";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";


const App = () => {
  return (
    <div className="w-full min-h-screen flex flex-col background relative items-center overflow-x-hidden ">
      <h1 className="bg-white absolute rounded-lg font-bold text-4xl text-center mt-[40px] w-11/12  mx-auto px-10 py-2">
        RANDOM GIFS{" "}
      </h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[120px]">

        <Random />
        <Tag />

      </div>

      <div className="flex fexl-row justify-evenly w-full mt-5 mb-6">
        <span className="bg-white px-2 py-1 rounded-xl border active:scale-85">  <a href="https://github.com/its-vishal0887"> <FaGithub size={25} /> </a> </span>
        <span className="bg-white px-2 py-1 rounded-xl border active:scale-85">  <a href="tel:+919370838330"> <FaPhoneAlt size={25} /></a> </span>
        <span className="bg-white px-2 py-1 rounded-xl border active:scale-85">  <a href="mailto:vishalsarvade9370@gmail.com" > <MdOutlineMail size={25} /> </a> </span>
        <span className="bg-white px-2 py-1 rounded-xl border active:scale-85">  <a href="https://www.linkedin.com/in/vishal-sarvade-47764031b/"> <FaLinkedinIn size={25} /> </a> </span>
      </div>

      <a href="https://github.com/its-vishal0887" className="flex font-bold gap-2 mb-5"><GiSelfLove size={25} fill="red"/> Create By Vishal</a>
      
    </div>
  );
};

export default App;
