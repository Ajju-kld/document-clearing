import HomeBanner from "@/components/HomeBanner";
import Header from "@/components/Header";
import ImageCarousel from "@/components/Slidingcards";
import { styled } from "styled-components";
import Card from "@/components/Card";
import Footer from "@/components/Footer";


const Section1 = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin-top:3rem;
margin-left:1rem;
margin-right:auto;
justify-content:center;
gap:1rem;
z-index:-2;
font-size:1rem;
justify-content:center;

`;
const Section2 = styled.div`
display:flex;
flex-direction:column;
margin:2rem 0rem 0 2rem;
padding:0 0rem 0rem 0; 
position:relative;
justify-content:center;
gap:1rem;
z-index:-2;
 @media screen and (min-width: 768px) {
 display:flex;
    flex-direction:row;
   gap:5rem;
  }


`;


const Section3 = styled.div`
display:flex;
flex-direction:row;
margin:0 1rem 0 1rem;
width:100%;
margin-left:-10px;
 @media screen and (min-width: 768px) {
width:60%;
   
  }
`;


const Section4 = styled.div`
display:flex;
flex-direction:row;
flex:1;
z-index:-2;
gap:5rem;
justify-content:center;
flex-wrap:wrap;
margin-top:3rem;
`;


const Heading1 = styled.h1`
font-size:1rem;
width:100%;
display:flex;
justify-content:center;
 @media screen and (min-width: 768px) {
  font-size:2rem;}`;

const VerticalLine = () => (
    <svg width="80" height="100">
        <line x1="1" y1="-10" x2="1" y2="200" stroke="black" strokeWidth="10" />
    </svg>
);

const InnerSec3=styled.div`
display:flex;
flex-direction:column;
gap:0.5rem;


`;

export default function HomePage() {
    return (
        <div>
            <Header />
            <HomeBanner title="Expert Solution For Document Clearing Services in Dubai"
                description=""
                image="service-poster.jpg" />
            <Section1> <Heading1>
                We maintain a close collaboration with various government agencies.</Heading1>
                <ImageCarousel></ImageCarousel></Section1>
            <Section2>
                <InnerSec3><h3>All Your Needs in One Place!</h3>
                    <h1>  Our Services</h1></InnerSec3>
                <Section3>
                    <VerticalLine />
                    <p>We assist individuals and businesses in processing various documents, such as Visa Applications, Company Formation, Trade License Renewals, and other government-related documents.</p>
                </Section3>
            </Section2>
            <Section4>
                <Card title={"COMPANY FORMATION"} description={"Company formation in Dubai involves registering a business entity with the Department of Economic Development (DED) and obtaining licenses and permits to operate in the emirate."} image={"/assets/company-formation.jpg"}></Card>
       
                <Card title={"VISA SERVICE"} description={"Visa services in Dubai typically involve assessing the eligibility of the applicant, submitting the documents, and following up on the application process until the visa is issued."} image={"/assets/VISA.jpg"}></Card>  
                <Card title={"PRO services"} description={"We offer PRO services in Dubai to businesses and individuals in processing and obtaining various government-related documents and approvals."} image={"/assets/PRO.jpg"}></Card>




            </Section4>
            <Footer></Footer>
        </div>
    );
}



