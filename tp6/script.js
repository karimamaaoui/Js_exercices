// add new task
/*fetch ("http://localhost:3000/tasks",{
    method:"Post",
    body: JSON.stringify({
        checked:false,
        date:new Date(),
        text:'Task 1',
    }),
    headers:{
        'Content-Type':'application/json'
    }
}).then(response=>{
    console.log("task added ");
}).catch(err=>{
    console.log("API Error")
})
*/

// get all tasks
/*fetch ("http://localhost:3000/tasks")
    .then((response)=>{

        //console.log(response);
       console.log(response.json().
            then((data)=>{console.log(data)})
            )
    })


    
// Update task
fetch ("http://localhost:3000/tasks/"+id,{
    method: 'PUT',
    body: JSON.stringify({
        checked:false,
        date:new Date(),
        text:'Task',
    }),
    headers:{
        'Content-Type':'application/json'
    }
  })
.then((response)=>{
   console.log(response.json());
}).catch(err=>{
    console.log("Error updating task")
})

  
// update task
fetch ("http://localhost:3000/tasks/"+id,{
    method: 'DELETE',
  })
.then((response)=>{
   console.log(response.json());
}).catch(err=>{
    console.log("Error deleting task")
})


var addBtn=document.getElementById("btn-add");
var cancelBtn=document.getElementById("btn-cancel");

const olTasks = document.getElementById("list-tasks");

let tabTasks=[];

function getAllTasks(){

    fetch ("http://localhost:3000/tasks")
    .then((response)=>{
        console.log(response);
       return response.json();
    }).then((data)=>{
        tabTasks=data;
        olTasks.innerHtml="";
        convertTasktoLi();
    })
            
}

function convertTasktoLi(){
    for(const task of tabTasks)
    {
        const newLi=document.createElement("li");
        newLi.className="list-group-item"
        const newiput=document.createElement("input");

        newiput.type="checkbox";
        newiput.checked=`${task.checked}`;
        newLi.appendChild(newiput);
        newiput.textContent=task.text;
        newiput.addEventListener("click",()=>{
            fetch (`http://localhost:3000/tasks/${task.id}`,{
                method:"PATCH",
                body:JSON.stringify({
                    checked:`${!task.checked}`
                }),
                headers:{ "Content-Type":"application/json"},
            }).then((res)=>{
                alert("task modified");
                getAllTasks();
            }).catch((err)=>{
                console.log(err);
            })
    
            //patch pour mise a jour un seul attribue 
            //put bch tbadel object kamel
            //ki nebda mnaarefch chnya attribute eli bch ybadlou
        })


        olTasks.appendChild(newLi);

        let newSpan=document.createElement("span");
        newSpan.classList="badge bg-secondary";
        newSpan.textContent=`${new Date(task.date).getHours()}H`
                             `${new Date(task.date).getMinutes()}m`;

        newLi.appendChild(newSpan);


    }
}

getAllTasks();

addBtn.addEventListener("click",()=>{
    addBtn.hidden=true;
})


cancelBtn.addEventListener("click",()=>{
    addBtn.hidden=true;
})


addBtn.addEventListener("change",()=>{

})


*/
const olTasks = document.getElementById("list-tasks");

let tabTasks = [];

function getAllTasks() {
  fetch("http://localhost:3000/tasks")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      tabTasks = data;
      olTasks.innerHTML = "";
      convertTasksToLi();
    });
}

function convertTasksToLi() {
  for (const task of tabTasks) {
    const newLi = document.createElement("li");
    newLi.className = "list-group-item";
    newLi.textContent = task.text;
    if (task.checked) newLi.style.textDecoration = "line-through";
    const newInput = document.createElement("input");
    newInput.type = "checkbox";
    newInput.checked = task.checked;
    newInput.addEventListener("click", () => {
      fetch(`http://localhost:3000/tasks/${task.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          checked: !task.checked,
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          //  alert("Task modifié!");
          getAllTasks();
        })
        .catch((err) => {
          console.log(err);
        });
    });
    newInput.style.margin = "0 10px";
    newLi.appendChild(newInput);

    let newSpan = document.createElement("span");
    newSpan.className = "badge bg-secondary";
    newSpan.textContent = `${new Date(task.date).getHours()}H ${new Date(
      task.date
    ).getMinutes()}Mn`;
    newLi.appendChild(newSpan);
    newLi.addEventListener("dblclick", () => {
      if (confirm("Etes-vous sur de vouloir supprimer ce task?")) {
        fetch(`http://localhost:3000/tasks/${task.id}`, {
          method: "DELETE",
        })
          .then((res) => {
            //  alert("Task modifié!");
            getAllTasks();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });

    olTasks.appendChild(newLi);
  }
}

getAllTasks();

function toggleHiddenButtons() {
  //console.log(document.getElementById("btn-add").hidden);
  document.getElementById("btn-add").hidden =
    !document.getElementById("btn-add").hidden;
  document.getElementById("btn-cancel").hidden =
    !document.getElementById("btn-add").hidden;
  document.getElementById("input-task").hidden =
    !document.getElementById("btn-add").hidden;
}

document.getElementById("btn-add").addEventListener("click", () => {
  toggleHiddenButtons();
});
document.getElementById("btn-cancel").addEventListener("click", () => {
  toggleHiddenButtons();
});
document.getElementById("input-task").addEventListener("change", () => {
  fetch("http://localhost:3000/tasks", {
    method: "POST",
    body: JSON.stringify({
      checked: false,
      date: new Date(),
      text: document.getElementById("input-task").value,
    }),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => {
      alert("Task ajouté !");
      getAllTasks();
    })
    .catch((err) => {
      console.log("Probléme avec notre API");
    });
  toggleHiddenButtons();
});

// fetch("http://localhost:3000/tasks", {
//   method: "POST",
//   body: JSON.stringify({
//     checked: false,
//     date: new Date(),
//     text: "Task 1",
//   }),
//   headers: {
//     "Content-type": "application/json",
//   },
// })
//   .then((response) => {
//     console.log("Task ajouté !");
//   })
//   .catch((err) => {
//     console.log("Probléme avec notre API");
//   });