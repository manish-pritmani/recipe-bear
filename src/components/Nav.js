import React from  'react';
import Container from './reuseComponent/Container';
import Logo from  './Logo';

const Nav = () => {
    return (
//    notice there is no className below here in navigation.
        <nav>
            <Container>
                <Logo/>
            </Container>
        </nav>
    )
}

export default Nav;