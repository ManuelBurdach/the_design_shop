import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <section>
        <div>
          <h2>The Design Shop</h2>
          <p>
            Carefully curated online design store,
            <br /> founded and dsigned by <strong>Ruby Bacanovic.</strong>
          </p>
        </div>
        <div>
          <h2>Contact</h2>
          <a href="mailto:info@designshop.de">Email us</a>
          <a href="#a">Work with us</a>
        </div>
        <div>
          <h2>Newsletter</h2>
          <a href="#b">
            Click here to <strong>subscribe.</strong>
          </a>
          <p>Don't worry. We hate spam to.</p>
        </div>
        <div>
          <h2>Find Us Here</h2>
          <a href="#facebook">Facebook</a>
          <a href="#Twitter">Twitter</a>
          <a href="#Insta">Insta</a>
        </div>
      </section>
      <p>&copy; 2023 The Design Shop - The Design Blog</p>
    </footer>
  );
};

export default Footer;
