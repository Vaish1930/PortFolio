import { Button } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";

import styled from "styled-components";

function About() {
  return (
    <AboutContainer id="about">
      <AboutImageContainer>
        <AboutImage src="https://cdn.discordapp.com/attachments/798248185155289101/835419506469634068/IMG-20190907-WA0212.jpg" />
      </AboutImageContainer>
      <AboutContent>
        <AboutHeading>Know About Me !</AboutHeading>
        <AboutDescription>
          I'm a computer science student who is passionate about writing code,
          solving problems, automating stuff, and building software.
        </AboutDescription>
        <AboutHeading>Contact</AboutHeading>
        <AboutDescription>
          ⚙ srivastavavaishnavi39@gmail.com <br /> ⚙ Lucknow,UP <br /> ⚙ India
        </AboutDescription>
        <StyledButton href="https://drive.google.com/file/d/1jzmeGPB2JJO48zI9cTyvLom7v2gKCjbJ/view?usp=sharing">
          <GetAppIcon /> Download Resume
        </StyledButton>
      </AboutContent>
    </AboutContainer>
  );
}

export default About;

const AboutContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: 70px 20px;
  background: #141d26;
  flex-wrap: wrap;
`;

const AboutImageContainer = styled.div`
  margin: 0 133px 50px 0;
`;

const AboutImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
`;

const AboutContent = styled.div`
  max-width: 755px;
`;

const AboutHeading = styled.h1`
  color: #fff;
  margin-bottom: 20px;
`;

const AboutDescription = styled.p`
  color: #7a7a7a;
  margin-bottom: 20px;
  font-size: 1.3rem;
  line-height: 2rem;
`;

export const StyledButton = styled(Button)`
  background: #243447 !important;
  color: #fff !important;
  padding: 15px 20px !important;
  box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.5) !important;
  transition: 0.2s all ease-in-out !important;

  :hover {
    box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.2) !important;
  }
`;
