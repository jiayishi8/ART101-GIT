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

function giveGeo(loseGeo) {
    let lostGeo = prompt("How many Geos will you give?");
    if (lostGeo == loseGeo) {
        $("#output").html("You obtained a Vessel Fragment.");
    } else {
        $("#output").html("You have lost all your Geos.");
    }
}

$("#good-button").click(function () {
    giveGeo(3000);
});


$(document).mousemove(function (e) {
    let offsetX = 180;
    let offsetY = 180;

    $("#grub")
        .stop(true, false)
        .animate(
            {
                left: e.pageX + offsetX + "px",
                top: e.pageY + offsetY + "px"
            },
            120
        );
});
