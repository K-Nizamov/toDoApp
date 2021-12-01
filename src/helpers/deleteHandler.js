export const deleteFunctionHandler = (context,props) => {
    context.setToDos(context.toDos.filter((el) => el.id !== props.todo.id ))
}