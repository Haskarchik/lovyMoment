import React, { useEffect, useState, useRef } from "react";
import "../../styles/Admin.css";
import { saveAs } from "file-saver";
import { db } from "../../constants/firebase";
import { onValue, ref } from "firebase/database";

const Admin = () => {
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [descriptions, setDescriptions] = useState("");
  const [varning, setVarning] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [complactation, setComplactation] = useState("");
  const [complactationArray, setComplactationArray] = useState([]);
  const [albom, setAlbom] = useState("");
  const [albomArray, setAlbomArray] = useState([]);
  const [quantityvarName, setQuantityvarName] = useState("");
  const [quantityvarCount, setQuantityvarCount] = useState("");
  const [quantityvarArray, setQuantityvarArray] = useState([]);
  const tags = useRef([]);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [pass, setPass] = useState();
  const content = useRef([]);
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();

      if (isInitialRender) {
        setIsInitialRender(false);
        setTodos([]);
      }
      if (data !== null && data !== 0) {
        Object.values(data).map((todo) => {
          if (isInitialRender) {
            setIsInitialRender(false);
            setTodos((oldArray) => [...oldArray, todo]);
          }
        });
      }
    });
  });

 

  function pushProduct() {
    todos.push({
      albom: albomArray,
      complactation: complactationArray,
      descriptions: descriptions,
      id: id,
      img: image,
      name: name,
      price: price,
      quantityvar: quantityvarArray,
      tags: tags.current,
      varning: varning,
      video: video,
    });
    setAlbomArray([]);
    setAlbom("");
    setComplactation("");
    setComplactationArray([]);
    setDescriptions("");
    setImage("");
    setName("");
    setPrice("");
    setQuantityvarCount("");
    setQuantityvarName("");
    setQuantityvarArray([]);
    setVarning("");
    setVideo("");
    tags.current = [];
    setId("");
  }

  function generate() {
    const blob = new Blob([JSON.stringify(todos)], {
      type: "application/json;charset=" + document.characterSet,
    });
    saveAs(blob, "data");
  }

  function tagAdd(e) {
    if (!tags.current.includes(e)) {
      tags.current.push(e);
    }
  }

  function tagRemove(e) {
    for (let i = 0, len = tags.current.length; i < len; i++) {
      if (tags.current[i] === e) {
        tags.current.splice(i, 1);
        break;
      }
    }

  }

  function addComplactation() {
    setComplactationArray((olldArray) => [...olldArray, complactation]);

  }
  function removeComplactation() {
    for (let i = 0, len = complactationArray.length; i < len; i++) {
      if (complactationArray[i] === complactation) {
        complactationArray.splice(i, 1);

        break;
      }

    }
  }
  function addAlbom() {
    setAlbomArray((olldArray) => [...olldArray, albom]);
  }
  function removeAlbom() {
    for (let i = 0, len = albomArray.length; i < len; i++) {
      if (albomArray[i] === albom) {
        albomArray.splice(i, 1);

        break;
      }
  
    }
  }
  function createQuantity() {
    let element = { [quantityvarName]: quantityvarCount };
    setQuantityvarArray((olldArray) => [...olldArray, element]);
    
  }
