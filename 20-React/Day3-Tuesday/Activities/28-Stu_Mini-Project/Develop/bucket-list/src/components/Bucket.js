import React, { useState } from 'react';
import BucketForm from './BucketForm';

function Bucket({ bucket, completeBucketItem, removeBucketItem, editBucketItem }) {
  const [edit, setEdit] = useState({
    id: null,
    text: '',
    eagerness: '',
  });

  console.log(bucket);

  const submitUpdate = (value) => {

    // TODO: invoke the editBucketItem method passing in the id of the `edit` object and the item from the form

    // TODO: Set the key:value pairs in the `edit` object back to their empty values

  };

  // If the user is attempting to edit an item, render the bucket form with the edit variable passed as a prop
  if (edit.id) {
    return <BucketForm edit={edit} onSubmit={submitUpdate} />;
  }

  return bucket.map(item => {
    // TODO: Add a className of `bucket-row complete ${item.eagerness}` for completed items, and `bucket-row ${item.eagerness}` for non-completed items
    // HINT: How can we use template literals and ternary operators to achieve this?
    // TODO: Add a key attribute set to the item ID
    
    return (
      <div key={} className={}>
        {/* TODO: Add an onClick event that invokes the `completeBucketItem` method passing the item id as a argument */}
        <div onClick={}>
            {/* TODO: Add the item text here */}
        </div>
        <div className="icons">
          {/* TODO: Add an onClick event update the `edit` object with the `id`, `value`, and `eagerness` properties */}
          <p onClick={}> ✏️</p>
          {/* TODO: Add an onClick event that will invoke the removeBucketItem method passing in the `item.id` */}
          <p onClick={}> 🗑️</p>
        </div>
      </div>
    );
  });
}

export default Bucket;
