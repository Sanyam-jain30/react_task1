import React, { useState, useEffect } from "react";
import Header from "./Header";
import Text from "./Text";
import Input from "./Input";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(res => res.json())
    .then(json => {
        for(let i=0;i<10;i++){
          let temp = json[i];
          setList((preValues) => {
            return [
              ...preValues,
              { id: preValues.length + 1, title: temp.title }
            ];
          });
        }
    })
  }, []);

  function addnote(Takenote) {
    setList((preValues) => {
      return [
        ...preValues,
        { id: preValues.length + 1, title: Takenote }
      ];
    });
  }

  function deletenote(id) {
    setList((preValues) => {
      return preValues.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <Input addTheNote={addnote} />
      {list.map((item, index) => {
        return (
          <Text
            key={index}
            id={index}
            content={item.title}
            onDeleted={deletenote}
          />
        );
      })}
    </div>
  );
}

export default App;
