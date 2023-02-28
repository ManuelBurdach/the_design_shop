//CSS import
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <section>
        <div>
          <h2>The Design Shop</h2>
          <p>
            Carefully curated online design store,
            <br /> founded and designed by <strong>Ruby Bacanovic.</strong>
          </p>
        </div>
        <div>
          <h2>Contact</h2>
          <a href="mailto:info@designshop.de">Email us</a>
          <a href="#workwithus">Work with us</a>
        </div>
        <div>
          <h2>Newsletter</h2>
          <a href="#subscribe">
            Click here to <strong>subscribe.</strong>
          </a>
          <p>Don't worry. We hate spam to.</p>
        </div>
        <div>
          <h2>Find Us Here</h2>
          <a href="http://www.facebook.de" target={"_blank"} rel={"noreferrer"}>
            Facebook
          </a>
          <a href="http://www.twitter.de" target={"_blank"} rel={"noreferrer"}>
            Twitter
          </a>
          <a href="https://www.instagram.com" target={"_blank"} rel={"noreferrer"}>
            Instagram
          </a>
        </div>
      </section>
      <p>&copy; 2023 The Design Shop - The Design Blog</p>
    </footer>
  );
};

export default Footer;
