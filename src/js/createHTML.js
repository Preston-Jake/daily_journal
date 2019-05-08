function createHtml(journal) {
    // console.log(journal) //test 

    const frag = document.createDocumentFragment();

    var div = document.createElement("div");
    frag.appendChild(div);
    div.setAttribute("class", "journal-item");

    let span = document.createElement("span");
    let title = document.createElement("h2");
    let pEntry = document.createElement("p");
    let pMood = document.createElement("p");

    span.textContent = `${journal.date}`
    title.textContent = `${journal.concepts}`
    pEntry.textContent = `${journal.entry}`
    pMood.textContent = `${journal.mood}`

    div.appendChild(span);
    div.appendChild(title);
    div.appendChild(pEntry);
    div.appendChild(pMood);

    document.querySelector("#journal_container").appendChild(frag)
}
export default createHtml;
