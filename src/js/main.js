import API from "./dbCalls"

API.getAllJournals()

document.getElementById("journal_Submit").addEventListener("click", event => {
    event.preventDefault();
    console.log(event)
})