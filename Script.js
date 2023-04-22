musixmatch_endpoint = "https://api.musixmatch.com/ws/1.1/";
musixmatch_key = "95ba5e89c149773080f619d11d23f29a";
MaxResults = 10;




/// prendere il campo edmIsShownBy


function onJsonArt(json){

	const results = json.items;
	const section = document.querySelector('#section');
	section.innerHTML = '';

	
	for(let i = 0; i < MaxResults; i++){
		const image = document.createElement('img');
		image.src = results[i].edmIsShownBy;
		const src = image.src;
		const tempPd = src.substring(src.indexOf('.pdf'));
		const tempMp = src.substring(src.indexOf('.mp3'));
		const tempUn = src.substring(src.indexOf('undefined'));


		if(tempMp !== ".mp3" && tempUn !== "undefined" && tempPd !== ".pdf"){
		
		const div = document.createElement('div');
		div.appendChild(image);
		section.appendChild(div);

		}
	}



	console.log(results);
}











	

function onJson(json){
	titolo.innerHTML='';
	const paragraph = document.createElement('h1');
	console.log(json);
	paragraph.textContent = "Il tuo Ip è: "+json.ip;
	titolo.appendChild(paragraph);
}




function onResponse(response){
	console.log('Risposta ricevuta');
	return response.json();
}









function search(event){

	event.preventDefault();
	const scelta = document.querySelector('#content').value;
	const sceltaEncoded = encodeURIComponent(scelta);



	fetch("https://api.europeana.eu/record/v2/search.json?wskey=buticumitr&query=" + sceltaEncoded + "&reusability=open&media=true").then(onResponse).then(onJsonArt);

}






fetch("https://api64.ipify.org?format=json").then(onResponse).then(onJson);





titolo = document.querySelector('#titolo');


form = document.addEventListener('submit', search);