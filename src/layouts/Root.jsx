import { Outlet } from 'react-router';
import Navbare from '../componant/Navbare';
import Footer from '../componant/Footer';

const Root = () => {
  return (
    <div>
      <div className="min-h-[calc(100vh)] w-11/12 mx-auto">
        <Navbare />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
