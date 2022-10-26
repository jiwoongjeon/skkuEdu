import React from "react";
import { BoardContainer, GridContainer, BoardPostContainer, PostContainer, PageNumContainer, Header, Number, Title, Date, Download, PageNum, WriteBtn, Div1, Div2, UploadId, UploadTitle, UploadDate, UploadFile } from "./styles"
import background from "../../assets/images/mainbackground.png";
import { Hero, Main } from "..";
import BoardData from "./tempData";
import Button from '@mui/material/Button';


export const GridBoard = (props) => {

    const heroHeight = Math.min(window.innerWidth / 2, 400);

    let button = 
    <Button variant="contained" size="medium" >
        File Download
    </Button>;

    return (
        <Main>

            <Hero background={background} height={`${heroHeight}px`} />

            <BoardContainer>

                <Header>Recent Posts</Header>

                <GridContainer>

                    <Number>Number</Number>
                    <Title>Title</Title>
                    <Date>Date</Date>
                    <Download>Download</Download>

                    <Div1 />
                    
                    <BoardPostContainer>
                        {BoardData[0].boardData.map((data, i) => (
                            <PostContainer>
                                <UploadId> {data.id} </UploadId>
                                <UploadTitle> {data.title} </UploadTitle>
                                <UploadDate> {data.uploadDate} </UploadDate>
                                <UploadFile> {button} </UploadFile>
                            </PostContainer>
                        ))}
                    </BoardPostContainer>
                    
                    <Div2 />

                    <PageNumContainer>
                        {BoardData[0].pageNum.map((data, i) => ( 
                        <PageNum> {i} </PageNum> 
                        ))}
                    </PageNumContainer>
                    <WriteBtn to={"/Newpost"}>Write A New Post</WriteBtn>

                </GridContainer>

            </BoardContainer>

        </Main>
    );
};

export default GridBoard;