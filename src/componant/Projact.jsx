import {
  FaArrowRight,
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaNodeJs,
} from 'react-icons/fa6';
import pro1 from '../assets/pro1.png';
import pro2 from '../assets/pro2.png';
import pro3 from '../assets/pro3.png';
import { FaReact } from 'react-icons/fa';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { FaHtml5 } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { SiAdobephotoshop, SiExpress } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';

const Projact = () => {
  return (
    <section className="my-8">
      <div className="text-center text-white py-10">
        <h1 className="text-6xl font-bold py-2">Projact </h1>
        <p className="text-2xl font-bold text-[#F8B90C] py-4">MY Cases</p>
      </div>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-5   py-10 ">
        <div className="card bg-[#1C222A] p-5 shadow-sm">
          <figure>
            <img className="rounded-lg" src={pro1} alt="Shoes" />
          </figure>
          <div className="py-4 text-white">
            <h2 className="card-title text-2xl space-x-4">
              <FaHtml5 />
              <FaCss3Alt />
              <FaReact />
              <RiTailwindCssFill />
              <DiMongodb />
              <SiExpress />
              <FaNodeJs />
            </h2>
            <h2 className="py-2">WordPress Theme Development</h2>
            <div className="card-actions justify-end pt-4">
              <button className="btn ">
                See Project <FaArrowRight className="text-[#F8B90C]" />
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-[#1C222A] p-5 shadow-sm">
          <figure>
            <img className="rounded-lg" src={pro2} alt="Shoes" />
          </figure>
          <div className="py-4 text-white">
            <h2 className="card-title text-2xl space-x-4">
              <IoLogoJavascript />
              <FaReact />
              <FaBootstrap />
              <DiMongodb />
              <SiExpress />
              <FaNodeJs />
              <SiAdobephotoshop />
            </h2>
            <h2 className="py-2">WordPress Theme Development</h2>
            <div className="card-actions justify-end pt-4">
              <button className="btn ">
                See Project <FaArrowRight className="text-[#F8B90C]" />
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-[#1C222A] p-5 shadow-sm">
          <figure>
            <img className="rounded-lg" src={pro3} alt="Shoes" />
          </figure>
          <div className="py-4 text-white">
            <h2 className="card-title text-2xl space-x-4">
              <FaReact />
              <RiTailwindCssFill />
              <DiMongodb />
              <SiExpress />
              <FaNodeJs />
              <RiNextjsFill />
              <FaFigma />
            </h2>
            <h2 className="py-2">WordPress Theme Development</h2>
            <div className="card-actions justify-end pt-4">
              <button className="btn ">
                See Project <FaArrowRight className="text-[#F8B90C]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projact;
