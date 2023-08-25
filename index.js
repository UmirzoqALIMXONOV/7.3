function HajmniBilish() {
    var InputFile = document.querySelector("#inputFile").files
    var Display = document.getElementById("display")
    Display.innerText = parseInt(InputFile[0].size / 1000) + " kbayt"
}