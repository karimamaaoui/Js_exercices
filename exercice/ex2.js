const guests= ['Tunis', 'Maroc', 'Tunis', 'Egypt', 'Italy', 'Tunis', 'Algerie'];

var myMap=new Map();

for(let guest of guests) {
    if(!myMap.has(guest))
    {
        myMap.set(guest,1);
    }
    else{
        let nb=myMap.get(guest);
        nb++;
        //ne marche pas
      //  myMap.set(guest,nb++);
     //ca marche   myMap.set(guest,++nb);
     myMap.set(guest,nb);

    }
}

for (const [key,value] of myMap)
{
    console.log(`${key} : ${value} visiterus !`);
}