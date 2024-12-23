document.addEventListener("DOMContentLoaded", function() {
    // lien
    const tabs = document.querySelectorAll("nav ul li a");
    const tabContents = document.querySelectorAll(".tab");
    tabs.forEach(tab => {
        tab.addEventListener("click", function(event) {
            event.preventDefault();
            // Retire la classe active de tous les onglets et contenus
            tabs.forEach(t => t.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));
            // Ajoute la classe active à l'onglet cliqué et au contenu correspondant
            tab.classList.add("active");
            const target = document.querySelector(tab.getAttribute("href"));
            target.classList.add("active");
        });
    });
});
