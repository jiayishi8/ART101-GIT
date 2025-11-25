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

$(function () {
    const $grub = $("#grub");

    let grubActivated = false;

    $grub.on("mouseenter", function () {
        grubActivated = true;
    });

    let mouseX = 0;
    let mouseY = 0;

    $(document).on("mousemove", function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
    });

    function updateGrubPosition() {
        if (grubActivated) {
            const current = $grub.offset() || { left: 0, top: 0 };

            const grubWidth = $grub.outerWidth() || 0;
            const grubHeight = $grub.outerHeight() || 0;

            const winWidth = $(window).width();
            const winHeight = $(window).height();

            let targetX = mouseX - grubWidth / 2;
            let targetY = mouseY - grubHeight / 2;

            targetX = Math.max(0, Math.min(targetX, winWidth - grubWidth));
            targetY = Math.max(0, Math.min(targetY, winHeight - grubHeight));

            const followSpeed = 0.15;

            const newX = current.left + (targetX - current.left) * followSpeed;
            const newY = current.top + (targetY - current.top) * followSpeed;

            $grub.offset({ left: newX, top: newY });
        }

        requestAnimationFrame(updateGrubPosition);
    }

    requestAnimationFrame(updateGrubPosition);
});
