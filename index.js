 /*console.log("Hello, from JS!");
 let element = document.getElementsByTagName('h1');
 console.log(element);
 console.log(element[0].innerText);
 element[0].innerText = "Practicing DOM Manipulation";
 console.log(element[0].innerText);

 let list = document.getElementById('facts-list');
 let fact = document.createElement('p');
 fact.innerText = "innerText property refers to the text inside an element";
 list.appendChild(fact);

 function addNewFact(factText){
    let list = document.getElementById('facts-list');
    let fact = document.createElement('p');
    fact.innerText = factText;
    list.appendChild(fact);
 }

 addNewFact("innerText property refers to the text inside an element");
 addNewFact("append() or appendChild() methods can add a new child element");

 let factList = document.getElementById('facts-list');
 factList.innerHTML =`
 <p>Browser creates DOM from HTML content</p>
 <p>Developers can access the DOM using the DOM APIs</p>
 <p>innerHTML property refers to the HTML inside an element</p>
 `;*/

 function loadTable(){
    let table = document.createElement('table');
    table.setAttribute("border","solid");
    table.setAttribute("width","400px");
 
    let thead = document.createElement('thead');
    thead.innerHTML=`<tr>
    <th>Id</th>
    <th>Name</th>
    </tr>`
 
    let tbody=document.createElement('tbody');
    let tRow = document.createElement("tr");
    tRow.innerHTML = `
     <td>1</td>
     <td>Rajesh</td>
   `;
   tbody.appendChild(tRow);
 
    table.append(thead,tbody);
    document.getElementById('table-div').appendChild(table);
  }
  //loadTable();
 
  function loadTableRefactored(){
    let container = document.getElementById('table-div');
    let table = getStyledTable();
    //container.appendChild(table); // this works as well!!! bu i dont think its a good approach
    let thead = getTableHeader();
    table.appendChild(thead);
 
    let tbody = document.createElement('tbody');
 
    for(let i=0;i<students.length;++i){
     let trow = getStudentTableRow(students[i].id,students[i].name);
     tbody.appendChild(trow);
    }
 
    
 
    table.appendChild(tbody);
    container.appendChild(table);
  }
 
  function getStyledTable(){
    let table= document.createElement('table');
    table.setAttribute("border","solid");
    table.setAttribute("width","400px");
    return table;
  }
 
  function getTableHeader(){
    let thead = document.createElement('thead');
    let trow = document.createElement('tr');
    let tdataId = document.createElement('td');
    tdataId.innerText = `Id`;
    let tdataName = document.createElement('td');
    tdataName.innerText = `Name`;
    trow.append(tdataId,tdataName);
    thead.appendChild(trow);
    return thead;
  }
 
  function getStudentTableRow(id,name){
    //let tbody = document.createElement('tbody');
    let trow = document.createElement('tr');
    let tdataId = document.createElement('td');
    tdataId.innerText = id;
    let tdataName = document.createElement('td');
    tdataName.innerText= name;
    trow.append(tdataId,tdataName);
    //tbody.appendChild(trow);
    //return tbody;
    return trow;
  }
 
  //loadTableRefactored();
  //console.log(students);
 
  let button = document.querySelector('button');
  let clicked = false;
  button.addEventListener('click',()=>{
   if(!clicked){
   loadTableRefactored();
   clicked=true;
   button.textContent='HideTable'
   }
   else{
     document.getElementById("table-div").innerHTML = '';
     clicked=false;
     button.textContent='Show Table'
   }
 })
 
  let nameInput = document.querySelector('input');
  nameInput.addEventListener('input',(event)=>{
   let inputText = event.target.value;
   let nameDisplayDiv = document.getElementById('name-display');
   nameDisplayDiv.innerText = inputText;
  })