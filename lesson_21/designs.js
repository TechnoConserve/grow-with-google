// Select color input
$("#colorPicker").spectrum({
    color: "#1400ff"
});

// Select size input
let heightInput = $("#inputHeight");
let widthInput = $("#inputWidth");
let gridHeight = heightInput.val();
let gridWidth = widthInput.val();
makeGrid();

// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function (e) {
    e.preventDefault();
    gridHeight = heightInput.val();
    gridWidth = widthInput.val();
    makeGrid();
});

function makeGrid() {
    // Clear existing grid
    $("tr").remove();
    for (let i = 0; i < gridHeight; i++) {
        $("#pixelCanvas").append("<tr></tr>");
    }
    for (let i = 0; i < gridWidth; i++) {
        $("tr").append("<td></td>");
    }
    $("td").click(function (e) {
        $(this).css("background-color", $(".sp-preview-inner").css("background-color"))
    });
}
