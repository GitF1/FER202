import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ImageSlider() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };
    
    const images = [
        'https://wallpaperaccess.com/full/1968337.png',
        'https://wallpapercave.com/wp/wp2026682.jpg',
        'https://th.bing.com/th/id/OIP.N8uygzCjyLzGXYy1Uli4eAAAAA?rs=1&pid=ImgDetMain',
    ];

    return (
        <SliderContainer className='slider-container'>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <Slide key={index}>
                        <SlideImage url={image}></SlideImage>
                    </Slide>
                ))}
            </Slider>
        </SliderContainer>
    );
}

export default ImageSlider;

const SliderContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 40px 0;
`;

const Slide = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 8px;
  max-height: 250px;
  padding: 10px;
`;

const SlideImage = styled.div`
  height: 250px;
  width: 100%;
  border-radius: 8px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props => props.url});
`;
