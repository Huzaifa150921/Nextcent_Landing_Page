import React, { useState , useEffect} from 'react';
import './Coursal.css';
import RegisterButton from '../UIElements/Buttons/PrimaryNormalButton/PrimaryNormal.jsx';
import CoursalImage from '../../assets/pic/pic1.png';

const slides = [
  {
    heading1: "Lessons and insights",
    heading2: "from 8 years",
    body: "Where to grow your business as a photographer: site or social media?",
    image: CoursalImage,
  },
  {
    heading1: "Grow your audience",
    heading2: "with smart tools",
    body: "Use automation and AI to reach more clients with less effort.",
    image: CoursalImage,
  },
  {
    heading1: "Boost your revenue",
    heading2: "without extra stress",
    body: "Turn your visitors into loyal customers with simple strategies.",
    image: CoursalImage,
  }
];

const Coursal = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="Coursal">
    
      <div
        className="CoursalContent"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <div className="CoursalHeading">
              <h2 id="CoursalHeading1">{slide.heading1}</h2>
              <h2 id="CoursalHeading2">{slide.heading2}</h2>
              <h6 id="CouralBody">{slide.body}</h6>
              <RegisterButton text="Register" />
            </div>
            <img src={slide.image} alt="CoursalImage" />
          </div>
        ))}
      </div>

    
      <div className="CoursalDotsFlex">
        <div className="CoursalDots">
          {slides.map((_, index) => (
            <input
              key={index}
              type="radio"
              name="CoursalSlider"
              checked={activeIndex === index}
              onChange={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coursal;
