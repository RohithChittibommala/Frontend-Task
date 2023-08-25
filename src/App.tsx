import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CoursesSection from "./components/CoursesSection";
import BootcampSection from "./components/BootcampSection";
import bootcamps from "./data/bootcamps";
import Footer from "./components/FooterSection";
import courses from "./data/courses";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CoursesSection courses={courses} />
      <BootcampSection tabs={bootcamps} />
      <Footer />
    </>
  );
}

export default App;
