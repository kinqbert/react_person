export const Person = ({ person }) => {
  let partnerString = '';

  if (person.isMarried) {
    if (person.sex === 'm') {
      partnerString = `${person.partnerName} is my wife`;
    } else {
      partnerString = `${person.partnerName} is my husband`;
    }
  } else {
    partnerString = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {person.age !== undefined && (
        <p className="Person__age">{`I am ${person.age}`}</p>
      )}
      <p className="Person__partner">{partnerString}</p>
    </section>
  );
};
