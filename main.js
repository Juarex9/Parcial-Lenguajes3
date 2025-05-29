document.getElementById('submit').addEventListener('click', function() {
    const apellido = document.getElementById('apellido').value.trim();
    const nombre = document.getElementById('nombre').value.trim();
    const dni = document.getElementById('dni').value.trim();
    const fechaNac = document.getElementById('fecha-nac').value;
    const email = document.getElementById('email').value.trim();

    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(apellido)) {
        Swal.fire('Error', 'El apellido solo debe contener letras.', 'error');
        return;
    }
    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre)) {
        Swal.fire('Error', 'El nombre solo debe contener letras.', 'error');
        return;
    }
    if (!/^\d{8}$/.test(dni)) {
        Swal.fire('Error', 'El DNI debe tener exactamente 8 números.', 'error');
        return;
    }
    const year = parseInt(fechaNac.split('-')[0]);
    if (isNaN(year) || year <= 2005) {
        Swal.fire('Error', 'La fecha de nacimiento debe ser posterior al año 2006.', 'error');
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        Swal.fire('Error', 'El email no es válido.', 'error');
        return;
    }

    Swal.fire('¡Datos validados!', 'Todos los datos son válidos.', 'success');
});

document.getElementById('preguntasBtn').addEventListener('click', async function() {
    const respuestas = [];

    const nacionalidad = await Swal.fire({
        title: 'Pregunta 1',
        text: '¿Cuál es tu nacionalidad?',
        input: 'text',
        inputPlaceholder: 'Ej: Argentina',
        showCancelButton: false,
        confirmButtonText: 'Siguiente'
    });
    respuestas.push(nacionalidad.value || '');

    const color = await Swal.fire({
        title: 'Pregunta 2',
        text: '¿Cuál es tu color favorito?',
        input: 'text',
        inputPlaceholder: 'Ej: Azul',
        showCancelButton: false,
        confirmButtonText: 'Siguiente'
    });
    respuestas.push(color.value || '');

    const mascota = await Swal.fire({
        title: 'Pregunta 3',
        text: '¿Cómo se llama tu mascota?',
        input: 'text',
        inputPlaceholder: 'Ej: Koki',
        showCancelButton: false,
        confirmButtonText: 'Finalizar'
    });
    respuestas.push(mascota.value || '');

    const comida = await Swal.fire({
        title: 'Pregunta 4',
        text: '¿Cuál es tu comida favorita?',
        input: 'text',
        inputPlaceholder: 'Ej: Hamburguesa',
        showCancelButton: false,
        confirmButtonText: 'Finalizar'
    });
    respuestas.push(comida.value || '');


    document.getElementById('respuestasInput').value = respuestas.join('-');
});

