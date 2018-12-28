import Link from 'next/link'
import styled from 'styled-components'

const NavWrapper = styled.nav`
  display: flex;
  justify-content: flex-end;

  padding: 1rem;
  /* border-bottom: 0.06rem solid ${({theme}) => theme.color.primaryDark}; */

  background: ${({theme}) => theme.color.primaryDark};
  box-shadow: 0 2px 4px rgba(0,0,0,.5);
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
