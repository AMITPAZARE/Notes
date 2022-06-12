 console.log("hii")
//  clear the localstorege.clear()

let addBtn = document.getElementById('btn')
addBtn.addEventListener("click", function(e){

// addtext area 
    let addTxt = document.getElementById('container');
      // get item from localsorege
    let notes= localStorage.getItem("notes")
    // ho sakata localestorege null ho to
    if (notes == null){
        notesObj= [];
        // locla null hia to blank arry dikah0
    }
    else{
        notesObj = JSON.parse(notes);

    } 
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value= " ";

})

