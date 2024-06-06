import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import ProgramPromotion from "@components/promotions/program-promotion";
import ClassPageMain from "@components/classes/class-page-main";
import AboutTestimonial from "@components/testimonials/about-testimonial";
import HeaderFour from "@layout/headers/headerFour";
import { useSelector } from "react-redux";

export default function Classes() {
  const { languageLabel } = useSelector((state) => state.language);
  const labels = languageLabel?.page ?? {};
  return (
    <Wrapper>
      <SEO pageTitle={"Classes"} />
      <HeaderFour />
      {/* <Breadcrumb title={labels.classes} subTitle={labels.classes} /> */}
      <ClassPageMain />
      {/* <AboutTestimonial /> */}
      {/* <ProgramPromotion /> */}
      <HomeNewsletter />
      <Footer />
    </Wrapper>
  );
}
