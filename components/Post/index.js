import React from 'react'
import styled from 'styled-components'
import { TextButton, hex2Rgba } from '../../styles'


const PostWrapper = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;

  font-size: 1em;

  background-color: ${({theme}) => theme.color.postBackground};
  border-bottom: 1px solid ${({theme}) => hex2Rgba(theme.color.primaryLight, 0.3)};

  &:hover {
    background-color: ${({theme}) => hex2Rgba(theme.color.secondary, 0.1)};
  }
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 1em;
  padding: 0.6em 0;
  white-space: nowrap;

  fill: ${({theme}) => theme.color.secondary};
`

const TitleWrapper = styled.div`
  margin: 0 1em;
  width: 55%;
`

const Title = styled.div`
  font-weight: bold;
`

const DateCreatedWrapper = styled.div`
  text-align: left;
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
`

const PostItem = ({ post }) => (
  <PostWrapper>
    <LogoWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
    </LogoWrapper>
    <TitleWrapper>
      <Title>
        {post.title.length > 70 ? post.title.substring(0, 70) + '...' : post.title}
      </Title>
    </TitleWrapper>
    <DateCreatedWrapper>
      Dec 26, 2018
    </DateCreatedWrapper>
    <ButtonWrapper>
      <TextButton small>Unsigned</TextButton>
      <TextButton small secondary>Signed</TextButton>
    </ButtonWrapper>
  </PostWrapper>
)

export default PostItem
