import Slaider from "../component/Slaider";
import Notice from "../component/Notice";
import Services from "../component/Services";

function Home() {
  return (
    <header>
      <Slaider/>
      <Services/>
      <Notice/>
    </header>
  );
}

export default Home;
