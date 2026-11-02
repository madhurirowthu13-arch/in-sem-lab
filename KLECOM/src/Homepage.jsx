
import Footer from "./Footer.jsx";
import Services from "./Services.jsx";
import Offers from "./Offers.jsx";
import Products from "./Products.jsx";
import ProductTitle from "./ProductTitle.jsx";
import Banner from "./Banner.jsx";
import Categories from "./Categories.jsx";
import Header from "./Header.jsx";

function Homepage() {
  return (
    <div>
      <Header />
      <Categories />
      <Banner />
      <ProductTitle />
      <Products />
      <Offers />
      <Services />
      <Footer />
    </div>
  );
}

export default Homepage;