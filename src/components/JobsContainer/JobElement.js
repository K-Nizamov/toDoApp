
import { useContext } from "react";
import ToDoContext from "../../context/ToDoContext";
import colorChange from "../../helpers/colorChange";
import { deleteFunctionHandler } from "../../helpers/deleteHandler";
import { editFuncionality } from "../../helpers/editFuncionality"

function JobElement(props) {

    const context = useContext(ToDoContext)

    let significanceText = props.significance

    let backgroundColorOfLiElement = colorChange(significanceText)

    let deleteFunction = () => { deleteFunctionHandler(context,props) }

    let editFunctionHandler = () => { editFuncionality(context,props) }

    return (
        <>
            <div className="li-wrapper" style={backgroundColorOfLiElement}>
                <li className="li-style">{props.name}</li>
                <li className="li-style">{props.significance}</li>
                <li className="li-style">
                    <button className="record-section-btn" onClick={editFunctionHandler}>Edit</button>
                    <button className="record-section-btn" onClick={deleteFunction}>Delete</button>
                </li>
            </div>
        </>
    );
}

export default JobElement;