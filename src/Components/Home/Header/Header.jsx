import { useEffect, useState } from 'react';

const Header = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  const [texts, setTexts] = useState([
    "Editable Text for Slide 1",
    "Editable Text for Slide 2",
    "Editable Text for Slide 3",
    "Editable Text for Slide 4"
  ]);

  const slides = [
    "https://i.ibb.co/pzvnHQw/przemyslaw-marczynski-q-JVG1f-YFib4-unsplash.jpg",
    "https://i.ibb.co/QQ56LZF/maxim-hopman-Hin-rzh-Od-Ws-unsplash.jpg",
    "https://i.ibb.co/tC4GRRx/william-hook-9e9-PD9bl-Ato-unsplash.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleTextChange = (index, newText) => {
    const newTexts = [...texts];
    newTexts[index] = newText;
    setTexts(newTexts);
  };
    return (
        <div className="carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-item relative w-full ${index === currentSlide ? 'block' : 'hidden'}`}
        >
          <img src={slide} className="w-full" alt={`Slide ${index + 1}`} />
          <div className="absolute text-2xl bottom-0 left-0 right-0 bg-opacity-50 bg-black text-white p-4">
            <textarea
              value={texts[index]}
              onChange={(e) => handleTextChange(index, e.target.value)}
              className="w-full bg-transparent border-none outline-none resize-none"
            />
          </div>
        </div>
      ))}
    </div>
    );
};

export default Header;