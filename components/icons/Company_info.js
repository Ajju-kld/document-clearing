import { styled } from "styled-components";
import Image from 'next/image';




const Section1 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  width: 100%;
   @media screen and (min-width: 768px) {
width: 20%;
  }
`;


export default function Company_info(){
    return (<Section1>
        <Image src={`/assets/LOGO.jpg`} alt="Banner" width={300} height={200} objectFit="cover" />
        Elam Al Aemal Documents Clearing Company is a premier provider of document clearing and attestation services in Dubai, UAE.</Section1>
    );
}