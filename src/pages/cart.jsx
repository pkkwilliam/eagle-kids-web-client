import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import CartMain from "@components/cart/cartMain";
import HeaderFour from "@layout/headers/headerFour";

export default function Cart() {
  return (
    <Wrapper>
      <SEO pageTitle={"Cart"} />
      <HeaderFour />
      <Breadcrumb title="Cart" subTitle="Cart" />
      <CartMain />
      <HomeNewsletter />
      <Footer />
    </Wrapper>
  );
}
