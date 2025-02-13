import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Doctors from "./pages/Doctors";
import MyAppointment from "./pages/MyAppointment";
import Login from "./pages/Login";
import About from "./pages/About";
import MyProfile from "./pages/MyProfile";
import Appointment from "./pages/Appointment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctor" element={<Doctors />} />
        <Route path="/doctor/:speciality" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appointment" element={<MyAppointment />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
