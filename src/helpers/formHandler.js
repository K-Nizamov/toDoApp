export default function formHandler(e,setToDos,toDos) {
    e.preventDefault()
    let job = e.target['job-title'].value;
    let significance = e.target.description.value

    let pattern = /^[a-zA-Z\d ]+$/

    if(job === "" || job.length >= 70 || !job.match(pattern)){
        return;
    }
    setToDos([...toDos, { job, significance, id: Math.ceil(Math.random() * 1000) }])
    e.target['job-title'].value = ""
    e.target.description.value = e.target.description.options[0].textContent
}