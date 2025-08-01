import { supabase } from './supabase.js';

const contenedor = document.getElementById('tablaDoctores');
const inputBusqueda = document.getElementById('busqueda');

async function cargarDoctores(filtro = '') {
  let { data: doctores, error } = await supabase
    .from('doctores')
    .select('*')
    .ilike('nombre_completo', `%${filtro}%`)
    .order('nombre_completo', { ascending: true });

  if (error) {
    contenedor.innerHTML = `<p style="text-align:center;color:red;">Error al cargar datos</p>`;
    return;
  }

  contenedor.innerHTML = '';

  doctores.forEach(doc => {
    const fila = document.createElement('div');
    fila.classList.add('fila');
    fila.innerHTML = `
      <span><strong>${doc.nombre_completo}</strong></span>
      <span>Página: ${doc.pagina}</span>
      <!-- <span>Sucursal: ${doc.sucursal}</span> -->
      <span class="sucursal-badge ${doc.sucursal === 'Vallarta' ? 'sucursal-vallarta' : 'sucursal-nayarit'}">
        ${doc.sucursal}
      </span>

      <span>
        <button class="btn" onclick="editarDoctor('${doc.id}')">Editar</button>
        <button class="btn" onclick="eliminarDoctor('${doc.id}')">Eliminar</button>
      </span>
    `;
    contenedor.appendChild(fila);
  });
}

inputBusqueda.addEventListener('input', () => {
  cargarDoctores(inputBusqueda.value.trim());
});

window.eliminarDoctor = async (id) => {
  if (confirm('¿Estás seguro de eliminar este registro?')) {
    const { error } = await supabase.from('doctores').delete().eq('id', id);
    if (!error) {
      cargarDoctores(inputBusqueda.value.trim());
    }
  }
};

window.editarDoctor = (id) => {
  window.location.href = `editar.html?id=${id}`;
};

cargarDoctores();
