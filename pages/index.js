import React from 'react'
import Layout from '../layouts/Main'
import { getPosts } from '../api/posts'

import Post from '../components/Post'
import styled from 'styled-components'
import { TextButton, RaisedButton, hex2Rgba } from '../styles';

const PostWrapper = styled.div`
  width: 100%;
  margin: 1em 0;
  border: 1px solid ${({theme}) => hex2Rgba(theme.color.primary, 0.3)};

  background-color: white;
`
const ButtonWrapper = styled.div`
  margin: 1em 0;
`

const IndexPage = ({ posts }) =>
  <Layout>
    <ButtonWrapper>
      <TextButton small>Button</TextButton>
      <TextButton small secondary>Button</TextButton>
      <TextButton>Button</TextButton>
      <TextButton secondary>Button</TextButton>
      <RaisedButton>Raised</RaisedButton>
      <RaisedButton secondary>Raised</RaisedButton>
    </ButtonWrapper>
    <PostWrapper>
      {posts.map(p => <Post key={p.title} post={p} />)}
    </PostWrapper>
  </Layout>

IndexPage.getInitialProps = async ({ req }) => {
  const res = await getPosts()
  const json = await res.json()
  return { posts: json }
}

export default IndexPage
