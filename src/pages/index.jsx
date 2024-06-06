import { Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import HomeAbout from "@components/abouts/home-about";
import HomeHero from "@components/heros/home-hero";
import HomeBanner from "@components/banners/home-banner";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import Footer from "@layout/footers/footer";
import HomeClass from "@components/classes/home-class";
import HomePromotion from "@components/promotions/home-promotion";
import HomeBlog from "@components/blogs/home-blog";
import HomeTestimonial from "@components/testimonials/home-testimonial";
import HomeTeacher from "@components/teachers/home-teacher";
import HomeProgram from "@components/programs/home-program";

export default function Home() {
  return (
    <Wrapper>
      <SEO pageTitle={"Home Main"} />
      <Header />
      <HomeHero />
      <HomeClass />
      {/* <HomePromotion /> */}
      {/* <HomeProgram/> */}
      {/* <HomeAbout /> */}
      <HomeBanner />
      {/* <HomeTeacher /> */}
      {/* <HomeTestimonial/> */}
      {/* <HomeBlog /> */}
      <HomeNewsletter />
      <Footer />
    </Wrapper>
  );
}
