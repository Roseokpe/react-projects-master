import React from 'react';

const List = ({people}) /*people's promps */ => {
  return (
    <>
    {people.map((person) => { /* distructuring */
      const {id, name, age, image} = person;
      return <article key={id} className='person'>
        <img src={image} alt={name}/>
        <div>
          <h4>{name}</h4>
          <p>{age}years </p>
        </div>
      </article>


    })}
      
    </>
  );
};

export default List;