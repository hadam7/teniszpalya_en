import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from '../components/Navbar'
import Hero from '../sections/Hero';
import Reserve from '../sections/Reserve';
import Courts from '../sections/Courts';
import PriceList from '../sections/PriceList';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

import { backgroundPositions } from "../backgroundPositions";
import useScrollSection from "../useScrollSection";

function Home() {
  const sectionIds = ["Hero", "Reserve", "Courts", "PriceList", "Contact"];
  const currentSection = useScrollSection(sectionIds);

  const { topBlob, bottomBlob } = backgroundPositions[currentSection] || backgroundPositions.Hero;

  useEffect(() => {
    const hero = document.getElementById("Navbar");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="relative bg-white overflow-hidden min-h-screen font-['Poppins',sans-serif]">
      <motion.div
        className="w-[50vw] h-[50vw] bg-light-green rounded-full fixed blur-[200px] pointer-events-none z-0"
        animate={topBlob}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      <motion.div
        className="w-[50vw] h-[50vw] bg-light-green rounded-full fixed blur-[200px] pointer-events-none z-0"
        animate={bottomBlob}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      <div id="Navbar"><Navbar /></div>
      <div id="Hero"><Hero /></div>
      <div id="Reserve"><Reserve /></div>
      <div id="Courts"><Courts /></div>
      <div id="PriceList"><PriceList /></div>
      <div id="Contact"><Contact /></div>
      <Footer />
    </div>
  );
}

export default Home;