import { Main, Section, Cardtype1, Cardtype2 } from "../../components";
import { Title, Subtitle, CardviewContainer, Content, Container, Button, ButtonContainer, SectionTitle, SectionSubtitle, MoreButton } from "./styles";
import {cardData1} from "./tempData1";
import {cardData2} from "./tempData2";
import background from "../../assets/images/mainbackground.png";
import background2 from "../../assets/images/mainbackground2.png";
import background3 from "../../assets/images/mainbackground3.png";
import { SocketContext } from "../../api/logics"
import { useContext } from "react";

const Home = () => {
  const { journal, book, journalState, bookState, journalPage,
    bookPage, journalContent, bookContent, JCState, BCState,
    getJournalBoard, getBookBoard, getJournalBoardPage, getBookBoardPage,
    getJournalContent, getBookContent } = useContext(SocketContext);

  return (
    <Main>
      <Section background={background}>
        <Container>
          <Subtitle>SUNGKYUNKWAN UNIVERSITY</Subtitle>
          <Title>Global Leading Education Group</Title>
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            pulvinar non vestibulum consectetur nunc ac vel sollicitudin
            maecenas. Euismod aliquet urna metus, eget nam ornare mattis
            massa.Nunc pulvinar non vestibulum consectetur nunc ac vel
            sollicitudin maecenas. Euismod aliquet urna metus, eget nam ornare
            mattis massa.
          </Content>
          <Content>Learn more about</Content>
          <ButtonContainer>
            <a href="/k-nsse/introduction"><Button>K-NSSE</Button></a>
            <a href="/uica/introduction"><Button>UICA</Button></a>
          </ButtonContainer>
        </Container>
      </Section>
      <Section background={background2}>
        <Container>
          <SectionTitle>Recent Announcement</SectionTitle>
          <SectionSubtitle>Updates in Global Education Group</SectionSubtitle>
          <CardviewContainer>
            {cardData1.map((data, i) => (
              <Cardtype1
                key={i}
                imgURL={data.imgUrl}
                title={data.title}
                content={data.content}
              />
            ))}
          </CardviewContainer>
        </Container>
      </Section>
      <Section background={background3}>
        <Container>
          <SectionTitle>Research</SectionTitle>
          <SectionSubtitle>
            Achieve what we made in Global Education Group
          </SectionSubtitle>
          <CardviewContainer>
            {cardData2.map((data, i) => (
                <Cardtype2
                  key={i}
                  imgURL={data.imgUrl}
                  title={data.title}
                  content={data.content}
                />
              ))}
          </CardviewContainer>
        </Container>
      </Section>
    </Main>
  );
};

export default Home;