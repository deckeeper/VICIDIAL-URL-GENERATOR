document.getElementById("create").addEventListener("click", function(e){

 e.preventDefault(); 
  const seperator = document.getElementById('seperator').value;
 if(seperator=='0'){
  	var values = document.getElementById("link_values").value.split("\n");
  }
  else{
  	var values = document.getElementById("link_values").value.split(seperator);
  }
  var text = '';
 

for (var i =0; i < values.length; i++) {
	if (i==0){
		var path = document.getElementById('script_path').value+ '?' + values[i] + '=--A--' + values[i] + '--B--';
		text = text + path;
	}

	else{
		var option = '&' + values[i] + '=--A--' + values[i] + '--B--' ;
		text = text + option;
	}
	

}
document.getElementById('result').value=text;

});


