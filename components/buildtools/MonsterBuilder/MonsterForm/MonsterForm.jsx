import { Statblock } from "../../../statblock/Statblock";

export const MonsterForm = ({ monster = {}, onAdd, onSave }) => {
  const [name, setName] = useState(monster.name || "");
  //   const []

  const handleChange = (e) => {
    setName(e.target.value);
    // TODO hook into the editMonster function from BuildContext
    // here to get real-time updates and then remove the button below?
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMonster = { name }; // other attributes from form here
    onFormSubmit(newMonster); // pass back a monster with all fields
    setName("");
  };

  const handleSave = (e) => {};

  const handleAppend = (e) => {};

  return (
    <form>
      <Statblock />
      {/* <FormInput
        label="Name"
        value={name}
        handleChange={handleChange}
      ></FormInput> */}
      <button
        className="block bg-green-600 rounded-md py-2 px-4 my-2 mx-auto"
        onClick={handleSubmit}
      >
        Add
      </button>
    </form>
  );
};
