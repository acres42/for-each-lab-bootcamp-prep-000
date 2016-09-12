function iterativeLog(array){
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  donna = ['uno', 'dos', 'tres', 'quatro']
  donna.forEach(callback)
  return donna
}

function doToArray(array, callback){
  array.forEach(callback)
}
