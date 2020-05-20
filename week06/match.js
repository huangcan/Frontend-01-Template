// function match(string){
//   let foundA = false;
//   for(let c of string){
//     if(c == "a"){
//       foundA = true;
//     }else if(foundA && c == "b"){
//       return true;
//     }else{
//       foundA = false;
//     }
//   }
// }

function match(string) {
  let state = start;
  for(let c of string) {
    state = state(c);
  }
  return state === end;
}

function start(c) {
  if(c === "a")
    return foundA;
}

function foundA(c) {
  if(c === "b")
    return end;
  else
    return start;
}

function end(c) {
  return end;
}

console.log(match("a abm a!"));