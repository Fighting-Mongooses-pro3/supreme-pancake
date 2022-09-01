import { MonsterForm } from "./MonsterForm/MonsterForm";

export const MonsterBuilder = (props) => {
  const { monsters, addMonster, editMonster } = useContext(BuildContext);

  const saveMonster = (monster) => {};

  return (
    <div>
      {/* <h1>MonsterBuilder</h1>
      <ul>
        <h2 className="underline">Current monsters</h2>
        {monsters.map((monster) => (
          <li key={monster.id}>
            <p>Name is {monster.name}</p>
            <MonsterForm
              monster={monster}
              onFormSubmit={(updatedMonster) =>
                editMonster({ ...updatedMonster, id: monster.id })
              }
            />
          </li>
        ))}
      </ul> */}

      <h2 className="underline">Add new monster</h2>
      <label htmlFor="monster-select">Choose a monster:</label>
      <select name="monster-select" id="monster-select"></select>

      <MonsterForm
        onSave={(monster) => saveMonster(monster)}
        onAdd={(monster) => addMonster(monster)}
      />
    </div>
  );
};
