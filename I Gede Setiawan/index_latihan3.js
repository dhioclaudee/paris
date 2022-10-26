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
  console.log(person);
  /*
      Buatlah program yang menampilkan siapakah yang memiliki
      umur paling tua dan umur paling muda
  */
      var tertua = person[0];
      var termuda = person[0];
      for (var i=0;i<person.length-1;i++){
          if(person[i]>tertua)
          {
              tertua=person[i];
          } else 
          {
              termuda=person[i];
          }
      
      }
      console.log("Tertua :",tertua)
      console.log("Termuda :",termuda)
      
      