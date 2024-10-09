const { CarritoCompra } = require('../index');

describe('CarritoCompra', () => {
    let carrito;

    beforeEach(() => {
        carrito = new CarritoCompra();
    });

    test('Inicializa el carrito como un array vacio', () => {
        expect(carrito.carrito).toEqual([]);
    });

    test('Agrega un producto al carrito', () => {
        const producto = { nombre: 'Producto 1', precio: 100 };
        carrito.agregarProducto(producto);
        expect(carrito.carrito).toContain(producto);
    });

    test('Calcula el total de la compra', () => {
        carrito.agregarProducto({ nombre: 'Producto 1', precio: 100 });
        carrito.agregarProducto({ nombre: 'Producto 2', precio: 200 });
        expect(carrito.calcularTotal()).toBe(300);
    });

    test('Aplica un descuento al total de la compra', () => {
        carrito.agregarProducto({ nombre: 'Producto 1', precio: 100 });
        carrito.agregarProducto({ nombre: 'Producto 2', precio: 200 });
        expect(carrito.aplicarDescuento(10)).toBe(270);
    });
});
