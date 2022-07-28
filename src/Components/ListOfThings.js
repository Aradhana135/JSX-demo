import React from "react";

const ListOfThings = () => {
  return (
    <>
      <Repeat numTimes={50}>
        {(index) => <div key={index}>This is item {index} in the list</div>}
      </Repeat>
    </>
  );
};

export default ListOfThings;

function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}
