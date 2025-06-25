// Mostrar imágenes en secuencia con intervalo de 300ms en bucle infinito
document.addEventListener('DOMContentLoaded', () => {
    // Lista de nombres de imágenes
    const nombres = [
        'imagen1.jpg','imagen2.jpg','imagen3.jpg','imagen4.jpg','imagen5.jpg','imagen6.jpg','imagen7.jpg','imagen8.jpg','imagen9.jpg','imagen10.jpg','imagen11.jpg','imagen12.jpg','imagen13.jpg','imagen14.jpg','imagen15.jpg','imagen16.jpg','imagen17.jpg','imagen18.jpg','imagen19.jpg','imagen20.jpg','imagen21.jpg','imagen22.jpg','imagen23.jpg','imagen24.jpg','imagen25.jpg','imagen26.jpg','imagen27.jpg','imagen28.jpg','imagen29.jpg','imagen30.jpg'
    ];
    const container = document.getElementById('animation-container');
    if (!container) {
        console.error('No se encontró el contenedor #animation-container');
        return;
    }
    console.log('Contenedor encontrado.');
    nombres.forEach(nombre => {
        const div = document.createElement('div');
        div.className = 'imagen';
        const img = document.createElement('img');
        img.src = 'img/' + nombre;
        img.alt = nombre;
        img.style.border = '2px solid red'; // Borde rojo para depuración
        div.appendChild(img);
        container.appendChild(div);
    });

    const imagenes = document.querySelectorAll('.imagen img');
    console.log('Imágenes insertadas:', imagenes.length);
    let indice = 0;

    if (imagenes.length === 0) {
        console.warn('No se encontraron imágenes dentro de un contenedor con clase .imagen.');
        return;
    }

    // Oculta todas las imágenes al inicio y aplica transición
    imagenes.forEach(img => {
        img.style.display = 'none';
        img.style.transition = 'opacity 0.3s';
        img.style.opacity = '0';
    });

    function mostrarSiguienteImagen() {
        // Oculta la imagen actual con transición de opacidad
        imagenes[indice].style.opacity = '0';
        setTimeout(() => {
            imagenes[indice].style.display = 'none';
            // Calcula el siguiente índice
            indice = (indice + 1) % imagenes.length;
            // Muestra la siguiente imagen
            imagenes[indice].style.display = 'block';
            setTimeout(() => {
                imagenes[indice].style.opacity = '1';
            }, 10);
            setTimeout(mostrarSiguienteImagen, 300);
        }, 300); // Espera a que termine la transición de opacidad
    }

    // Inicia el bucle mostrando la primera imagen
    imagenes[0].style.display = 'block';
    imagenes[0].style.opacity = '1';
    setTimeout(mostrarSiguienteImagen, 300);
});