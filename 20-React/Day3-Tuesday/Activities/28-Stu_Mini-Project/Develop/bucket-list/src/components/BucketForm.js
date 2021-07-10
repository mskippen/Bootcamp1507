import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// TODO: Use this array in the dropdowns below
const eagernessLevels = [
  {
    id: 1,
    value: 'high',
    text: 'Must do' 
  },
  {
    id: 2,
    value: 'medium',
    text: 'Want to do' 
  },
  {
    id: 3,
    value: 'low',
    text: 'Take it or leave it' 
  }
];


function BucketForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.text : '');
  const [eagerness, setEagerness] = useState(props.edit ? props.edit.eagerness : '');

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: props.edit ? props.edit.id : uuidv4(),
      text: input,
      eagerness: eagerness || 'low',
    });

    setInput('');
    setEagerness('');
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // First we check to see if "edit" prop exists. If not, we render the normal form
  // If the prop "edit" exists, we know to render the update form instead
  return !props.edit ? (
    <div>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add to your bucket list"
          value={input}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${eagerness}`}>
            {eagerness || 'Priority'}
          </button>
          <div className="dropdown-content">
            {/* TODO: for each item in the eagernessLevels array add a <p> tag with an onClick event that sets the eagerness to the "value" of the eagerness level */}
            {/* <p onClick={}>{level.text}</p> */}
          </div>
        </div>
        <button className="bucket-button">Add bucket list item</button>
      </form>
    </div>
  ) : (
    <div>
      <h3>Update entry: {props.edit.text}</h3>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={props.edit.text}
          value={input}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${eagerness}`}>
            {eagerness || 'Priority'}
          </button>
          <div className="dropdown-content">
            {/* TODO: for each item in the eagernessLevels array add a <p> tag with an onClick event that sets the eagerness to the "value" of the eagerness level */}
            {/* <p onClick={}>{level.text}</p> */}
          </div>
        </div>
        <button className="bucket-button">Update</button>
      </form>
    </div>
  );
}

export default BucketForm;
