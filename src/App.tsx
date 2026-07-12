import { useState } from "react";
import { ThemeProvider } from "./hooks/useTheme";
import LoadingScreen from "./components/LoadingScreen";
// import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Products from "./components/Products";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <LoadingScreen onDone={() => setLoading(false)} />
      {!loading && (
        <>
          {/* <CustomCursor /> */}
          <ScrollProgress />
          <Navbar />
          <main className="relative">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Products />
            <Experience />
            <Education />
            <Certifications />
            <Achievements />
            <Services />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </ThemeProvider>
  );
}
