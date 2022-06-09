import FooterContainer from "./FooterStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="decoration-line"></div>
      <span>You're in good hands</span>
      <p>
        Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne
        ferae quidem se repellere, idque instituit docere sic: omne animal,
        simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri,
        altera occulta quaedam et voluptatem accusantium doloremque.
      </p>
      <div className="company-logo">
        <img src="/images/icons8-cebada-100.png" alt="cebada" />
        <h5>Rustik</h5>
      </div>
      <div className="social-media">
        <i className="insta icon">
          <img src="/images/instagram.png" alt="" />
        </i>
        <i className="face icon">
          <img src="/images/facebook.png" alt="" />
        </i>
        <i className="whatsapp icon">
          <img src="/images/whatsapp.png" alt="" />
        </i>
      </div>
    </FooterContainer>
  );
};

export default Footer;
