import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 80%;
  margin: 10% auto;
  display: flex
  flex-direction: column;

  @media only screen and (max-width: 960px) {
    max-width: 90%;
  }
`;

export const Title = styled.p`
  color: black;
  font-weight: bold;
  font-size: var(--font-size-8);
  margin-top: 0;
  user-select: none;

  @media only screen and (max-width: 1200px) {
    font-size: var(--font-size-7);
  }
`;

export const Subtitle = styled.p`
  margin-top: 0;
  color: black;
  font-size: var(--font-size-4);
  user-select: none;

  @media only screen and (max-width: 1200px) {
    font-size: var(--font-size-3);
  }
`;

export const Content = styled.p`
  width: 60%;
  margin-top: 30px;
  margin-bottom: 30px;
  color: black;
  font-size: var(--font-size-4);
  user-select: none;

  @media only screen and (max-width: 1200px) {
    width: 80%;
    font-size: var(--font-size-3);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Button = styled.button`
  width: 150px;
  height: 50px;
  justify-content: center;
  background: #212529;
  color: white;
  font-size: var(--font-size-4);
  border: none;
  border-radius: 20px;
  cursor: pointer;

  @media only screen and (max-width: 960px) {
    font-size: var(--font-size-3);
    width: 94px;
    height: 50px;
  }
`;

export const SectionTitle = styled.p`
  margin-top: 20px;
  text-align: center;
  font-weight: bold;
  font-size: var(--font-size-8);
  user-select: none;
`;

export const SectionSubtitle = styled.p`
  text-align: center;
  font-size: var(--font-size-4);
  margin-top: 10px;
  margin-bottom: 50px;
  user-select: none;
  // text-decoration: overline #004383 solid 2px;
`;

export const CardviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;
