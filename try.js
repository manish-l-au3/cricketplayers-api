const arr = [
    {
      "name":"abc",
      "score":20
    },
    {
      "name":"adc",
      "score":27
    },{
      "name":"aac",
      "score":25
    },{
      "name":"aab",
      "score":25
    },{
      "name":"mac",
      "score":250
    }
  ]
  var sarr = {}
  
  // arr.sort(function(a, b){
  //      return b.score-a.score
  // })
  
  
  arr.sort(function(a, b){
      var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
      if (nameA < nameB) //sort string ascending
          return -1 
      if (nameA > nameB)
         return  1
      return 0 ;
  })
  if(typeof arr == object){
      console.log("array");
  }
  //console.log(arr);
  