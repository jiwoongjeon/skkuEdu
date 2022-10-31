import { Link } from "react-router-dom";
import styled from "styled-components";

export const NewBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px 100px 20px 100px;
`;

export const Header = styled.p`
  font-size: var(--font-size-5);
  font-weight: bold;
  text-align: left;
  margin: 100px 50px 50px 100px;
`;

export const TitleInput = styled.input.attrs({
    type: "text",
    placeholder: "Title",
})`
    width: 95%;
    margin-top: 1.5%;
    margin-left:2%;
    margin-bottom: 0.5%;
    border: none;
    outline: none;
    ::placeholder,
    ::-webkit-input-placeholder {
        color: #aaa;
      }
`;

export const ContentInput = styled.input.attrs({
    type: "text",
    placeholder: "Description Text & Input",
})`
    width:95%;
    height:85%;
    margin-top: 1.5%;
    margin-left:2%;
    margin-bottom: 0.5%;
    border: none;
    outline: none;
    multiline: true;    
    overflow-y: auto;
    ::placeholder,
    ::-webkit-input-placeholder {
    color: #ccc;
  }
`;

export const Blank = styled.p`
  margin-top:20px;
`;

export const SubmitBtnDisabled = styled.button`
  cursor: not-allowed;
  padding: 20px;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  color: white;
  background: #618EB9;
  align-self: flex-end;
  margin: 0px 100px 50px 0px;
`;

export const SubmitBtn = styled(SubmitBtnDisabled)`
  cursor: pointer;
  &:hover {
    color: black;
    background: #A4C891;
  }
`;

