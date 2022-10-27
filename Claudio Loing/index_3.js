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
  ]
  
  let numbers = [6, 3, 5, 12, 7]

  let max = numbers [0]
  let min = numbers [0]

  for(let i=0; i <numbers.lengt; i++){
    if(numbers[i] > max){
        max = numbers[i];
    }
    if(numbers[i] < min){
        min = numbers[i];
    }
  }
  console.log("Max : ", max);
  console.log("Min : ", min);
