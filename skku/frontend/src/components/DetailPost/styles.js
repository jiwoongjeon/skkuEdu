import styled from "styled-components";

export const DetailPostContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const Row = styled.div`
    display: flex;
    margin: 0px 100px 0px 100px;
`;

export const Category = styled.p`
    font-size: var(--font-size-3);
    font-weight: 300;
    text-align: left;
`;

export const Title = styled.p`
    font-size: var(--font-size-5);
    font-weight: bold;
    text-align: left;
`;

export const TitleContainer = styled.div`
    margin-bottom: 20px;
`;

export const UserName = styled.p`
    font-size: var(--font-size-3);
    font-weight: 600;
    text-align: left;
    margin-left: 5px;
`;

export const Date = styled.p`
    font-size: var(--font-size-3);
    text-align: left;
    margin-left: 20px;
`;

export const UserContainer = styled.div`
    width: 30%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    margin-bottom: 20px;
`;

export const Content = styled.p`
    font-size: var(--font-size-3);
`;

export const ContentContainer = styled.div`
    width: 100%;
    height: auto;
    border: 0.5px solid;
    border-color: #BFBFBF;
    border-radius: 3px;
    background-color: white;
    padding: 5% 4% 5% 4%;
    margin-bottom: 20px;
`;

export const Spacer = styled.div`
    width: 100%;
    height: 80px;
`;

export const AttachmentLabel = styled.p`
    font-size: var(--font-size-3);
    font-weight: bold;
    margin-bottom: 10px;
`;

export const AttachmentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    width: 100%;
    padding: 2%;
    border-radius: 3px;
    border: 0.5px solid;
    border-color: #BFBFBF;
`;