content.current=(
    <form>
      <input
        type="text"
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.currentTarget.value)}
      ></input>
      <input
        type="text"
        placeholder="Main Image"
        value={image}
        onChange={(e) => setImage(e.currentTarget.value)}
      ></input>
      <input
        type="text"
        placeholder="Albom"
        value={albom}
        onChange={(e) => setAlbom(e.currentTarget.value)}
      ></input>
      <div>{albomArray.join()}</div>
      <button type="button" onClick={addAlbom}>
        Add
      </button>
      <button type="button" onClick={removeAlbom}>
        Remove
      </button>
      <input
        type="text"
        placeholder="Video"
        value={video}
        onChange={(e) => setVideo(e.currentTarget.value)}
      ></input>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      ></input>
      <input
        type="text"
        placeholder="QuantityvarName"
        value={quantityvarName}
        onChange={(e) => setQuantityvarName(e.currentTarget.value)}
      ></input>
      <input
        type="text"
        placeholder="QuantityvarCount"
        value={quantityvarCount}
        onChange={(e) => setQuantityvarCount(e.currentTarget.value)}
      ></input>
 
      <button type="button" onClick={createQuantity}>
        Add
      </button>
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.currentTarget.value)}
      ></input>
      <input
        type="text"
        placeholder="Descriptions"
        value={descriptions}
        onChange={(e) => setDescriptions(e.currentTarget.value)}
      ></input>
      <input
        type="text"
        placeholder="Varning"
        value={varning}
        onChange={(e) => setVarning(e.currentTarget.value)}
      ></input>
      <input
        type="text"
        placeholder="Complactation"
        value={complactation}
        onChange={(e) => setComplactation(e.currentTarget.value)}
      ></input>
      <div>{complactationArray.join()}</div>
      <button type="button" onClick={addComplactation}>
        Add
      </button>
      <button type="button" onClick={removeComplactation}>
        Remove
      </button>
      <p>
        <input
          type="checkbox"
          value={"Corporate"}
          onChange={(e) =>
            e.target.checked
              ? tagAdd(e.currentTarget.value)
              : tagRemove(e.currentTarget.value)
          }
        ></input>
        <label>Corporate</label>
      </p>
      <p>
        <input
          type="checkbox"
          value={"Festival"}
          onChange={(e) =>
            e.target.checked
              ? tagAdd(e.currentTarget.value)
              : tagRemove(e.currentTarget.value)
          }
        ></input>
        <label>Festival</label>
      </p>
      <p>
        <input
          type="checkbox"
          value={"Child-party"}
          onChange={(e) =>
            e.target.checked
              ? tagAdd(e.currentTarget.value)
              : tagRemove(e.currentTarget.value)
          }
        ></input>
        <label>Child-party</label>
      </p>
      <p>
        <input
          type="checkbox"
          value={"Promotion"}
          onChange={(e) =>
            e.target.checked
              ? tagAdd(e.currentTarget.value)
              : tagRemove(e.currentTarget.value)
          }
        ></input>
        <label>Promotion</label>
      </p>
      <p>
        <input
          type="checkbox"
          value={"Trampoline"}
          onChange={(e) =>
            e.target.checked
              ? tagAdd(e.currentTarget.value)
              : tagRemove(e.currentTarget.value)
          }
        ></input>
        <label>Trampoline</label>
      </p>
      <p>
        <input
          type="checkbox"
          value={"Food"}
          onChange={(e) =>
            e.target.checked
              ? tagAdd(e.currentTarget.value)
              : tagRemove(e.currentTarget.value)
          }
        ></input>
        <label>Food</label>
      </p>
      <p>
        <input
          type="checkbox"
          value={"Carousel"}
          onChange={(e) =>
            e.target.checked
              ? tagAdd(e.currentTarget.value)
              : tagRemove(e.currentTarget.value)
          }
        ></input>
        <label>Carousel</label>
      </p>
      <p>
        <input
          type="checkbox"
          value={"MegaGame"}
          onChange={(e) =>
            e.target.checked
              ? tagAdd(e.currentTarget.value)
              : tagRemove(e.currentTarget.value)
          }
        ></input>
        <label>MegaGame</label>
      </p>
      <button onClick={generate}>Download</button>
      <button type="reset" onClick={pushProduct}>
        Push
      </button>
    </form>
  );
  return (
    <div className="Admin">
      <input
        type="password"
        placeholder="Pass"
        value={pass}
        onChange={(el) => setPass(el.target.value)}
      />
      {pass == "2930" ? ['Вірно, працюймо!', content.current ] : "Введіть вірний пароль"}
    </div>
  );
};

export default Admin;
