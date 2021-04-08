import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "../../components/Button/Button";
import { useHistory } from "react-router-dom";
import "./Login.css";


export default function Intro() {

    const [data, setData] = useState({
      name: "",
      surname: "",
    });
  
    let history = useHistory();
  
    const onChange = () => {
      localStorage.setItem("name", data.name);
      localStorage.setItem("surname", data.surname);
      history.push("/todo");
    };
    return (
        <div className="container">
            <div className="kart">
                <div className="card  w-100 modal-dialog-centered align-items-md-center border-success ">
                    <div class="card-header">
                        <span className="title"><h2>ADINIZI VE SOYADINIZI GİRİN</h2></span>
                    </div>
                    <div class="card-body">
                        <form className="root">
                            <TextField
                                onChange={(e) => {
                                    setData({
                                    ...data,
                                    name: e.target.value,
                                    });
                                }}
                                id="standard-basic"
                                label="İsim"
                            />
                            <p>
                            <TextField
                                onChange={(e) => {
                                    setData({
                                    ...data,
                                    surname: e.target.value,
                                    });
                                }}
                                id="standard-basic"
                                label="Soyisim"
                            />
                            </p>
                        </form>
                    </div>
                    <div class="card-footer">
                        <Button
                            onClick={() => {
                            onChange();
                            }}
                            className="button"
                            variant="outlined" >
                        Login
                        </Button>
                    </div>
                
                </div>
            
             </div>
        
                            
        </div>
        
    );
}  