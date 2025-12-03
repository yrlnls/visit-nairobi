import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ThingsToDo from './components/ThingsToDo';
import TopAttractions from './components/TopAttractions';
import Safaris from './components/Safaris';
import AdventureActivities from './components/AdventureActivities';
import WhereToGo from './components/WhereToGo';
import Events from './components/Events';
import ListYourBusiness from './components/ListYourBusiness';
import News from './components/News';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/things-to-do" element={<ThingsToDo />} />
          <Route path="/top-attractions" element={<TopAttractions />} />
          <Route path="/safaris" element={<Safaris />} />
          <Route path="/adventure-activities" element={<AdventureActivities />} />
          <Route path="/where-to-go" element={<WhereToGo />} />
          <Route path="/events" element={<Events />} />
          <Route path="/list-business" element={<ListYourBusiness />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
