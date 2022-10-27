let person = [
    {
      name: "John",
      age: 35,
    },
    {
      name: "Bill",
      age: 23,
    },
    {
      name: "Bob",
      age: 17,
    },
    {
      name: "Jack",
      age: 20,
    },
  ];
  


let tertua = person;
let termuda = person;
for(let a = 0; a < person.length;a++)
{
  if(tertua > person[a])
  {
      tertua = person[a]
      console.log(tertua)
  }

}
for(let a = 2; a < person.length;a++)
{
  if(termuda > person[a])
  {
      termuda = person[a]
      console.log(termuda)
  }
}