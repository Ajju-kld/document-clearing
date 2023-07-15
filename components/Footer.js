import { styled } from "styled-components";
import Image from 'next/image';
import Company_info from "./icons/Company_info";

const Section5 = styled.div`
  background-color: white;
  margin-top:6rem;
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
position: relative;
align-items: center;
gap: 3rem;
  justify-content: center;
 @media screen and (min-width: 768px) {
  gap: 15rem;
  }
`;



const Section2 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Section3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;

`;

const Foot = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Highlighted = styled.span`
  color: #FF8C00;
  font-weight: bold;
`;

export default function Footer() {
    return (
        <div>
            <Section5>
                <Company_info></Company_info>
             
                <Section2>
<h3>Services</h3>
                    <ol><p>Company Formation</p>
                    <p>PRO Works</p>
                    <p>Certificate Attestation</p>
                    <p>All Types of Visa Service</p>
                    <p>Local Sponsor</p>
                    <p>License Renewal</p>
                        </ol>

                </Section2>
                <Section3>
                    <h3>Contact Info</h3>
                    <p>Phone</p>
                    <Highlighted>+971 4 882 1368</Highlighted>
                    <p>Email</p>
                    <Highlighted>elamdocuments@gmail.com</Highlighted>
                    <p>Address</p>
                    <Highlighted>Attar building al karama officeno:07,Dubai</Highlighted>
                </Section3>
            </Section5>
            <Foot>
                <p>&copy; 2023 Elam Al Aemal</p>
            </Foot>
        </div>
    );
}
