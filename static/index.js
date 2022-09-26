function passToPython() {
  const arguments = { 
    "arg1": document.getElementById('arg1').value,
}

console.log(arguments);

const arg_str = JSON.stringify(arguments);

  $.ajax({
    url: '/test',
    type: 'POST',
    data: JSON.stringify(arg_str),
    contentType: 'application/json'
  })

}
