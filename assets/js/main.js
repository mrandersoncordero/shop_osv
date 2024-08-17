const btnCategorias = document.getElementById('btn-categorias'),
  grid = document.getElementById('grid');
  esDispositivoMovil = () => window.innerWidth <= 800;

btnCategorias.addEventListener('mouseover', () => {
  if (!esDispositivoMovil()) {
    grid.classList.add('activo');
  }
});

grid.addEventListener('mouseleave', () => {
  if (!esDispositivoMovil()) {
    // grid.classList.remove('activo');
  }
});

document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
  elemento.addEventListener('mouseenter', (e) => {
    // console.log(e.target.dataset.categoria);
    document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
      // console.log(categoria.dataset.categoria);
      categoria.classList.remove('activo');

      if (categoria.dataset.categoria == e.target.dataset.categoria) {
        categoria.classList.add('activo')
      }

    });
  });
});