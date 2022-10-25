import React from "react";
import background from "../../assets/images/mainbackground.png";
import { Hero, Main } from "..";
import BoardData from "./tempData";
import Button from '@mui/material/Button';

const { PostContainer, Header, PostElementContainer, Divider, PostElement, Row, RowBottom, WriteButton, PageNumber, PageNumberContainer, Number, Title, Date, LabelContainer, UploadId, UploadTitle, UploadDate, UploadFile, RowPost, ButtonContainer, Download } = require("./styles");

export const Board = (props) => {

    const heroHeight = Math.min(window.innerWidth / 2, 400);

    let button = 
    <Button variant="contained" size="large" >
        Download
    </Button>

    return (
        <Main>
            <Hero background={background} height={`${heroHeight}px`} />

            <PostContainer>

                <Header>Recent Posts</Header>

                <LabelContainer>
                    <Number>Number</Number>
                    <Title>Title</Title>
                    <Date>Date</Date>
                    <Download>Download</Download>
                </LabelContainer>

                <Divider />

                <RowPost>
                    <PostElementContainer>
                    {BoardData[0].boardData.map((data, i) => (
                        <PostElement>
                            <UploadId> {data.id} </UploadId>
                            <UploadTitle> {data.title} </UploadTitle>
                            <UploadDate> {data.uploadDate} </UploadDate>
                            <UploadFile> {button} </UploadFile>
                        </PostElement>
                    ))}
                    </PostElementContainer>
                </RowPost>
                
                <Divider />

                <RowBottom>
                    <ButtonContainer />
                    <PageNumberContainer>
                        {BoardData[0].pageNum.map((data, i) => (
                            <PageNumber> {i} </PageNumber>
                        ))}
                    </PageNumberContainer>
                    <ButtonContainer>
                        <WriteButton to={'./Newpost'}>
                        Write A New Post
                        </WriteButton>
                    </ButtonContainer>
                    
                </RowBottom>

            </PostContainer>
        </Main>
  );
};

export default Board;