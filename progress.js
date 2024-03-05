let button = document.getElementById("submitBtn").onclick = function(){
  let user = document.getElementById("id").value;
  
  const url = `https://youtube-video-downloader-4k-and-8k-mp3.p.rapidapi.com/progress.php?id=${user}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c0205fcb67msh35c38d1f4bef565p1dfbf6jsnce699e0596ba',
		'X-RapidAPI-Host': 'youtube-video-downloader-4k-and-8k-mp3.p.rapidapi.com'
	}
};

fetch(url, options)
.then(response => response.json())
.then(data => console.log(data));
}