var form =document.getElementById('add-frm');
var title=document.getElementById('n-title');
var nbody=document.getElementById('n-body');
var items =document.getElementById('items');
var tableDiv=document.getElementById('table-data');
var search =document.getElementById('search');
var resetbtn=document.getElementById('reset');
var noteCount =0;
var newNote='';
var isUpdate = false;
var record='';
var note ='';
var body ='';

// ....Event.....
window.onload = updateTable;
form.addEventListener('submit',addNote);
search.addEventListener('keyup',searchNote);
items.addEventListener('click',removeNote);
items.addEventListener('click',viewupdateNote);
resetbtn.addEventListener('click',resetAll)


//...functions...

function updateTable(){
    if(noteCount>0){
        tableDiv.style.display='';
       if(isUpdate){

            note.firstChild.textContent=title.value;
            note.lastChild.textContent=nbody.value;

            isUpdate=false;
            noteCount--;
       }else{

          items.appendChild(newNote);
       }
    }else{
        tableDiv.style.display='none';
    } 

}

function addNote(e){
    e.preventDefault();
    
    console.log("form");

    if(title.value=="" || nbody.value==""){

        alert("please fill all feilds")

    }else{

        var tr =document.createElement('tr');
        tr.className='item';

        // td1 title
        var td1=document.createElement('td');
        td1.appendChild(document.createTextNode(title.value));
        var span=document.createElement('span');
        span.className='npte-body';
        span.appendChild(document.createTextNode(nbody.value));

        td1.appendChild(span);
        console.log(td1); 

        //td2 view

        var td2=document.createElement('td');
        td2.className="save";
        var btn1=document.createElement('button');
        btn1.appendChild(document.createTextNode('view'));
        btn1.setAttribute('id','vw');
        td2.appendChild(btn1);
        


        var td3=document.createElement('td');
        td3.className="reset";
        var btn2=document.createElement('button');
        btn2.appendChild(document.createTextNode('delete'));
        btn2.setAttribute('id','del');
        td3.appendChild(btn2);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        //increment note count
          
        noteCount++;

        newNote=tr;

        updateTable();

        resetAll();






    }



}
function searchNote(e){

    var searchTxt=e.target.value.toLowerCase();

    var list = items.getElementsByClassName('item');
    var listArr=Array.from(list);
     

    listArr.forEach(function(item){

        var noteTitle= item.firstChild.textContent;

        if(noteTitle.toLocaleLowerCase().indexOf(searchTxt) != -1){

            item.style.display='';
        }else{

            item.style.display='none';
        }
    });

}
function removeNote(e){
    if(e.target.id ==='del'){

        if(confirm("are u sure")){

            var tr=e.target.parentElement.parentElement;
            items.removeChild(tr);
            noteCount --; 
            if(noteCount === 0){

                updateTable();
            }



        }
    }
    
}
function viewupdateNote(e){

    if(e.target.id === 'vw'){

        record =e.target.parentElement.parentElement;
        console.log(record);
        note =record.firstChild;
        title.value=note.firstChild.textContent;
        nbody.value=note.lastChild.textContent;
        isUpdate=true;
        


         
    }
}
function resetAll(){

    title.value='';
    nbody.value='';
    isUpdate=false;
    newNote='';

}