import styled from "styled-components";
import { Link } from "react-router-dom";

export const PostContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: white;
  overflow: hidden;
`;

export const Header = styled.p`
  font-weight: bold;
  font-size: var(--font-size-5);
  text-align: left;
  margin: 100px 50px 50px 100px;
`;

export const Divider = styled.div`
  width: 90%;
  background: #E3E8F0;
  padding: 1px;
  align-self: center;
`;

export const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 20px 100px 20px 100px;
`;

export const RowBottom = styled(Row)`
  width: 90%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-itmes: center;
  font-size: var(--font-size-3);
`;

export const LabelContainer = styled(Row)`
  height: 5%;
  width: 90%;
  text-align: center;
  font-size: var(--font-size-4);
`;

export const RowPost = styled(Row)`
  width: 90%;
`;

export const Label = styled.p`
  font-weight: bold;
  margin: 0px 20px 0px 20px;
  color: #4A5568;
`;

export const Number = styled(Label)`
  flex-grow: 1;
`;

export const Title = styled(Label)`
  flex-grow: 7;
`;

export const Date = styled(Label)`
  flex-grow: 4;
`;

export const PostElementContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  `;

export const PostElement = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  font-size: var(--font-size-4);
  color: #4A5568;
`;

export const RowElement = styled.p`
  text-align: center;
  margin: 10px 0px 10px 0px;
`;

export const UploadId = styled(RowElement)`
  flex-grow: 2;
`;

export const UploadTitle = styled(RowElement)`
  flex-grow: 5;
`;

export const UploadDate = styled(RowElement)`
  flex-grow: 4;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`;

export const WriteButton = styled(Link)`
  background: #4378A8;
  border-radius: 15px;
  padding: 15px 35px 15px 35px;
  color: white;
  font-weight: bold;
  
  &:hover {
    color: white;
    background-color: #A4C891;
  }
  &:active {
    color: white;
    background-color: #A4C891;
  }
`;

export const PageNumberContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-grow: 9;
`;

export const PageNumber = styled.button`
  padding: 10px;
  font-weight: bold;
  border-radius: 10px;
  color:#718096;
  margin: 5px;
  cursor:pointer;
  border: none;

  &:hover {
    color: white;
    background-color: #A4C891;
  }
  &:active {
    color: white;
    background-color: #A4C891;
  }
`;