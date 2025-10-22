
let myCommutes = ["metro bus", "walking","friend's car"];
let myFavouriteCommute = {
    type: "Bus",
    route: 18,
    seating: "Back",
    activityOnBus: ["doing makeup", "resting", "listening to music"],
};

let megaSentence;

megaSentence = "<p>My two top commutes from the array are: " + myCommutes[0] + ", " + myCommutes[1] + "</p>";

megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: type - " + myFavouriteCommute.type + ", route number " 
+ myFavouriteCommute.route + ", doing: " + myFavouriteCommute.activityOnBus[0] + "</p>";

$("#output").html(megaSentence);
