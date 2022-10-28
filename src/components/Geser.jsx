import React from "react";
import { Carousel, img, CarouselCaption, CarouselItem } from "react-bootstrap";
import { gbr1, gbr2, gbr3 } from "../asset";

const Geser = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={gbr1} alt="First slide" />
          <Carousel.Caption>
            <h1>TIMNAS FUTSAL INDONESIA</h1>
            <h2>Naik ke Top 5 ASIA</h2>
            <p>Menunjukan Peningkatan yang drastis!!! </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={gbr2} alt="Second slide" />
          <Carousel.Caption>
            <h1>TIMNAS SANGAT BERPOTENSI KE PIALA DUNIA</h1>
            <h2>melihat peningkatan dan kualitas liga </h2>
            <p>Timnas Futsal bisa jadi menakutkan di masa depan </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={gbr3} alt="Third slide" />

          <Carousel.Caption>
            <h3>PSSI KAPAN ???</h3>
            <h4>Masih ada waktu ambil hikmahnya yok mari berbenah</h4>
            <p>yok bisa yok.... </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Geser;
