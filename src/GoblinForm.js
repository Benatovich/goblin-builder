import React from 'react';

export default function GoblinForm({ setGoblinFormName, goblinFormName, setGoblinFormHP, goblinFormHP, setGoblinFormColor, goblinFormColor, submitGoblin }) {
  function handleSubmit(e) {
    e.preventDefault();

    const newGoblin = {
      name: goblinFormName,
      hp: goblinFormHP,
      color: goblinFormColor,
    };

    submitGoblin(newGoblin);

    setGoblinFormName('');
    setGoblinFormHP('');
    setGoblinFormColor('');
  }

  return (
    <div className='goblin-form-container quarter'>
      <form className='goblin-form' onSubmit={handleSubmit}>
        <label>
            Name
          <input required value={goblinFormName} onChange={e => setGoblinFormName(e.target.value)}/>
        </label>
        <label>
            HP
          <input required type="number" value={goblinFormHP} onChange={e => setGoblinFormHP(e.target.value)}/>
        </label>
        <label>
            Color
          <select required value={goblinFormColor} onChange={e => setGoblinFormColor(e.target.value)}>
            <option value="lightgreen">Green</option>
            <option value="lightblue">Blue</option>
            <option value="pink">Pink</option>
            <option value="purple">Purple</option>
            <option value="orange">Orange</option>
          </select>
        </label>
        <button>Add Goblin</button>

      </form>  
    </div>
  );
}
