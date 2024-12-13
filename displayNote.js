const fetchingData = async () => {
    const data = await fetch('note.json'); 
    const jsondata = await data.json();
    const result = jsondata.notes;
    displayNote(result);

    allNotes = result; 
};

let allNotes = []; 

function displayNote(result) {
    const parent = document.getElementById('note-body');
    parent.innerHTML = '';
    result.forEach((x) => {
        const noteText = document.createElement('div');
        noteText.innerHTML = `
            <h2>${x.title}</h2>
            <p>${x.content}</p>
        `;
        parent.appendChild(noteText);
    });
}

function search() {
    const data = document.getElementById("text-data");
    const value = data.value.toLowerCase(); 
    const filteredNotes = allNotes.filter(note =>
        note.title.toLowerCase().includes(value) || note.content.toLowerCase().includes(value)
    ); 
    displayNote(filteredNotes); 
}

fetchingData();
