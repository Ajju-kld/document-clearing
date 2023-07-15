import Link from "next/link";
import styled from "styled-components";
import Image from 'next/image';

const CardStyle = styled.div`
  border-radius: 12px;
  box-shadow: 4px 2px 10px black;
  background-color: white;
  max-width: 20rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  overflow: hidden;
  position: relative;
`;

const Content = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled(Image)`
  width: 23rem; /* Set the image width to 100% */
  height: 15rem;
  margin-top:-1rem; /* Automatically adjust the height to maintain aspect ratio */
`;

export default function Card({ title, description, image }) {
    return (
        <div>
            <CardStyle>
                <StyledImage src={image} width={320} height={200} />
                <Content>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    {/* <Link href="https://google.com">More Details</Link> */}
                </Content>
            </CardStyle>
        </div>
    );
}
