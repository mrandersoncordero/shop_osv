const btnCategorias = document.getElementById('btn-categorias'),
  btnCerrarMenu = document.getElementById('btn-menu-cerrar'),
  btnRegresar = document.querySelector('#grid .categorias .btn-regresar'),
  grid = document.getElementById('grid'),
  contenedorEnlacesNav = document.querySelector('#menu .contenedor-enlaces-nav'),
  contenedorSubcategorias = document.querySelector('#grid .contenedor-subcategorias'),
  esDispositivoMovil = () => window.innerWidth <= 800;

btnCategorias.addEventListener('mouseover', () => {
  if (!esDispositivoMovil()) {
    grid.classList.add('activo');
  }
});

grid.addEventListener('mouseleave', () => {
  if (!esDispositivoMovil()) {
    grid.classList.remove('activo');
  }
});

// boton para mostrar las categorias en computadoras
document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
  elemento.addEventListener('mouseenter', (e) => {
    // console.log(e.target.dataset.categoria);
    if (!esDispositivoMovil()) {
      document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
        // console.log(categoria.dataset.categoria);
        categoria.classList.remove('activo');

        if (categoria.dataset.categoria == e.target.dataset.categoria) {
          categoria.classList.add('activo')
        }

      });
    }
  });
});

// Eventlisteners para dispositivos moviles
document.querySelector('#btn-menu-barras').addEventListener('click', (e) => {
  e.preventDefault();
  if (contenedorEnlacesNav.classList.contains('activo')) {
    contenedorEnlacesNav.classList.remove('activo');
    document.querySelector('body').style.overflow = 'visible';
  }else{
    contenedorEnlacesNav.classList.add('activo');
    document.querySelector('body').style.overflow = 'hidden';
  }

});

// click en boton de todos las categorias (para version movil)
btnCategorias.addEventListener('click', (e) => {
  e.preventDefault();

  grid.classList.add('activo');
  btnCerrarMenu.classList.add('activo');
});

// boton de regresar en el menu de categorias
btnRegresar.addEventListener('click', (e) => {
  e.preventDefault();
  grid.classList.remove('activo');
  btnCerrarMenu.classList.remove('activo');
});

// boton para mostrar las categorias en moviles
document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
  elemento.addEventListener('click', (e) => {
    if (esDispositivoMovil()) {
      contenedorSubcategorias.classList.add('activo');

      document.querySelectorAll('#menu .subcategoria').forEach((categoria) =>{
        categoria.classList.remove('activo');
        if (categoria.dataset.categoria == e.target.dataset.categoria) {
          categoria.classList.add('activo');
        }
      })
    }
  });
});

// boton de regresar en el menu de subcategorias
document.querySelectorAll('#grid .contenedor-subcategorias .btn-regresar').forEach((boton) => {
  boton.addEventListener('click', (e) => {
    e.preventDefault();
    contenedorSubcategorias.classList.remove('activo');
  });
});

// cerrar todos los menus activos
btnCerrarMenu.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelectorAll('#menu .activo').forEach((elemento) => {
    elemento.classList.remove('activo');
  });
  document.querySelector('body').style.overflow = 'visible';
});