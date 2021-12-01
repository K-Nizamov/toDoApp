export default function updateHandle(e,setVisibility,currentLi,setToDos,toDos,setSorted) {
    e.preventDefault()
    setVisibility('none')
    let significance = e.target.description.value
    currentLi.significance = significance

    let sortedToDos = toDos.sort((a, b) => b.significance.localeCompare(a.significance))
    setSorted(sortedToDos)
}