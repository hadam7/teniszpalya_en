import { useEffect, useState } from "react";

export default function useScrollSection(ids) {
  const [currentSection, setCurrentSection] = useState(ids[0]);

  useEffect(() => {
    const handleScroll = () => {
      for (let id of ids) {
        const section = document.getElementById(id);
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.5 && rect.bottom > 0) {
          setCurrentSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ids]);

  return currentSection;
}
