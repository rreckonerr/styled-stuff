import Head from 'next/head'
import Nav from '../components/Nav'

import styled, { ThemeProvider } from 'styled-components'
import { theme, hex2Rgba } from '../styles'

const Wrapper = styled.div`
  background-color: ${({theme}) => hex2Rgba(theme.color.primaryLight, 0.1)}
`

const MainContent = styled.main`
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 60em;

`


export default ({ children, title = 'This is the default title' }) => (
    <ThemeProvider theme={theme}>
        <Wrapper>
            <Head>
                <title>{title}</title>
            </Head>
            <header>
                <Nav />
            </header>

            <MainContent>
                {children}
            </MainContent>

        </Wrapper>
    </ThemeProvider>
)
