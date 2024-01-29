
/*
const obj={
    prenom:'nidhal',
    university:'tekup'
}
//for of  fl tab taffichi indice
// for of fl object error

const etudiants=['mohamed','karima','samar'];
for(const element of etudiants)
{
    //afficher mohamed karima samar
    // for of iteraré le valeur
   // console.log(element);
}


for(const element in etudiants)
{
    //afficher 0 1 2
  //  console.log(element);
}
*/
const allCourses=[
    {
    id:1,
    title:'Angular',
    classe:'DMWM',
    votes:0
    },

    {
        id:2,
        title:'React',
        classe:'GL',
        votes:0
        },
];



// bch nekhdmou bl foreach
var codeArinsere="";
allCourses.forEach((element)=>
{
    codeArinsere=codeArinsere.concat(
        `<ul id=${element.id}>
        <li>${element.titre}</li>
        <li>${element.classe}</li>
        <li>${element.votes}</li>
        <button onclick=updatevote(${element.id})>+</button>

        </ul>
        `
    )
})

document.body.innerHTML=codeArinsere

function updateVote(id){
   // const selectedCourse=allCourses
   // parsInt heya nafsha  +(id) heya nafsha Number(id)
   console.log(id);
}

