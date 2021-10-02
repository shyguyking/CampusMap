var count = 0,
  correct = 0,
  incorrect = 0;
var bf, dp, ag, dbp, src;

//map functionality
let map;
var google;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.2424918, lng: -118.5282616 },
    zoom: 16,
    gestureHandling: "none",
    disableDefaultUI: true,
    zoomControl: false,
    mapTypeId: "satellite",
    styles: [
      {
        featureType: "all",
        elementType: "labels",
        stylers: [{ visibility: "off" }]
      }
    ]
  });

  map.addListener("dblclick", function(e) {
    count++;
    checkInput(e, count);
  });

  function checkInput(e, count) {
    if (count <= 5) {
      if (count == 1) {
        // timer();
        baseball(e);
      }
      if (count == 2) duck(e);
      if (count == 3) arbor(e);
      if (count == 4) planetarium(e);
      if (count == 5) recCenter(e);
      // count++;
    }
  }

  function baseball(e) {
    //create rectangle around baseball field
    const baseballField = new google.maps.LatLngBounds(
      new google.maps.LatLng(34.244387, -118.527007),
      new google.maps.LatLng(34.2453, -118.525821)
    );

    bf = new google.maps.Rectangle({
      map: map,
      bounds: baseballField
    });

    if (bf.getBounds().contains(e.latLng)) {
      bf.setOptions({
        strokeOpacity: 0.8,
        strokeWeight: 2,
        strokeColor: "green",
        fillOpacity: 0.2,
        fillColor: "green"
      });
      document.getElementById("answerOne").style.visibility = "visible";
      correct++;
    } else {
      bf.setOptions({
        strokeOpacity: 0.8,
        strokeWeight: 2,
        strokeColor: "red",
        fillOpacity: 0.2,
        fillColor: "red"
      });
      document.getElementById("answerOne").innerHTML = "Sorry wrong location.";
      document.getElementById("answerOne").style.color = "red";
      document.getElementById("answerOne").style.visibility = "visible";
      incorrect++;
    }
    document.getElementById("questionTwo").style.visibility = "visible";
  }

  function duck(e) {
    //create rectangle around duck pond
    const duckPond = new google.maps.LatLngBounds(
      new google.maps.LatLng(34.236497, -118.526278),
      new google.maps.LatLng(34.236723, -118.525865)
    );

    dp = new google.maps.Rectangle({
      map: map,
      bounds: duckPond
    });

    if (dp.getBounds().contains(e.latLng)) {
      dp.setOptions({
        strokeOpacity: 0.8,
        strokeWeight: 2,
        strokeColor: "green",
        fillOpacity: 0.2,
        fillColor: "green"
      });
      document.getElementById("answerTwo").style.visibility = "visible";
      correct++;
    } else {
      dp.setOptions({
        strokeOpacity: 0.8,
        strokeWeight: 2,
        strokeColor: "red",
        fillOpacity: 0.2,
        fillColor: "red"
      });
      document.getElementById("answerTwo").innerHTML = "Sorry wrong location.";
      document.getElementById("answerTwo").style.color = "red";
      document.getElementById("answerTwo").style.visibility = "visible";
      incorrect++;
    }
    document.getElementById("questionThree").style.visibility = "visible";
  }

  function arbor(e) {
    //create rectangle around arbor grill
    const arborGrill = new google.maps.LatLngBounds(
      new google.maps.LatLng(34.241007, -118.529851),
      new google.maps.LatLng(34.241335, -118.529545)
    );

    ag = new google.maps.Rectangle({
      map: map,
      bounds: arborGrill
    });

    if (ag.getBounds().contains(e.latLng)) {
      ag.setOptions({
        strokeOpacity: 0.8,
        strokeWeight: 2,
        strokeColor: "green",
        fillOpacity: 0.2,
        fillColor: "green"
      });
      document.getElementById("answerThree").style.visibility = "visible";
      correct++;
    } else {
      ag.setOptions({
        strokeOpacity: 0.8,
        strokeWeight: 2,
        strokeColor: "red",
        fillOpacity: 0.2,
        fillColor: "red"
      });
      document.getElementById("answerThree").innerHTML =
        "Sorry wrong location.";
      document.getElementById("answerThree").style.color = "red";
      document.getElementById("answerThree").style.visibility = "visible";
      incorrect++;
    }
    document.getElementById("questionFour").style.visibility = "visible";
  }

  function planetarium(e) {
    //create rectangle around planetarium
    const donaldBianchi = new google.maps.LatLngBounds(
      new google.maps.LatLng(34.238926, -118.528604),
      new google.maps.LatLng(34.239179, -118.52829)
    );

    dbp = new google.maps.Rectangle({
      map: map,
      bounds: donaldBianchi
    });

    if (dbp.getBounds().contains(e.latLng)) {
      dbp.setOptions({
        strokeOpacity: 0.8,
        strokeWeight: 2,
        strokeColor: "green",
        fillOpacity: 0.2,
        fillColor: "green"
      });
      document.getElementById("answerFour").style.visibility = "visible";
      correct++;
    } else {
      dbp.setOptions({
        strokeOpacity: 0.8,
        strokeWeight: 2,
        strokeColor: "red",
        fillOpacity: 0.2,
        fillColor: "red"
      });
      document.getElementById("answerFour").innerHTML = "Sorry wrong location.";
      document.getElementById("answerFour").style.color = "red";
      document.getElementById("answerFour").style.visibility = "visible";
      incorrect++;
    }
    document.getElementById("questionFive").style.visibility = "visible";
  }

  function recCenter(e) {
    //create rectangle around Student Recreation Center
    const studentRecCenter = new google.maps.LatLngBounds(
      new google.maps.LatLng(34.239333, -118.525214),
      new google.maps.LatLng(34.240637, -118.52468)
    );

    src = new google.maps.Rectangle({
      map: map,
      bounds: studentRecCenter
    });

    if (src.getBounds().contains(e.latLng)) {
      src.setOptions({
        strokeOpacity: 0.8,
        strokeWeight: 2,
        strokeColor: "green",
        fillOpacity: 0.2,
        fillColor: "green"
      });
      document.getElementById("answerFive").style.visibility = "visible";
      correct++;
    } else {
      src.setOptions({
        strokeOpacity: 0.8,
        strokeWeight: 2,
        strokeColor: "red",
        fillOpacity: 0.2,
        fillColor: "red"
      });
      document.getElementById("answerFive").innerHTML = "Sorry wrong location.";
      document.getElementById("answerFive").style.color = "red";
      document.getElementById("answerFive").style.visibility = "visible";
      incorrect++;
    }
    // clearTimeout(t);
    document.getElementById("score").innerHTML =
      correct + " Correct, " + incorrect + " Incorrect";
    document.getElementById("score").style.visibility = "visible";
  }
}


