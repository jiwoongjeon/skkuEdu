import React from "react";
import { 
DetailPostContainer, TitleContainer, Row, Category, Title, ContentContainer, UserName, UserContainer, Content, Date, Spacer, AttachmentLabel, AttachmentContainer } from "./styles";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import background from "../../assets/images/mainbackground.png";
import { Hero, Main } from "..";

export const DetailPost = () => {

    const heroHeight = Math.min(window.innerWidth / 2, 400);

    let tempText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas egestas fringilla phasellus faucibus. Rhoncus est pellentesque elit ullamcorper. Vulputate dignissim suspendisse in est ante in nibh mauris. Duis convallis convallis tellus id interdum velit. Lacinia quis vel eros donec. Id donec ultrices tincidunt arcu. Ultrices vitae auctor eu augue ut lectus arcu. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Adipiscing at in tellus integer feugiat. Diam donec adipiscing tristique risus nec feugiat. Ullamcorper a lacus vestibulum sed arcu. Sapien faucibus et molestie ac feugiat sed lectus. Mattis rhoncus urna neque viverra justo. Adipiscing elit pellentesque habitant morbi tristique. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Amet facilisis magna etiam tempor orci eu lobortis. Porttitor leo a diam sollicitudin. Velit scelerisque in dictum non consectetur a.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas egestas fringilla phasellus faucibus. Rhoncus est pellentesque elit ullamcorper. Vulputate dignissim suspendisse in est ante in nibh mauris. Duis convallis convallis tellus id interdum velit. Lacinia quis vel eros donec. Id donec ultrices tincidunt arcu. Ultrices vitae auctor eu augue ut lectus arcu. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Adipiscing at in tellus integer feugiat. Diam donec adipiscing tristique risus nec feugiat. Ullamcorper a lacus vestibulum sed arcu. Sapien faucibus et molestie ac feugiat sed lectus. Mattis rhoncus urna neque viverra justo. Adipiscing elit pellentesque habitant morbi tristique. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Amet facilisis magna etiam tempor orci eu lobortis. Porttitor leo a diam sollicitudin. Velit scelerisque in dictum non consectetur a.Ipsum nunc aliquet bibendum enim facilisis gravida neque. Amet facilisis magna etiam tempor orci eu lobortis. Porttitor leo a diam sollicitudin. Velit scelerisque in dictum non consectetur Ipsum nunc aliquet bibendum enim facilisis gravida neque. Amet facilisis magna etiam tempor orci eu lobortis. Porttitor leo a diam sollicitudin. Velit scelerisque in dictum non consectetur ";

    return (
        <Main>
            <Hero background={background} height={`${heroHeight}px`} />

            <DetailPostContainer>
                <Spacer />
                
                <Row>
                    <TitleContainer>
                        <Category>Post Category</Category>
                        <Title>Post Title from the Board</Title>
                    </TitleContainer>
                </Row>

                <Row>
                    <UserContainer>
                        <AccountCircleIcon />
                        <UserName>Admin</UserName>
                        <Date>2023년 2월 21일</Date>
                    </UserContainer>
                </Row>
            
                <Row>
                    <ContentContainer>
                        <Content>
                            {tempText}
                        </Content>
                    </ContentContainer>
                </Row>

                <Row>
                    <AttachmentLabel>Attachment</AttachmentLabel>
                </Row>

                <Row>
                    <AttachmentContainer>
                        <Button variant="contained">Download All</Button>
                    </AttachmentContainer>
                </Row>

                <Spacer />

            </DetailPostContainer>
        </Main>
        
    );
};

export default DetailPost;