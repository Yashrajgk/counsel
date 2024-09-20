import Header from "@/app/components/marketing/header";
import Banner from "@/app/components/marketing/banner";
import Footer from "@/app/components/marketing/footer";
import Animation from "@/app/components/marketing/animation";
import Testimonial from "@/app/components/marketing/testimonial";
import Joinus from "@/app/components/marketing/joinus";

function HomePage() {
  return (
    <div>
      <div className={"h-screen"}>
        <Header />
        <Banner />
        <Animation />
        <Testimonial />
        <Joinus />
      
      <Footer />
      </div>
    </div>
  );
}

export default HomePage;
