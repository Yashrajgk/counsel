import Header from "@/app/components/marketing/header";
import Banner from "@/app/components/marketing/banner";
import Footer from "@/app/components/marketing/footer";

function HomePage() {
  return (
    <div>
      <div className={"h-screen"}>
        <Header />
        <Banner />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
