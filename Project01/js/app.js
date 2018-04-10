
// import 'js/materialize.min.js'

var elem = document.querySelector('.collapsible')
var instance = M.Collapsible.init(elem, {
  accordion: false
})

function putText () {
  // document.getElementById("test").innerHTML = 'HI nizar'
  document.querySelector('.calss_').innerHTML = 'hello calss'
  document.querySelector('#id_').innerHTML = 'hello idd'
}
putText()
