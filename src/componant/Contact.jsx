import { ImUserTie } from 'react-icons/im';
import { MdOutlineMailOutline } from 'react-icons/md';

const Contact = () => {
  return (
    <div>
      <section className="my-8">
        <div className="text-center text-white py-10">
          <h1 className="text-6xl font-bold py-4">Contact​ </h1>
          <p className="text-2xl font-bold text-[#F8B90C]">
            {' '}
            Are You Looking For Your Business Online Presence? I am here. 🙂
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
          <div className="card  bg-[#1C222A]  shadow-sm">
            <figure className="px-10 pt-10">
              <ImUserTie className="text-3xl text-[#F8B90C]" />
            </figure>
            <div className="card-body items-center text-center text-white">
              <h2 className="card-title text-2xl font-bold">Md Parvej</h2>
              <p className="text-lg">Web Developer (MERN)​</p>
            </div>
          </div>
          <div className="card  bg-[#1C222A]  shadow-sm">
            <figure className="px-10 pt-10">
              <MdOutlineMailOutline className="text-3xl text-[#F8B90C]" />
            </figure>
            <div className="card-body items-center text-center text-white">
              <h2 className="card-title text-2xl font-bold">Freelancer</h2>
              <p className="text-lg">Web Developer (MERN)​</p>
            </div>
          </div>
          <div className="card  bg-[#1C222A]  shadow-sm">
            <figure className="px-10 pt-10">
              <MdOutlineMailOutline className="text-3xl text-[#F8B90C]" />
            </figure>
            <div className="card-body items-center text-center text-white">
              <h2 className="card-title text-2xl font-bold">Email</h2>
              <p className="text-lg">mdparvejhossan74@gmail.com​</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
