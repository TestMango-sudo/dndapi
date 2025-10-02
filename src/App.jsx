import { useState } from 'react'
import Header from './header';
import Fixedmenu from './Fixedmenu';
import Getspells from './Getspells';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router"
import GetMonsters from './GetMonsters';
import selectedMonster from './components/GetMonster';
import getSpell from './components/GetSpell';
// import { getMonsterImage } from './api';
// https://5e-bits.github.io/docs/tutorials/advanced/react-spell-cards


function App() {
  const [count, setCount] = useState(0)
  const [spellsdata, setSpellsData] = useState([]);


return (
  <>
    <Header/>
      <Fixedmenu/>
      <div>
      <Routes>
        <Route path="/spells" Component={Getspells}/>
        <Route path="/monsters" Component={GetMonsters} />
        <Route path="/monsters/:id" Component={selectedMonster}/>
        <Route path="/spells/:id" Component={getSpell}/>
      </Routes>
      
      </div>
      </>
  )
}

export default App
