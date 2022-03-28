import Container from "../Container/Container";

const Footer = () => {
  return (
    <footer>
      <Container>© {new Date().getFullYear()} Arteveldehogeschool</Container>
    </footer>
  );
};

export default Footer;
