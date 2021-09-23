import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade top={isDesktop} bottom={isMobile} duration={800} delay={300} distance="400px">
          <h1 className="hero-title">
            {/* {title || 'Hi, my name is'}{' '} */}
            <span className="text-color-main">{name || 'Your Name'}</span>
            <br />
          </h1>
          <p>{subtitle || "I'm the Unknown Developer."}</p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
