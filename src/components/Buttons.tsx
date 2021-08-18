import React from "react";
import {button} from "../App";
import style from "./Buttons.module.css"

export const Buttons = (props: buttonsPropsType) => {

    return (
        <div>
            {props.buttons.map(el => {
                    return <div key={el.id}>
                        <button
                            className={style.button}
                            onClick={() => props.clickButton(el.value, el.id)}
                        >
                            {el.value}
                        </button>
                    </div>
                }
            )}
        </div>
    )
}


//type
type buttonsPropsType = {
    buttons: Array<button>
    clickButton: (value: number, id: number) => void
}

