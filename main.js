

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/7ZwkrStD1/", modelReady);
  }
  
  function modelReady(){
    classifier.classify( gotResult);
  }
  
  function gotResult(error, results){
      if(error){
          console.error(error); 
      } else {
          console.log(results);
          var randR = Math.floor(Math.random()*255) + 1; 
          var randG = Math.floor(Math.random()*255) + 1;
          var randB = Math.floor(Math.random()*255) + 1;
          document.getElementById("result").innerHTML = results[0].label; 
          document.getElementById("conf").innerHTML = (results[0].confidence*100).toFixed(3) + " %";
          document.getElementById("result").style.color = "rgb("+randR+", "+randG+", "+randB+")";
          document.getElementById("conf").style.color = "rgb("+randR+", "+randG+", "+randB+")";
  
          
  }
  }
