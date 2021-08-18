import React, {useState} from 'react';
import './App.css';
import {Buttons} from "./components/Buttons";
import style from "./components/Buttons.module.css";

function App() {
    const [buttons, setButtons] = useState<Array<button>>([
        {id: 1, value: 1},
        {id: 2, value: 2},
        {id: 3, value: 3}]
    )
    const [showButtons, setShowButtons] = useState<boolean>(false)

    const changeValue = (value: number) => {
        const newArray = [...buttons]
        newArray[0].value = value
        setButtons(newArray)
    }

    const deleteButton = (id: number) => {
        const deleteButton = buttons.filter((el) => el.id !== id)
        setButtons(deleteButton)
    }

    const clickButton = (value: number, id: number) => {
        changeValue(value)
        deleteButton(id)
    }

    const clickShowButtons = () => {
        setShowButtons(true)
    }


    return (
        <div className="app">
            {showButtons
                ?
                <div className="buttonsContainer">
                    <Buttons buttons={buttons} clickButton={clickButton}/>
                </div>
                :
                <div className="buttonsContainer">
                    <button className={style.button} onClick={clickShowButtons}>1</button>
                </div>
            }
        </div>
    );
}

export default App;


//type
export type button = {
    id: number,
    value: number
}
