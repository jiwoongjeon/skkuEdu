import styled from "styled-components";

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 2000px;
    background: #A4C892;
`;

export const LogInContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 25%;
    height: 80%;
    border-radius: 15px;
    background: #FFFFFF;
    padding: 10px 50px 10px 50px;
`;

export const LogInGroup = styled.div`
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 20px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const SubContainer = styled(Container)`
    justify-content: space-between;
`;

export const Logo = styled.img`
    width: 10%;
    height: auto;
`;

export const Title = styled.p`
    color: black;
    font-weight: bold;
    font-size: var(--font-size-5);
    text-align: center;
    user-select: none;
    margin: 0px 0px 0px 10px;
`;

export const SectionTitle = styled(Title)`
    flex: 1;
    align-self: flex-start;
    font-size: var(--font-size-3);
    margin-right: 20px;
`;

export const TypeField = styled.textarea`
    border: none;
    flex: 3;
    height: 30px;
    line-height: 30px;
    border-radius: 10px;
    background: #F4F5F5;
    resize: none;
`;

export const SubmitBtn = styled.button`
    align-self: center;
    padding: 10px 20px 10px 20px;
    // width: 30%;
    // height: 50px;
    cursor: pointer;
    border: none;
    border-radius: 10px;

    &:hover {
        background: black;
        color: white;
    }
`;

export const RM = styled.p`
    color: #618EB8;
`;

export const PW = styled.button`
    padding: 8px;
    border-radius: 5px;
    border: none;
    color: #618EB8;
    cursor: pointer;
    background: transparent;
  
    &:hover {
        background: rgb(0, 0, 0, 0.05);
        color: #618EB8;
    }
`;