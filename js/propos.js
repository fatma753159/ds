document.addEventListener("DOMContentLoaded", function () {
    
    const button = document.querySelector(".btn");
    const paragraph = document.getElementById("dynamic-paragraph");

    if (button && paragraph) {
        
        paragraph.style.display = "none";

        button.addEventListener("click", function () {
            
            if (paragraph.style.display === "none") {
                paragraph.style.display = "block";
            } else {
                paragraph.style.display = "none";
            }
        });
    } else {
        console.error("Le bouton ou le paragraphe n'a pas été trouvé !");
    }
});
