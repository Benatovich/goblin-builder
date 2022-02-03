import { useState } from 'react';
import './App.css';
import GoblinForm from './GoblinForm';
import GoblinList from './GoblinList';
import Goblin from './Goblin';
import { useGoblinForm } from './useGoblinForm';

function App() {
  const [allGoblins, setAllGoblins] = useState([]);
  const [filteredGoblins, setFilteredGoblins] = useState([]);
  const {
    goblinFormName, setGoblinFormName,
    goblinFormHP, setGoblinFormHP,
    goblinFormColor, setGoblinFormColor,
  } = useGoblinForm();

  function submitGoblin(e) {
    e.preventDefault();
    
    const newGoblin = {
      id: Math.ceil(Math.random() * 999999),
      name: goblinFormName,
      hp: goblinFormHP,
      color: goblinFormColor
    };

    setAllGoblins([...allGoblins, newGoblin]);

    setGoblinFormName('');
    setGoblinFormHP('');
    setGoblinFormColor('');
  }

  function handleDeleteGoblin(id) {
    const goblinIndex = allGoblins.findIndex(goblin => goblin.id === id);

    allGoblins.splice(goblinIndex, 1);

    setAllGoblins([...allGoblins]);
  }

  function handleFilterGoblins(search) {
    const fewerGoblins = allGoblins.filter(goblin => goblin.name.includes(search));

    search ? setFilteredGoblins(fewerGoblins) : setFilteredGoblins(allGoblins);
  }


  return (
    <div className="App">
      <div className='current-goblin quarter'>
        <Goblin goblin={{
          name: goblinFormName,
          hp: goblinFormHP,
          color: goblinFormColor
        }}/>
      </div>
      <div className='goblin-filter quarter'>
        Filter Goblins
        <input onChange={(e) => handleFilterGoblins(e.target.value)} />
      </div>
      <GoblinForm 
        submitGoblin={submitGoblin}
        goblinFormName={goblinFormName}
        setGoblinFormName={setGoblinFormName}
        goblinFormColor={goblinFormColor}
        setGoblinFormColor={setGoblinFormColor}
        goblinFormHP={goblinFormHP}
        setGoblinFormHP={setGoblinFormHP}
      />
      <GoblinList 
        goblins={[filteredGoblins.length ? filteredGoblins : allGoblins]} 
        handleDeleteGoblin={handleDeleteGoblin} // note that the goblin list has access to the ability to delete
      />
    </div>
  );
}

export default App;
