import { HeaderContainer, Logo } from './Header.styled'

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <Logo src='/images/myteacher.png' alt="Logo" />
        <p>Encontre o professor perfeito!</p>
      </div>
    </HeaderContainer>
  )
}

export default Header
