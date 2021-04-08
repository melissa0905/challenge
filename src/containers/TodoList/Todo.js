import React, { useEffect, useState } from "react";
import user from "../../assets/avatar.png";
import Card from "../../components/card/Card";
import "./style.css";


export default function Todo(){

  const [cards, setCards] = useState([]);

  const [data, setData] = useState({
    name: "",
    surname: "",
  });

  useEffect(() => {
    let name = localStorage.getItem("name", data.name);
    let surname = localStorage.getItem("surname", data.surname);
    setData({
      name: name,
      surname: surname,
    });
  }, []);


    return (
        <div className="cont">
        <div className="left_cont">
            <img className="image" src={user}></img>
            <div className="txt">
              <p> {"User"+":"+data.name + " " + data.surname}</p> 
            </div>
        </div>
        <div className="right_cont">
            {cards.map((item, index) => {
            return <Card card={item} type="card"></Card>;
            })}
            <Card
            cardList={(val) => {
                setCards(val);
            }}
            type="createCard"
            ></Card>
        </div>
        </div>
    );



}