import StyledNavbarButton from './styles/StyledNavbarButton'

interface NavbarButtonProps {
    onClick: () => void
}

const NavbarButton = (props: NavbarButtonProps) => {

    return (
        <StyledNavbarButton onClick={props.onClick} />
    )
}

export default NavbarButton
