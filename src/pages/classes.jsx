import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import ProgramPromotion from "@components/promotions/program-promotion";
import ClassPageMain from "@components/classes/class-page-main";
import AboutTestimonial from "@components/testimonials/about-testimonial";
import HeaderFour from "@layout/headers/headerFour";


export default function Classes() {
  return (
    <Wrapper>
      <SEO pageTitle={'Classes'} />
      <HeaderFour />
      <Breadcrumb title="Classes" subTitle="Classes" />
      <ClassPageMain />
      <AboutTestimonial />
      <ProgramPromotion />
      <HomeNewsletter />
      <Footer/>
    </Wrapper>
  )
}