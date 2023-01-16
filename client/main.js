function cob(name, age){
  return {
    name,
    age: age,
  }
}

let jin = cob("진상", 29);

console.log(jin);

if("name" in jin){
  console.log("있어요!");
}