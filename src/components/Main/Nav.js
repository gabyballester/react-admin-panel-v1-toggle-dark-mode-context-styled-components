import React from 'react'
import styled from 'styled-components';
import image from '../../assets/images/profilelg.png';

const Container = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 3rem;
`

const MessageIcon = styled.span`
    color: ${({ theme }) => theme.colorGray}; 
    font-size: 27px;
    cursor: pointer;
`
const ImgContainer = styled.div`
    height: 3rem;
    margin: 0 1rem;
    border-radius: 50%;
    overflow: hidden;
`


const ProfileImg = styled.img`
    width: 3rem;
    cursor: pointer;
`


const Nav = () => {
  return (
    <Container>
      <MessageIcon className="iconify" data-inline="false" data-icon="mdi-light:email"></MessageIcon>
      <ImgContainer>
        <ProfileImg src={image} />
      </ImgContainer>
    </Container>
  )
}

export default Nav
