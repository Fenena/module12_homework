function Stroka(object, str) {
    for (let value of Object.values(object)) {
        console.log(value == str);
    }
  }
  
  var obj = {
    apple: 'Яблоко',
    pear: 'Груша',
    strawberry: 'Клубника',
  };
  
  var str = 'Груша';
  
  Stroka(obj, str);