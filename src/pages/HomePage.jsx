import Navbar from "../components/Navbar/Navbar.jsx";
import Hero from "../components/Hero/Hero.jsx";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre.jsx";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo.jsx";
import Membership from "../components/Membership/Membership.jsx";
import OurSchool from "../components/OurSchool/OurSchool.jsx";
import SupportingSudan from "../components/SupportingSudan/SupportingSudan.jsx";
import ShowCaseEvents from "../components/EventsShowcase/ShowCaseEvents.jsx";
// import OurCommunity from "../components/OurCommunity/OurCommunity.jsx";
import Leadership from "../components/Leadership/Leadership.jsx";
import Footer from "../components/Footer/footer.jsx";

const HomePage = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <OurSchool />
      <SupportingSudan />
      <ShowCaseEvents />
      <Membership />
      {/* <OurCommunity /> */}
      <Leadership />
      <Footer />
    </section>
  );
};

export default HomePage;
