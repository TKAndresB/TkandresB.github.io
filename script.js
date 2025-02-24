document.addEventListener("DOMContentLoaded", function () {
    // Filtrado para Leyendas
    const filterLeyendas = document.getElementById("region-filter-leyendas");
    if (filterLeyendas) {
      const leyendasItems = document.querySelectorAll(".leyenda-item");
      filterLeyendas.addEventListener("change", function () {
        const selected = filterLeyendas.value;
        leyendasItems.forEach(function (item) {
          if (selected === "todas" || item.dataset.region === selected) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    }
  
    // Filtrado para Mitos
    const filterMitos = document.getElementById("region-filter-mitos");
    if (filterMitos) {
      const mitosItems = document.querySelectorAll(".mito-item");
      filterMitos.addEventListener("change", function () {
        const selected = filterMitos.value;
        mitosItems.forEach(function (item) {
          if (selected === "todas" || item.dataset.region === selected) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    }
  });
  

document.addEventListener("DOMContentLoaded", function() {
    // Guardamos el índice actual de cada slider
    const sliderIndices = {
      leyendas: 0,
      mitos: 0
    };
  
    // Función para actualizar la posición del slider
    function updateSlider(sliderName) {
      const slider = document.getElementById("slider-" + sliderName);
      const track = slider.querySelector(".slider-track");
      const slides = track.querySelectorAll(".slide");
      // Suponemos que todos los slides tienen el mismo ancho
      const slideWidth = slides[0].offsetWidth;
      track.style.transform = `translateX(-${sliderIndices[sliderName] * slideWidth}px)`;
    }
  
    // Función para avanzar al siguiente slide
    window.nextSlide = function(sliderName) {
      const slider = document.getElementById("slider-" + sliderName);
      const track = slider.querySelector(".slider-track");
      const slides = track.querySelectorAll(".slide");
      if (sliderIndices[sliderName] < slides.length - 1) {
        sliderIndices[sliderName]++;
      } else {
        sliderIndices[sliderName] = 0; // Regresa al primer slide
      }
      updateSlider(sliderName);
    };
  
    // Función para retroceder al slide anterior
    window.prevSlide = function(sliderName) {
      const slider = document.getElementById("slider-" + sliderName);
      const track = slider.querySelector(".slider-track");
      const slides = track.querySelectorAll(".slide");
      if (sliderIndices[sliderName] > 0) {
        sliderIndices[sliderName]--;
      } else {
        sliderIndices[sliderName] = slides.length - 1; // Va al último slide
      }
      updateSlider(sliderName);
    };
  
    // Actualiza el slider en caso de cambio de tamaño de ventana
    window.addEventListener('resize', function() {
      updateSlider('leyendas');
      updateSlider('mitos');
    });
  });
  