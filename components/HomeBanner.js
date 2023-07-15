import Image from 'next/image';
import styled from 'styled-components';

const BannerCard = styled.div`
  position: relative;
  width: 100%;
  height: 40rem;
  margin-left: 1rem;
  right: 1rem;
  overflow: hidden;
  border-radius: 0px 10px 15px 15px;
  z-index: -1;
`;

const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 0 0 0 12px;
  background-color: blue;
  opacity: 0.35;
  z-index: 0;
`;

const BannerContent = styled.div`
  position: absolute;
  top: 75%;
  left: 1rem;
  transform: translateY(-50%);
  text-align: left;
  z-index: 0;
  border-radius: 200px;
`;

const Title = styled.h1`
  color: white;
  text-align: left;
  
   @media screen and (min-width: 768px) {
  font-size:3rem;  
  
  width:70%
  }
`;

const Description = styled.p`
  color: white;
  width: 100%;
`;

const Cc = styled.h2`
  margin-bottom: 1.5rem;
  color: white;
  fontsize:1rem;
`;

export default function HomeBanner({ title, description, image }) {
  return (
    <BannerCard>
      <Image src={`/assets/${image}`} alt="Banner" layout="fill" objectFit="cover" />
      <BannerOverlay />
      <BannerContent>
        <Cc>Elam Al Aemal Document Clearing Co.</Cc>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </BannerContent>
    </BannerCard>
  );
}
