
export default function searchFunction(e,setFilteredText) {
    e.preventDefault()
    let filterText = e.target.value
    setFilteredText(filterText)
}