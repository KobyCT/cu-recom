import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function PhotoSlider() {
  return (
    <Carousel>
      <div>
        <img src="/ph.jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="/ph.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="/ph.jpg" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
}