import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ThingsToDo from './components/ThingsToDo';
import WhereToGo from './components/WhereToGo';
import Events from './components/Events';
import ListYourBusiness from './components/ListYourBusiness';
import News from './components/News';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/things-to-do" element={<ThingsToDo />} />
      <Route path="/where-to-go" element={<WhereToGo />} />
      <Route path="/events" element={<Events />} />
      <Route path="/list-business" element={<ListYourBusiness />} />
      <Route path="/news" element={<News />} />
    </Routes>
  );
}

export default App;
