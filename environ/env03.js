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


$("#output").append(`<h2>${title}</h2>`);
$("#output").append(`<p><strong>Elements:</strong> ${elements.join(", ")}</p>`);
$("#output").append(`<p><strong>Knight:</strong> ${knight.name} — Soul: ${knight.hasSoul}, Geo: ${knight.geoCount}</p>`);
$("#output").append(`<p><strong>Companions:</strong> ${knight.companions.join(", ")}</p>`);
$("#output").append(`<p><strong>Environment:</strong> ${environment.location}, ${environment.atmosphere}</p>`);
$("#output").append(`<p><strong>Light sources:</strong> ${environment.lightSources.join(", ")}</p>`);
