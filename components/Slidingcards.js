import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  display: flex;
  z-index:-2;
  justify-content: center;
  margin: 2rem;

`;

const Card = styled.div`
  width: 15rem;
  height: 15rem;
  background-color: #e1e6ed;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  overflow: hidden;
  z-index:-2;
`;

const ImageCarousel = () => {
    return (
        <Carousel
            showThumbs={false} // Hide thumbnail navigation
            showStatus={false} // Hide status indicator
            showArrows={true}
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            width={400}
        >
            <CarouselContainer>
                <Card>
                    <img src="/assets/DED.png" alt="Image 1"  />
                </Card>
            </CarouselContainer>
            <CarouselContainer>
                <Card>
                    <img src="/assets/GOD.png" alt="Image 2" />
                </Card>
            </CarouselContainer>
            <CarouselContainer>
                <Card>
                    <img src="/assets/DHA.png" alt="Image 3" />
                </Card>         
            </CarouselContainer>
            <CarouselContainer>
                <Card>
                    <img src="/assets/GDRFA-LOGO.png" alt="Image 4" />
                </Card>
            </CarouselContainer>
            <CarouselContainer>
                <Card>
                    <img src="/assets/UAE-LOGO.png" alt="Image 4" />
                </Card>
            </CarouselContainer>
        </Carousel>
    );
};

export default ImageCarousel;
