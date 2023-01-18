let btn=document.getElementById('btn');
btn.addEventListener('click',addtext);


function addtext(){
let addtxt=document.getElementById('addtxt');
let notes=localStorage.getItem("notes");
if(notes==null){
    notesObj=[];
}
else{
    notesObj=JSON.parse(notes);
}

notesObj.push(addtxt.value);
localStorage.setItem("notes",JSON.stringify(notesObj));
addtxt.value=" ";
showtext();

}

function showtext(){

    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }

    let html="";

    notesObj.forEach(function(element,index) {

       html += ` <div class="my-2 mx-2 notescard" style="width: 18rem;">
       <div class="card-body">
         <h5 class="card-title">Note ${index+1}</h5>
         <p class="card-text">${element}</p>
         <button onclick="deletenote(this.id)" id="${index}" class="btn btn-primary">Delete Note</button>
       </div>
       </div>
       `; 
    });


    let element=document.getElementById('notes');
    if(notesObj.length!=0){
        element.innerHTML=html;
    }
    else{
        element.innerHTML=`Nothing is here`;
    }

}

function deletenote(index){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
   notesObj.splice(index,1);
   localStorage.setItem("notes",JSON.stringify(notesObj));
   showtext();


}

let search=document.getElementById('searchtxt');

search.addEventListener("input",searchit);

function searchit(){

let searchtxt=search.value;
let noteCards=document.getElementsByClassName('noteCard');




}


