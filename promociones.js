// Galeria Verde - Sistema de Promociones
// Archivo: promociones.js

// Esperar a que el DOM este completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Referencias a elementos del DOM
    const form = document.getElementById('promocionesForm');
    const btnLimpiar = document.getElementById('btnLimpiar');
    const resultadosDiv = document.getElementById('resultados');
    const checkboxes = document.querySelectorAll('.producto-checkbox');

    // Habilitar/deshabilitar campos de cantidad segun checkbox
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const productoValue = this.value;
            const cantidadInput = document.getElementById('cant-' + productoValue);

            if (this.checked) {
                cantidadInput.disabled = false;
                cantidadInput.value = 1;
                cantidadInput.min = 1;
            } else {
                cantidadInput.disabled = true;
                cantidadInput.value = 0;
                cantidadInput.min = 0;
            }
        });
    });

    // Manejar envio del formulario
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        calcularPromocion();
    });

    // Manejar boton limpiar
    btnLimpiar.addEventListener('click', function() {
        limpiarFormulario();
    });

    // Funcion principal de calculo
    function calcularPromocion() {
        const tipoPromo = document.getElementById('tipoPromo').value;

        if (!tipoPromo) {
            alert('Por favor selecciona una promocion');
            return;
        }

        // Obtener productos seleccionados
        const productosSeleccionados = obtenerProductosSeleccionados();

        if (productosSeleccionados.length === 0) {
            alert('Por favor selecciona al menos un producto');
            return;
        }

        // Calcular totales segun tipo de promocion
        let resultado;
        switch(tipoPromo) {
            case '2x1':
                resultado = calcular2x1(productosSeleccionados);
                break;
            case '3x2':
                resultado = calcular3x2(productosSeleccionados);
                break;
            case 'volumen':
                resultado = calcularVolumen(productosSeleccionados);
                break;
            default:
                alert('Promocion no valida');
                return;
        }

        mostrarResultados(resultado);
    }

    // Obtener productos seleccionados con sus cantidades
    function obtenerProductosSeleccionados() {
        const productos = [];

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const productoValue = checkbox.value;
                const precio = parseFloat(checkbox.dataset.precio);
                const cantidad = parseInt(document.getElementById('cant-' + productoValue).value);

                if (cantidad > 0) {
                    // Agregar cada unidad como item separado para facilitar calculos
                    for (let i = 0; i < cantidad; i++) {
                        productos.push({
                            nombre: checkbox.parentElement.textContent.trim().split(' - ')[0],
                            precio: precio
                        });
                    }
                }
            }
        });

        return productos;
    }

    // Calculo: 2x1 con 50% OFF en el segundo
    function calcular2x1(productos) {
        const subtotal = productos.reduce((sum, p) => sum + p.precio, 0);
        let descuento = 0;

        if (productos.length >= 2) {
            // Ordenar productos por precio (del menor al mayor)
            const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);

            // Aplicar 50% de descuento al producto mas barato por cada par
            const pares = Math.floor(productos.length / 2);
            for (let i = 0; i < pares; i++) {
                descuento += productosOrdenados[i].precio * 0.5;
            }
        }

        const total = subtotal - descuento;
        const porcentajeAhorro = subtotal > 0 ? ((descuento / subtotal) * 100).toFixed(1) : 0;

        return {
            subtotal,
            descuento,
            total,
            mensaje: productos.length >= 2
                ? `Ahorraste un ${porcentajeAhorro}% comprando con la promocion 2x1!`
                : 'Necesitas al menos 2 productos para aplicar esta promocion.'
        };
    }

    // Calculo: 3x2 (el tercero gratis)
    function calcular3x2(productos) {
        const subtotal = productos.reduce((sum, p) => sum + p.precio, 0);
        let descuento = 0;

        if (productos.length >= 3) {
            // Ordenar productos por precio (del menor al mayor)
            const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);

            // Por cada 3 productos, el mas barato sale gratis
            const grupos = Math.floor(productos.length / 3);
            for (let i = 0; i < grupos; i++) {
                descuento += productosOrdenados[i].precio;
            }
        }

        const total = subtotal - descuento;
        const porcentajeAhorro = subtotal > 0 ? ((descuento / subtotal) * 100).toFixed(1) : 0;

        return {
            subtotal,
            descuento,
            total,
            mensaje: productos.length >= 3
                ? `Ahorraste un ${porcentajeAhorro}% con la promocion 3x2!`
                : 'Necesitas al menos 3 productos para aplicar esta promocion.'
        };
    }

    // Calculo: 10% descuento en compras mayores a $30,000
    function calcularVolumen(productos) {
        const subtotal = productos.reduce((sum, p) => sum + p.precio, 0);
        let descuento = 0;

        if (subtotal > 30000) {
            descuento = subtotal * 0.10;
        }

        const total = subtotal - descuento;

        return {
            subtotal,
            descuento,
            total,
            mensaje: subtotal > 30000
                ? `Felicitaciones! Ahorraste 10% por compra superior a $30,000!`
                : `Agregando $${formatearPrecio(30000 - subtotal)} mas alcanzas el 10% de descuento!`
        };
    }

    // Mostrar resultados en pantalla
    function mostrarResultados(resultado) {
        document.getElementById('subtotal').textContent = '$' + formatearPrecio(resultado.subtotal);
        document.getElementById('descuento').textContent = '-$' + formatearPrecio(resultado.descuento);
        document.getElementById('total').textContent = '$' + formatearPrecio(resultado.total);
        document.getElementById('mensajeAhorro').textContent = resultado.mensaje;

        resultadosDiv.style.display = 'block';
        resultadosDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Formatear precio con separadores de miles
    function formatearPrecio(precio) {
        return Math.round(precio).toLocaleString('es-AR');
    }

    // Limpiar formulario y resultados
    function limpiarFormulario() {
        form.reset();

        checkboxes.forEach(checkbox => {
            const productoValue = checkbox.value;
            const cantidadInput = document.getElementById('cant-' + productoValue);
            cantidadInput.disabled = true;
            cantidadInput.value = 0;
        });

        resultadosDiv.style.display = 'none';
    }

    // Mensaje de bienvenida en consola
    console.log('Sistema de promociones Galeria Verde cargado correctamente');
});
