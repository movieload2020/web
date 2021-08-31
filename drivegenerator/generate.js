
        window.onload = setup;

        function setup(){
            document.getElementById("button").addEventListener("click", go);
            document.getElementById("output").addEventListener("click", copy);
	  document.getElementById("output2").addEventListener("click", copy);
	  document.getElementById("output3").addEventListener("click", copy);
	  document.getElementById("output4").addEventListener("click", copy);
        }
        
        function setStatus(status, error = false) {
            var helpText = document.getElementById("help-text");
            
            helpText.innerText = status;
            
            if (error) {
                helpText.style.color = "darkred";
            } else {
                helpText.style.color = "#227300";
            }
        }
          
        function go(){
            var linkId = document.getElementById("input").value;
            var idExtractor = /\/d\/(.+?)(?:\/|#|\?|$)/;
            var result = idExtractor.exec(linkId);
            
            var outputBox = document.getElementById("output");
          var output2Box = document.getElementById("output2");
          var output3Box = document.getElementById("output3");
          var output4Box = document.getElementById("output4");
            
            if (!result) {
                outputBox.value = "";
                setStatus("Error: Invalid URL", true);
                outputBox.disabled = true;
                return;
            }
            
            var finalLink4 = "https://drive.google.com/uc?export=download&id=" + result[1];
          var finalLink2 = "https://drive.google.com/uc?export=view&id=" + result[1];
          var finalLink3 = "https://www.googleapis.com/drive/v3/files/" + result[1] + "?alt=media&key=AIzaSyCka3Kcixk9Tv9I9mAFkQcmSmDrZ-d7CRI";
          var finalLink = "https://drive.google.com/file/d/" + result[1] + "/preview?t=0m0s";
            outputBox.disabled = false;
          output2Box.disabled = false;
          output3Box.disabled = false;
          output4Box.disabled = false;
            outputBox.value = finalLink;
          output2Box.value = finalLink2;
          output3Box.value = finalLink3;
          output4Box.value = finalLink4;
            setStatus("Success! Click the output link to copy it to your clipboard");
        }
        
        function copy() {
            if (this.disabled) {
                return;
            }
            
            this.select();
            var copied = document.execCommand("copy");
            
            if (copied) {
                setStatus("Link copied to clipboard!");
            } else {
                setStatus("Couldn't copy link to clipboard. Please copy it manually.", true);
            }
        }
