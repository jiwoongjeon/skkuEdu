import styled from "styled-components";
import { Link } from "react-router-dom";

export const BoardContainer = styled.div`
    width: 100%;
    height: 100%;
    background: white;
    display: flex;
    flex-direction: column;
`;

export const GridContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 0.3fr 1fr 4fr 1fr 0.3fr;
    grid-template-rows: auto;
    grid-template-areas:
    ". number title date ."
    ". div1 div1 div1 ."
    ". post post post ."
    ". div2 div2 div2 ."
    ". . pagenum write ."
    ". . . . .";
`;

export const BoardPostContainer = styled.div`
    grid-area: post;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const PostContainer = styled.div`    
    display: flex;
    flex-direction: row;
`;

export const PageNumContainer = styled.div`
    grid-area: pagenum;
    place-self: center;
`;

export const Header = styled.p`
    font-weight: bold;
    font-size: var(--font-size-5);
    text-align: left;
    margin: 100px 50px 50px 100px;
`;

export const Divider = styled.div`
    width: 100%;
    background: #E3E8F0;
    padding: 1px;
    margin: 10px 0px 10px 0px;
    align-self: center;
`;

export const Div1 = styled(Divider)`
    grid-area: div1;
`;

export const Div2 = styled(Divider)`
    grid-area: div2;
`;

export const Label = styled.p`
    font-size: var(--font-size-4);
    font-weight: bold;
    color: #4A5568;
    text-align: center;
    place-self: center;
`;

export const Number = styled(Label)`
    grid-area: number;
`;

export const Title = styled(Label)`
    grid-area: title;
`;

export const Date = styled(Label)`
    grid-area: date;
`;

export const RowElement = styled.p`
    place-self: center;
    font-size: var(--font-size-4);
    text-align: center;
    color: #4A5568;
    margin: 10px 0px 10px 0px;
`;

export const UploadId = styled(RowElement)`
    // grid-area: postId;
    flex: 1;
`;

export const UploadTitle = styled(RowElement)`
    // grid-area: postTitle;
    font-weight: bold;
    flex: 4;
    cursor: pointer;
`;

export const UploadDate = styled(RowElement)`
    // gird-area: postDate;
    flex: 1;
`;

export const PageNum = styled.button`
    font-size: var(--font-size-4);
    padding: 5px 10px 5px 10px;
    border: none;
    border-radius: 5px;
    margin: 0px 5px 0px 5px;
    color: #4A5568;
    cursor: pointer;

    &:hover {
        color: white;
        background-color: #A4C891;
    }
    &:active {
        color: white;
        background-color: #A4C891;
    }
`;

export const WriteBtn = styled(Link)`
    grid-area: write;
    font-size: var(--font-size-3);
    font-weight: bold;
    background: #4378A8;
    border-radius: 10px;
    color: white;
    text-align: center;
    padding: 10px 25px 10px 25px;
    place-self: center;

    &:hover {
        color: white;
        background-color: #A4C891;
    }
    &:active {
        color: white;
        background-color: #A4C891;
    }
`;