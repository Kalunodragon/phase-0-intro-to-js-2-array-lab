// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}

const appendCat = (name) => [...cats, name]
const prependCat = (name) => [name, ...cats]
/*
function prependCat(name){
    const newCatsArray = [...cats]
    newCatsArray.unshift(name)
    return newCatsArray
}
*/
function removeLastCat(){
    const newCatsArray = [...cats]
    newCatsArray.pop()
    return newCatsArray
}

const removeFirstCat = (name) => (cats.slice(1))
/*
function removeFirstCat(){
    const newCatsArray = [...cats]
    newCatsArray.shift()
    return newCatsArray
}
*/