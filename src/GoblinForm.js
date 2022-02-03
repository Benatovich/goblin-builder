import React from 'react';

export default function GoblinForm(props) {
  function handleSubmit(e) {
    e.preventDefault();

    const newGoblin = {
      name: props.goblinFormName,
      hp: props.goblinFormHP,
      color: props.goblinFormColor,
    };

    props.submitGoblin(newGoblin);

    props.setGoblinFormName('');
    props.setGoblinFormHP('');
    props.setGoblinFormColor('');
  }

  return (
    <div className='goblin-form-container quarter'>
      <form className='goblin-form' onSubmit={handleSubmit}>
        <label>
            Name
          <input required value={props.goblinFormName} onChange={e => props.setGoblinFormName(e.target.value)}/>
        </label>
        <label>
            HP
          <input required type="number" value={props.goblinFormHP} onChange={e => props.setGoblinFormHP(e.target.value)}/>
        </label>
        <label>
            Color
          <select required value={props.goblinFormColor} onChange={e => props.setGoblinFormColor(e.target.value)}>
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
