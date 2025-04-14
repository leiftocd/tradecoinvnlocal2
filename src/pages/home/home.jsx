import Banner from './banner/banner.jsx';
import Benefit from './benefit/benefit.jsx';
import Market from './market/market.jsx';
import Partner from './partner/partner.jsx';
import Footer from './footer/footer.jsx';

function Home() {
  
  return (
    <>
      {/* Page components */}
      <Banner />
      <Benefit />
      <Market />
      <Partner />
      <Footer />
    </>
  );
}

export default Home;