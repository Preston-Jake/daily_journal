import "./dbCalls"
import API from "./dbCalls";


function saveJournal() {
    entryObj = {
        date: `${document.getElementById("journalDate").value}`,
        concepts: `${document.getElementById("journalConcepts").value}`,
        date: `${document.getElementById("journalEntry").value}`,
        date: `${document.getElementById("journalMood").value}`,
    }

    API.submitNewJournal(entryObj);
}