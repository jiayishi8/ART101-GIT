let title = "The Ancient Basin";


let elements = ["corpses", "dust", "Pale King Statue", "whispers of the Void"];


let knight = {
    name: "The Vessel",
    hasSoul: true,
    geoCount: 0,
    companions: ["Grub", "Hornet"]
};


let environment = {
    location: "Ancient Basin",
    isUnderground: true,
    atmosphere: "quiet and heavy",
    
};


//$("#output").append(`<h2>${title}</h2>`);
//$("#output").append(`<p><strong>Elements:</strong> ${elements.join(", ")}</p>`);
//$("#output").append(`<p><strong>Knight:</strong> ${knight.name} — Soul: ${knight.hasSoul}, Geo: ${knight.geoCount}</p>`);
//$("#output").append(`<p><strong>Companions:</strong> ${knight.companions.join(", ")}</p>`);
//$("#output").append(`<p><strong>Environment:</strong> ${environment.location}, ${environment.atmosphere}</p>`);
//$("#output").append(`<p><strong>Light sources:</strong> ${environment.lightSources.join(", ")}</p>`);

function giveGeo(loseGeo) {

let lostGeo = prompt("How many Geos will you give?");

if (lostGeo == loseGeo) {
    $("#output").html("You obtained a Vessel Fragment.");
}

else {
    $("#output").html("You have lost all your Geos.");
}
}

$("#good-button").click(function () {
    giveGeo(3000);
});

$("#knight").hover(
  function () {
    $("#grub").animate(
      { left: "+=100px", top: "-=50px", width: "200px" },
      1000 // 1 second
    );
  },
  function () {
    // When mouse leaves the knight, grub returns to its original spot and size
    $("#grub").animate(
      { left: "400px", top: "500px", width: "150px" },
      1000
    );
  }
);