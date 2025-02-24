
document.addEventListener("DOMContentLoaded", function () {
    const filterSelect = document.getElementById("region-filter");
    const leyendas = document.querySelectorAll(".leyenda-item");

    filterSelect.addEventListener("change", function () {
        const selectedRegion = filterSelect.value;

        leyendas.forEach(leyenda => {
            if (selectedRegion === "todas" || leyenda.dataset.region === selectedRegion) {
                leyenda.style.display = "block"; // Mostrar
            } else {
                leyenda.style.display = "none"; // Ocultar
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const filterSelect = document.getElementById("region-filter");
    const items = document.querySelectorAll(".leyenda-item, .mito-item");

    filterSelect.addEventListener("change", function () {
        const selectedRegion = filterSelect.value;

        items.forEach(item => {
            if (selectedRegion === "todas" || item.dataset.region === selectedRegion) {
                item.style.display = "block"; // Mostrar
            } else {
                item.style.display = "none"; // Ocultar
            }
        });
    });
});
