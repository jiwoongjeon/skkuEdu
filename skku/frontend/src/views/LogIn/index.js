import React from "react";
import { Background, LogInContainer, Container, SubContainer, Logo, Title, SectionTitle, TypeField, SubmitBtn, RM, PW, LogInGroup } from "./styles";
import logo from "../../assets/images/logo.svg";
import background from "../../assets/images/background.jpg";
import { Switch } from '@mui/material';

export const LogIn = () => {

    return (
        <Background background={background}>
            <LogInContainer>

                <Container>
                    <Logo src={logo} />
                    <Title>Admin Sign In</Title>
                </Container>

                <LogInGroup>
                    <Container>
                        <SectionTitle>ID</SectionTitle>
                        <TypeField />
                    </Container>
                    <Container>
                        <SectionTitle>Password</SectionTitle>
                        <TypeField />
                    </Container>
                </LogInGroup>
                
                <SubContainer>
                    <Container>
                        <Switch /><RM>Remeber Me</RM>
                    </Container>
                    <a href="/"><PW>Forgot Password?</PW></a>
                </SubContainer>

                <SubmitBtn>Sign In</SubmitBtn>
                
            </LogInContainer>
        </Background>  
    );
};

export default LogIn;