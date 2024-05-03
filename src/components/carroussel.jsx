import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MyCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            <div className="h-full max-h-80 bg-cover">

                <img src="src/assets/images (1).jpeg" alt="Image 1" className="bg-cover w-full rounded-md"/>
            </div>
            <div className="h-full max-h-80 ">
                <img src="src/assets/téléchargement (1).png" alt="Image 2" className="bg-cover w-full rounded-md"/>
            </div>
            <div className="h-full max-h-80 ">
                <img src="src/assets/temple.jpeg" alt="Image 3" className="bg-cover w-full rounded-md"/>
            </div>
        </Slider>
    );
};

export default MyCarousel;
