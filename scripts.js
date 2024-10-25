document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar recargar la página al enviar

    // Obtener los valores de los campos del formulario
    const username = document.getElementById('username').value;
    const commentText = document.getElementById('comment').value;

    // Crear un nuevo div con el comentario
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.innerHTML = `
        <p><strong>${username}</strong> says:</p>
        <p>"${commentText}"</p>
        <span>Posted just now</span>
    `;

    // Añadir el nuevo comentario a la sección de comentarios
    const commentsSection = document.querySelector('.comments-section');
    commentsSection.appendChild(newComment);

    // Limpiar el formulario
    document.getElementById('commentForm').reset();
});
