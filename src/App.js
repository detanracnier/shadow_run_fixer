import React from 'react';
import './App.css';
import wallpaper from './images/wallpaper.jpg';
import RangedCombatAssist from './components/rangedCombatAssist/rangedCombatAssist';
import MeleeCombatAssist from './components/meleeCombatAssist/meleeCombatAssist';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const Home = () => {
  return <div className="app_wallpaper_wrapper"><img className="app_wallpaper" alt="" src={wallpaper} /></div>;
};

const linkStyle = {
  color: '#ffffff',
};

function App() {
  return (
    <Router>
      <div>
          <nav>
              <ul>
                  <li className="app_link">
                      <Link style={linkStyle} to='/'>Home</Link>
                  </li>
                  <li className="app_link">
                      <Link style={linkStyle} to='/ranged_combat_assist'>Ranged Combat Assist</Link>
                  </li>
                  <li className="app_link">
                      <Link style={linkStyle} to='/melee_combat_assist'>Melee Combat Assist</Link>
                  </li>
              </ul>
          </nav>

          <Route path='/' exact component={Home} />
          <Route path='/ranged_combat_assist' component={RangedCombatAssist} />
          <Route path='/melee_combat_assist' component={MeleeCombatAssist} />
      </div>
    </Router>
  );
}

export default App;
