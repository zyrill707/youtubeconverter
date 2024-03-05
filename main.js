let button = document.getElementById("convertBtn").onclick = function() {
  let user = document.getElementById("userInput").value;

  const url = `https://youtube-video-downloader-4k-and-8k-mp3.p.rapidapi.com/download.php?format=mp3&url=${user}&button=1&start=1&end=`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c0205fcb67msh35c38d1f4bef565p1dfbf6jsnce699e0596ba',
      'X-RapidAPI-Host': 'youtube-video-downloader-4k-and-8k-mp3.p.rapidapi.com'
    }
  };

  fetch(url, options)
    .then(response => response.json())
    .then(data => {
      let title = document.getElementById("songTitle").textContent = data.title;
      let result = document.getElementById("id").textContent = data.id;
      let copyBtn = document.createElement("button");
      copyBtn.textContent = "Copy";
      copyBtn.style.border = "1px solid transparent";
      copyBtn.style.padding = "5px 5px";
      copyBtn.style.borderRadius = "2px";
      copyBtn.style.background = "linear-gradient(135deg, gold, silver, gray)";
      copyBtn.style.textTransform = "uppercase";
      let container = document.getElementById("res");
      container.appendChild(copyBtn);


      copyBtn.addEventListener("click", function() {
        let id = document.getElementById("id").textContent;
        navigator.clipboard.writeText(id)
          .then(() => {
            console.log('Text copied to clipboard: ' + id);

            alert("ID copied to clipboard: " + id);
            window.location.href = "progress.html";
          })
          .catch(err => {
            console.error('Failed to copy text: ', err);
          });
      });
    });
};