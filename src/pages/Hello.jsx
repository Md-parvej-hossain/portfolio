const Hello = () => {
  return (
    <div>
      <div className="text-center text-white py-10">
        <h1 className="text-6xl font-bold py-4">Contact</h1>
        <p className="text-2xl font-bold text-[#F8B90C]">
          Let's Talk About Ideas​
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <div className="card card-compact shadow-xl py-4">
          <figure>
            <img
              src={'https://i.ibb.co.com/rK4YyjPX/download.jpg'}
              alt="Shoes"
              className="w-full"
            />
          </figure>
          <div className=" text-white w-full py-5">
            <h2 className="card-title text-3xl">Md Parvej</h2>
            <p className="text-2xl py-2">Web Developer (MERN)</p>
            <p>
              Are You Looking For Your Business Online Presence? I am here. 🙂
            </p>
          </div>
        </div>
        <div>
          <div className=" flex items-center justify-center mb-10">
            <div className="w-full rounded-lg shadow-lg ">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-400 text-sm mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      className="input input-bordered w-full bg-gray-700 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="input input-bordered w-full bg-gray-700 text-white"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-400 text-sm mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    className="input input-bordered w-full bg-gray-700 text-white"
                  />
                  <p className="text-gray-500 text-sm mt-1">
                    Your email is safe with me, I do not spam.
                  </p>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-400 text-sm mb-1">
                    Message *
                  </label>
                  <textarea
                    placeholder="Write your message..."
                    className="textarea textarea-bordered w-full bg-gray-700 text-white"
                    rows="4"
                  ></textarea>
                </div>
                <div className="mb-4">
                  <div className="flex items-center">
                    <input type="checkbox" className="checkbox mr-2" />
                    <span className="text-gray-400">I'm not a robot</span>
                  </div>
                </div>
                <button className="btn btn-warning w-full text-white font-bold">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hello;
