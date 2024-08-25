interface Person {
  id: number;
  name: string;
  age: number;
  born: string;
  died: string;
  description: string;
}

interface PersonProps {
  personData: Person[];
}

export const PersonCard: React.FC<PersonProps> = ({ personData }) => {
  return (
    <div className="max-w-4xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {personData.map((person) => (
        <div
          key={person.id}
          className="bg-gray-800 text-white p-4 rounded-lg shadow-lg flex items-center"
        >
          <div className="w-32 h-32 bg-gray-700 flex justify-center items-center rounded-lg">
            <span className="text-gray-400 text-xl">Photo</span>
          </div>
          <div className="ml-6">
            <h2 className="text-2xl font-bold">{person.name}</h2>
            <p className="text-lg">Aged: {person.age}</p>
            <p className="mt-2">Born: {person.born}</p>
            <p>Died: {person.died}</p>
            <p className="mt-4 text-sm text-gray-400">{person.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
