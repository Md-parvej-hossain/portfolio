import { Route, Routes } from 'react-router';
import './App.css';
import Root from './layouts/Root';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Hello from './pages/Hello';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutMe />}></Route>
          <Route path="/contacts" element={<Hello />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
