import Image from 'next/image';
import styled from 'styled-components';
const BannerCard = styled.div`
  position: relative;
  width: 100%;
  height: 40rem;
  margin-top:1rem;
  right: 0rem;
overflow: hidden;
border-radius:0px 10px 15px 15px;
z-index:-1;
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 0;
  border-radius:200px;
`;

const Title = styled.h1`
  color: white;
`;

const Description = styled.p`
  color: white;
`;

export default function Banner({ title, description, image }) {
    return (
        <BannerCard>
            <Image src={`/assets/${image}`} alt="Banner" layout="fill" objectFit="cover" />
            <BannerOverlay />
            <BannerContent>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </BannerContent>
        </BannerCard>
    );
}
