import styled from "styled-components/macro";

export const Container = styled.footer`
  color: #888888;
  display: flex;
  flex-direction: row;
  width: 95%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  flex: 0 0 auto;
  padding: 40px 20px 40px 20px;
`;

export const LogInPage = styled.button`
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-size: var(--font-size-2);
  margin-top: 10px;

  &:hover {
    background: black;
    color: white;
  }
`;

export const LogInGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ContentGroup = styled.div``;

export const Text = styled.p`
  font-size: var(--font-size-2);
  font-weight: 700;
`;

export const Subtext = styled.p`
  font-size: var(--font-size-2);
`;

export const Image = styled.img`
  max-width: 150px;
`;