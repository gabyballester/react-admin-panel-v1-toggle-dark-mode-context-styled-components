import React from 'react'
import styled from 'styled-components'
import Image from '../../assets/images/profileimg.png'

const Container = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ImgContainer = styled.div`
    height: 9rem;
    border-radius: 50%;
    overflow: hidden;
`


const ProfileImg = styled.img`
    width: 9rem;
`

const ProfileName = styled.h1`
margin-top: 2rem;
    font-size: 1rem;
    font-weight: 900;
    color: ${({ theme }) => theme.textColor};
`

const Profile = () => {
    return (
        <div>
            <Container>
                <ImgContainer>
                    <ProfileImg src={Image} />
                </ImgContainer>
                <ProfileName>Gabriel Ballester</ProfileName>
            </Container>
        </div>
    )
}

export default Profile
