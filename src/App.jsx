import { useEffect } from 'react';
import './App.css'
import ParticleEffect from './Components/ParticleEffect';
import { BrowserRouter as Router, Route, Routes, useLocation  } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import NavBar from './Components/NavBar';
import Events from './Pages/Events';
import About from './Pages/About';
import Sponsors from './Pages/Sponsors';
import Team from './Pages/Team';
import House from './Pages/House';
import Adzap from './Pages/Adzap';
import Adaptune from './Pages/Adaptune';
import Bgmi from './Pages/Bgmi';
import ChannelSurfing from './Pages/ChannelSurfing';
import Connections from './Pages/Connections';
import Fifa from './Pages/Fifa';
import FlamelessCooking from './Pages/FlamelessCooking';
import GroupDance from './Pages/GroupDance';
import IPLAuctions from './Pages/IPLAuctions';
import IncredibleSrm from './Pages/IncredibleSrm';
import LogoDesigning from './Pages/LogoDesigning';
import MemeCreation from './Pages/MemeCreation';
import Mime from './Pages/Mime';
import MrMsRampus from './Pages/MrMsRampus';
import MusicBand from './Pages/MusicBand';
import Photography from './Pages/Photography';
import ReelsMaking from './Pages/ReelsMaking';
import ShortFilm from './Pages/ShortFilm';
import Singing from './Pages/Singing';
import TreasureHunt from './Pages/TreasureHunt';
import StumbleGuys from './Pages/StumbleGuys';
import Valorent from './Pages/Valorent';
import Agni from './Pages/Agni';
import Akash from './Pages/Akash';
import Prithvi from './Pages/Prithvi';
import Thrishul from './Pages/Thrishul';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <Router>
      <ParticleEffect />
      <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" index element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/events" element={<Events />}/>
          <Route path="/team" element={<Team />}/>
          <Route path="/house" element={<House />}/>
          <Route path="/sponsors" element={<Sponsors />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/adzap" element={<Adzap />} />
          <Route path="/agni" element={<Agni />} />
          <Route path="/akash" element={<Akash />} />
          <Route path="/prithvi" element={<Prithvi />} />
          <Route path="/thrishul" element={<Thrishul />} />
          <Route path="/connections" element={<Connections />} />
          <Route path="/flameless-cooking" element={<FlamelessCooking />} />
          <Route path="/incredible-srm" element={<IncredibleSrm />} />
          <Route path="/treasure-hunt" element={<TreasureHunt />} />
          <Route path="/ipl-auctions" element={<IPLAuctions />} />
          <Route path="/group-dance" element={<GroupDance />} />
          <Route path="/adaptune" element={<Adaptune />} />
          <Route path="/singing" element={<Singing />} />
          <Route path="/mime" element={<Mime />} />
          <Route path="/channel-surfing" element={<ChannelSurfing />} />
          <Route path="/mr-ms-rampus" element={<MrMsRampus />} />
          <Route path="/music-band" element={<MusicBand />} />
          <Route path="/meme-creation" element={<MemeCreation />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/short-film" element={<ShortFilm />} />
          <Route path="/logo-designing" element={<LogoDesigning />} />
          <Route path="/reels-making" element={<ReelsMaking />} />
          <Route path="/bgmi" element={<Bgmi />} />
          <Route path="/fifa" element={<Fifa />} />
          <Route path="/valorent" element={<Valorent />} />
          <Route path="/stumble-guys" element={<StumbleGuys />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
