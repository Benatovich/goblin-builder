import React from 'react';
import Goblin from './Goblin';

export default function GoblinList(props) {
  return (
    <div className='goblin-list quarter'>
      {
        props.goblins.map(goblin => <Goblin
          key={goblin.id}
          goblin={goblin}
          handleDeleteGoblin={props.handleDeleteGoblin}
        />)
      }
    </div>
  );
}
