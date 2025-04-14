import { useRef, useState } from "react";
import "./Carousel.css"; // styling file

const Carousel = ({ images }) => {
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    const track = trackRef.current;
    const width = track.offsetWidth;
    track.scrollTo({ left: index * width, behavior: "smooth" });
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    goToSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    goToSlide(newIndex);
  };

  return (
    <div className="carousel">
      <div className="carousel-track" ref={trackRef}>
        {images.map((img, i) => (
          <img key={i} src={img} alt={`Slide ${i + 1}`} className="carousel-item" />
        ))}
      </div>
      <button className="carousel-btn prev" onClick={prevSlide}>‹</button>
      <button className="carousel-btn next" onClick={nextSlide}>›</button>
      <div className="carousel-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