/* I do not understand the problem with the timer and reset button here. They just didnt want to work

// Run a standard minute/second/hundredths timer:
const theTimer = document.querySelector(".timer");
var time = [0, 0, 0];
var t;

function add() {
  time[2]++;
  if(time[2] >=100)  {
    time[2]=0;
    time[1]++;
    if (time[1] >= 60) {
        time[1] = 0;
        time[0]++;
    }
  }
  
  theTimer.innerHTML = (time[0] ? (time[0] > 9 ? time[0] : "0" + time[0]) : "00") + ":" + (time[1] ? (time[1] > 9 ? time[1] : "0" + time[1]) : "00") + ":" + (time[2] > 9 ? time[2] : "0" + time[2]);

  timer();
}    

function timer()  {
  t = setTimeout(add, 10);
}
// const start = document.getElementById('start');
// start.onclick = timer;


//reset function 
const resetButton = document.querySelector("#reset");

resetButton.addListener('click', reset);

function reset()  {
  theTimer.textContent = "00:00:00";
  time = [0, 0, 0];
  clearTimeout(t);
  
  count = 0;
  
  document.getElementById("answerOne").style.visibility = "hidden";
  document.getElementById("answerTwo").style.visibility = "hidden";
  document.getElementById("answerThree").style.visibility = "hidden";
  document.getElementById("answerFour").style.visibility = "hidden";
  document.getElementById("answerFive").style.visibility = "hidden";
  
  document.getElementById("questionTwo").style.visibility = "hidden";
  document.getElementById("questionThree").style.visibility = "hidden";
  document.getElementById("questionFour").style.visibility = "hidden";
  document.getElementById("questionFive").style.visibility = "hidden";
  
  bf.strokeOpacity = 0;
  bf.fillOpacity = 0;
  dp.strokeOpacity = 0;
  dp.fillOpacity = 0;
  ag.strokeOpacity = 0;
  ag.fillOpacity = 0;
  dbp.strokeOpacity = 0;
  dbp.fillOpacity = 0;
  src.strokeOpacity = 0;
  src.fillOpacity = 0;
}
*/