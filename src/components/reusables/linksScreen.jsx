import Footer from "../common/footer";
import Header from "../common/header";

const LinkScreen = ({ children }) => {
  return (
    <div className="link-screen__container">
      <Header />
        {children}
      <Footer />
    </div>
  );
}

export default LinkScreen;
