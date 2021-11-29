export const deleteFunctionHandler = (props) => {
    props.setToDos(props.toDos.filter((el) => el.id !== props.todo.id ))
}