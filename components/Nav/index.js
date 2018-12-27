import Link from 'next/link'
import styled from 'styled-components'

const NavWrapper = styled.nav`
  display: flex;
  justify-content: flex-end;

  padding: 1rem;
  /* border-bottom: 0.06rem solid ${({theme}) => theme.color.primaryDark}; */

  background: ${({theme}) => theme.color.primary};
  box-shadow: 1px 2px 1px ${({theme}) => theme.color.primaryDark};
`

const NavLinks = styled.div`
`

const Nav = () => (
  <NavWrapper>
  <NavLinks>
    <Link href='/'><a>TmpHome</a></Link> |
    <Link href='/login' prefetch><a>TmpLogin</a></Link>
  </NavLinks>
  </NavWrapper>
)

export default Nav
