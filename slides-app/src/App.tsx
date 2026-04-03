import { useState, useEffect } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { TopNav } from "./components/TopNav";
import { Slide1 } from "./slides/Slide1";
import { Slide2 } from "./slides/Slide2";
import { Slide3 } from "./slides/Slide3";
import { Slide4 } from "./slides/Slide4";
import { Slide5 } from "./slides/Slide5";

const slides = [Slide1, Slide2, Slide3, Slide4, Slide5];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const CurrentSlideComponent = slides[currentSlide];

  const slideTitles = [
    "", // Slide 1
    "Training", // Slide 2
    "Datasets & Preprocessing", // Slide 3
    "Models & Architecture", // Slide 4
    "Results & Conclusions" // Slide 5
  ];

  return (
    <TooltipProvider>
      <div className="w-full min-h-screen bg-gray-50 overflow-x-hidden flex flex-col">
        {currentSlide === 1 && <TopNav variant="app" />}
        {currentSlide > 1 && <TopNav variant="title" title={slideTitles[currentSlide]} />}
        <div className="flex-1">
          <CurrentSlideComponent />
        </div>
        
        {/* Navigation Indicators */}
        <div className="fixed bottom-6 left-0 w-screen flex justify-center gap-3 z-50 pointer-events-none">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 pointer-events-auto ${
                currentSlide === index 
                  ? "bg-blue-600 w-6" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
}

export default App;
