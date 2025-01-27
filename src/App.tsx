import { Route, Routes } from 'react-router';
import './App.css';
import ContactUs from './pages/ContactUs';
import Landing from './pages/Landing';
import MasterPage from './pages/MasterPage';
import NotFound from './pages/NotFound';
import NoticeBoard from './pages/NoticeBoard';
import OurMemories from './pages/OurMemories';
import Testimonials from './pages/Testimonials';

function App() {
  return (
    <>
    <MasterPage>
    <Routes>
             <Route path='/' element={<Landing />} />
             <Route path='testimonials' element={<Testimonials />} />
             <Route path='our-memories' element={<OurMemories />} />
             <Route path='notice-board' element={<NoticeBoard />} />
             <Route path='contact-us' element={<ContactUs />} />
             <Route path='*' element={<NotFound />} />
          </Routes>
    </MasterPage>
    </>
  );
}

export default App;
