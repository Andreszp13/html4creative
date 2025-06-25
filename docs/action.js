// Mostrar imágenes en secuencia con intervalo de 300ms en bucle infinito
document.addEventListener('DOMContentLoaded', () => {
    const imagenes = document.querySelectorAll('.imagen img');
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
        if (imagenes.length === 0) return;
        // Oculta la imagen actual
        imagenes[indice].style.opacity = '0';
        setTimeout(() => {
            imagenes[indice].style.display = 'none';
            // Calcula el siguiente índice
            indice = (indice + 1) % imagenes.length;
            // Prepara la siguiente imagen
            imagenes[indice].style.display = 'block';
            setTimeout(() => {
                imagenes[indice].style.opacity = '1';
                // Espera a que la imagen esté visible antes de continuar
                setTimeout(mostrarSiguienteImagen, 300);
            }, 10);
        }, 300);
    }

    // Inicia el bucle mostrando la primera imagen inmediatamente
    imagenes[0].style.display = 'block';
    setTimeout(() => {
        imagenes[0].style.opacity = '1';
        setTimeout(mostrarSiguienteImagen, 300);
    }, 10);
});