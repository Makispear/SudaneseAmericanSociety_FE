import Navbar from "../components/Navbar/Navbar.jsx";
import Hero from "../components/Hero/Hero.jsx";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre.jsx";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo.jsx";
// import OurCommunity from "../components/OurCommunity/OurCommunity.jsx";
import Leadership from "../components/Leadership/Leadership.jsx";

const HomePage = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      {/* <OurCommunity /> */}
      <Leadership />
    </section>
  );
};

export default HomePage;
