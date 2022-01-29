function parse(qs) {
  var queryString = qs.substr(1)
  var chunks = queryString.split('&')

  // var result = {}
  // chunks.forEach(function (chunks, index) {
  //   var [key, value] = chunks.split('=')
  //   result[key] = Number.isNaN(Number(value)) ? value : Number(value)
  //   result[key] = value
  // })

  return chunks
    .map(function (chunks, index) {
      var [key, value] = chunks.split('=')
      return {key, value: Number.isNaN(Number(value)) ? value : Number(value)}
    })
    .reduce((result, {key, value}) => {
      result[key] = value
      return result
    }, {})
}

var qs = parse('?banana=10&apple=20&orange=30')
console.log(qs)

function sum(numbers) {
  return numbers.reduce((total, value, index) => total + value, 0)
}

var test = sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

console.log(test)