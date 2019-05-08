import createHTML from "./createHTML";

const db = "http://localhost:8088/journals"

const API = {
    getAllJournals: () => {
        return fetch("http://localhost:8088/journals")
            .then(result => result.json())
            .then(journals => {
                journals.map(createHTML)
            });
    },
    submitNewJournal: (entry) => {
        return fetch(db, {
            method: "POST",
            header: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        })
    }
}

export default API;