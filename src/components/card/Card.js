import React, { useState } from "react";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import { Checkbox, IconButton, Typography } from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import "./styles.css";


const CardComponent = ({ card, type, cardList }) => {

  const [category, setCategories] = useState("");
  const [input, setInput] = useState("");
  const [title, setTitle] = useState(null);
  const [cards, setCards] = useState([]);
  const [list, setList] = useState([""]);

  const handleChange = (index) => {};

  return type == "createCard" ? (
      <CardContent className="cardContent">
        <TextField
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          value={title}
          className="input"
          label="Project Title"
        />
        <TextField
          value={category}
          className="input"
          onChange={(event) => {
            setCategories(event.target.value);
          }}
          defaultValue={category}
          label="Category"
        />
        {list.map((element, i) => {
          return (
            <div className="inputWrapper">
              <TextField
                value={i == list.length - 1 ? input : list[i].title}
                className="input"
                onChange={(event) => {
                  setInput(event.target.value);
                }}
                
              />
              {i == list.length - 1 && (
                <IconButton
                  onClick={() => {
                    let temp = [...list];
                    temp.unshift({ title: input, checked: false });
                    setInput("");
                    setList(temp);
                  }}
                  aria-label="delete"
                  color="primary"
                >
                
                </IconButton>
              )}
            </div>
          );
        })}
        <Button
          onClick={() => {
            let temp = [...cards];
            temp.push({
              title: title,
              list: [...list],
              categories: category,
            });
            setCards(temp);
            setInput("");
            setTitle("");
            setList([""]);
            setCategories("");
            cardList(temp);
          }}
          variant="contained"
          color="primary"
          className="createButton"
        >
          SAVE
        </Button>
      </CardContent>
    ) : (
   
      <CardContent className="cardContent">
        <div className="checkboxWrapper">
          <TextField
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            value={card.title}
            className="input"
            label="Project Title"
          />
          <IconButton onClick={() => {}} aria-label="delete" color="secondary">
            <DeleteOutlined />
          </IconButton>
        </div>
        <TextField
          value={card.categories}
          className="input"
          onChange={(event) => {
            setCategories(event.target.value);
          }}
          label="Category"
        />
        {card.list.length > 0 &&
          card.list.map((item, index) => {
            return (
              index < card.list.length - 1 && (
                <div className="checkboxWrapper">
                  <Checkbox
                    checked={item.checked}
                    onChange={() => handleChange(index)}
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                  <Typography
                    className="title"
                    color="textSecondary"
                    gutterBottom
                  >
                    {item.title}
                  </Typography>
                  <IconButton
                    onClick={() => {}}
                    aria-label="delete"
                    color="#000"
                  >
                   <DeleteOutlined /> 
                  </IconButton>
                </div>
              )
            );
          })}
      </CardContent>
    
  );
};
export default CardComponent;