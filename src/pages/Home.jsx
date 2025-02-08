import Contact from '../componant/Contact';
import Ido from '../componant/Ido';
import Projact from '../componant/Projact';
import Skille from '../componant/Skille';

const Home = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-2">
          <div className="flex justify-center items-center w-full h-full">
            <img
              src="https://i.ibb.co.com/ym8wVg49/Whats-App-Image-2025-02-05-at-15-55-02-80d5502e.jpg"
              className="shadow-2xl object-cover rounded-full w-[400px] h-[400px] lg:mr-10"
            />
          </div>

          <div className="text-[#ffffff] ">
            <p className="font-semibold">Hello, My Name Is</p>
            <h1 className="text-5xl font-bold py-4">MD PARVEJ</h1>
            <p className="text-[#F8B90C] text-lg font-semibold">
              I AM Web Developer
            </p>
            <p className="py-4">
              From Dhaka, Bangladesh. I’m a Front End Web developer who is
              passionate about making error-free websites. I am good at React. I
              love to talk with you about your unique.
            </p>
            <button className="btn btn-primary bg-[#F8B90C]">Contact</button>
          </div>
        </div>
      </div>
      <Ido />
      <Projact />
      <Skille />
      <Contact />
    </div>
  );
};

export default Home;
