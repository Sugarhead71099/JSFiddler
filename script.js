const navLinks = [...document.querySelectorAll(".nav-link")];
const panels = [...document.querySelectorAll(".panel")];

window.onload = function() {
	updateOutput()
};

navLinks.forEach(link => $(link).click(function () {
    $(this).toggleClass("active");

    (function () {
        panels.forEach(panel => {
            if ($(panel).attr("data-id") === $(link).attr("data-id"))
                if ($(link).hasClass("active"))
                    $(panel).css("display", "block");
                else
                    $(panel).css("display", "none");
        });
    })();

    let numOfActivePanels = $(".active").length;
    $(".panel").width(($(window).width() / numOfActivePanels) - 10);
}));

$(".panel").on("keyup change paste", function () {
	updateOutput();
});

function updateOutput() {
	$("#output-panel").contents().find("html").html("<!DOCTYPE html><html lang='en'><head><style type='text/css'>" +
		$("#css-panel").val() + "</style></head><body>" + $("#html-panel").val() + "</body></html>");

	document.getElementById("output-panel").contentWindow.eval($("#javascript-panel").val());
};