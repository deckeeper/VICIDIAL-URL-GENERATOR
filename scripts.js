document.getElementById("create").addEventListener("click", function(e){

 e.preventDefault(); 
  const seperator = document.getElementById('seperator').value;
 if(seperator=='0'){
  	let values = document.getElementById("link_values").value.split("\n");
  }
  else{
  	let values = document.getElementById("link_values").value.split(seperator);
  }
  let text = '';
 

for (let i =0; i < values.length; i++) {
	if (i==0){
		let path = document.getElementById('script_path').value+ '?' + values[i] + '=--A--' + values[i] + '--B--';
		text = text + path;
	}

	else{
		let option = '&' + values[i] + '=--A--' + values[i] + '--B--' ;
		text = text + option;
	}
	

}
document.getElementById('result').value=text;

});


