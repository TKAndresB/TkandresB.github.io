/* Importar fuente de Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');

/* Estilos generales */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    scroll-behavior: smooth;
}

body {
    background-color: #f4efe9;
    color: #333;
    line-height: 1.7;
}

/* Estilo del encabezado */
header {
    background: linear-gradient(135deg, #c0392b, #8e1b0c);
    color: white;
    text-align: center;
    padding: 30px;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    animation: fadeInDown 0.8s ease-in-out;
}

@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 15px 0;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: 600;
    padding: 12px 18px;
    border-radius: 8px;
    transition: background 0.3s ease-in-out, transform 0.2s;
}

nav ul li a:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
    box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.2);
}

/* Secciones principales */
section {
    padding: 60px 10%;
}

h2 {
    text-align: center;
    color: #c0392b;
    margin-bottom: 30px;
    font-size: 2.3rem;
    text-transform: uppercase;
    letter-spacing: 1.2px;
}

/* Sliders */
.slider-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
}

.slider {
    width: 45%;
    height: 250px;
    background: linear-gradient(135deg, #e74c3c, #c0392b);
    border-radius: 20px;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 1.4rem;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s, background 0.3s;
}

.slider:hover {
    transform: scale(1.08);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
    background: linear-gradient(135deg, #c0392b, #8e1b0c);
}

/* Texto en los sliders */
.slider span {
    display: block;
    text-align: center;
    font-size: 1.8rem;
    margin-top: 10px;
}

/* Estilos para las secciones de leyendas, mitos y cuentos */
.leyenda-item, .mito-item, .cuento-item {
    background: white;
    border-radius: 15px;
    padding: 35px;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
    margin: 30px auto;
    width: 90%;
    max-width: 750px;
    text-align: center;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s;
}

.leyenda-item:hover, .mito-item:hover, .cuento-item:hover {
    transform: scale(1.04);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
}

/* Botones */
button {
    background: linear-gradient(135deg, #c0392b, #8e1b0c);
    color: white;
    border: none;
    padding: 14px 22px;
    margin: 12px;
    cursor: pointer;
    font-size: 17px;
    border-radius: 10px;
    transition: transform 0.2s ease-in-out, background 0.3s, box-shadow 0.3s;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

button:hover {
    background: linear-gradient(135deg, #a93226, #6b1109);
    transform: scale(1.1);
    box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.25);
}

/* Pie de página */
footer {
    background: linear-gradient(135deg, #c0392b, #8e1b0c);
    color: white;
    text-align: center;
    padding: 30px;
    margin-top: 40px;
    font-size: 1.2rem;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    box-shadow: 0px -6px 12px rgba(0, 0, 0, 0.2);
}

/* Efecto de fade-in para los elementos */
.fade-in {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.8s ease-in-out forwards;
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsividad */
@media (max-width: 768px) {
    .slider {
        width: 100%;
        margin-bottom: 20px;
    }

    nav ul {
        flex-direction: column;
        gap: 12px;
    }

    .leyenda-item, .mito-item, .cuento-item {
        width: 100%;
    }

    button {
        width: 100%;
    }
}

/* Estilo global para todos los párrafos del contenido principal */
main p {
    text-align: center;
    font-size: 1.8rem;
    margin: 20px auto;
    max-width: 800px;
}
/* Filtro de región estilizado */
.categorias {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-bottom: 30px;
    padding: 10px;
    background: rgba(196, 57, 43, 0.1); /* sutil fondo para integrarlo */
    border-radius: 10px;
  }
  
  .categorias label {
    font-size: 1.8rem;
    color: #c0392b;
    font-weight: 600;
  }
  
  .categorias select {
    background: #f4efe9;
    border: 2px solid #c0392b;
    border-radius: 8px;
    padding: 8px 12px;
    font-size: 1.6rem;
    color: #333;
    transition: border-color 0.3s ease, transform 0.3s ease;
  }
  
  .categorias select:hover {
    transform: scale(1.05);
  }
  
  .categorias select:focus {
    outline: none;
    border-color: #8e1b0c;
  }
  .leyendas-container, .mitos-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
  }
/* Asegura que el contenedor del slider tenga posición relativa */
.slider {
    position: relative;
    overflow: hidden;
  }
  
  /* El contenedor de slides se mostrará en línea */
  .slider-track {
    display: flex;
    transition: transform 0.3s ease-in-out;
  }
  
  /* Estilo de los botones de navegación */
  .slider-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    z-index: 10;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s ease, transform 0.3s ease;
  }
  
  .slider-btn:hover {
    background-color: rgba(0, 0, 0, 0.7);
    transform: translateY(-50%) scale(1.1);
  }
  
  /* Posición específica para cada botón */
  .slider-btn.prev {
    left: 10px;
  }
  
  .slider-btn.next {
    right: 10px;
  }
    
