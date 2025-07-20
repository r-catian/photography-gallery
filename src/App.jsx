import './index.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from './component/Header.jsx';
import Home from './component/Home.jsx';
import About from './component/About.jsx';
import Gallery from './pages/Gallery.jsx';
import GalleryDetails from './pages/GalleryDetails.jsx';
import Services from './component/Services.jsx';
import ContactUs from './component/Contact.jsx';
import CallToAction from './component/callToAction.jsx';
import Footer from './component/Footer.jsx';



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Show a loading spinner or message while loading
  if (loading) {
    return (
      <section className="max-w-6xl mx-auto p-6 flex justify-center items-center h-64">
        <div className="loader border-4 border-indigo-600 border-t-transparent rounded-full w-12 h-12 animate-spin"></div>
      </section>
    );
  }

  return (  
    <Router>
      <Header />
      <main>
        <Routes>
            <Route index element={
              <>
                <Home />
                <About />
                <Services />
                <ContactUs />
                <CallToAction />
                <Footer />
              </>
            } />
          
          <Route path="/about" element={<About />} />
          <Route path="/about" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:slug" element={<GalleryDetails />} />
        </Routes>

      </main>
    </Router>
  );
}

export default App;
