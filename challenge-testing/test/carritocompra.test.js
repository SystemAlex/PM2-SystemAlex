const { CarritoCompra } = require('../index');

describe('CarritoCompra', () => {
    let carrito;
    beforeEach(() => {
        carrito = new CarritoCompra();
    });

    function llenarCarrito() {
        carrito.agregarProducto({ nombre: 'Producto 1', precio: 100 });
        carrito.agregarProducto({ nombre: 'Producto 2', precio: 200 });
    }

    it("la clase CarritoCompra debe existir", () => {
        expect(CarritoCompra).toBeDefined();
        expect(CarritoCompra).toBeInstanceOf(Function);
        expect(typeof CarritoCompra);
    })

    it("La clase CarritoCompra debe poder ser Instanciada", () => {
        const carritoCompra = new CarritoCompra();
        expect(carritoCompra).toBeInstanceOf(CarritoCompra);
    })

    it("la clase Carritocompra debe tener los siguientes metodos: 'constructor, agregarProducto, calcularTotal, aplicarDescuento'", () => {
        expect(CarritoCompra.prototype.constructor).toBeInstanceOf(Function);
        expect(CarritoCompra.prototype.agregarProducto).toBeInstanceOf(Function);
        expect(CarritoCompra.prototype.calcularTotal).toBeInstanceOf(Function);
        expect(CarritoCompra.prototype.aplicarDescuento).toBeInstanceOf(Function);
    })

    it('Inicializa el carrito como un array vacio', () => {
        expect(carrito.carrito).toEqual([]);
    });

    it('Agrega un producto al carrito', () => {
        const producto = { nombre: 'Producto 1', precio: 100 };
        carrito.agregarProducto(producto);
        expect(carrito.carrito).toContain(producto);
    });

    it('Calcula el total de la compra', () => {
        llenarCarrito()
        expect(carrito.calcularTotal()).toBe(300);
        llenarCarrito()
        expect(carrito.calcularTotal()).toBe(600);
        llenarCarrito()
        expect(carrito.calcularTotal()).toBe(900);
    });

    it('Aplica un descuento al total de la compra', () => {
        llenarCarrito()
        expect(carrito.aplicarDescuento(10)).toBe(270);
        expect(carrito.aplicarDescuento(20)).toBe(240);
        expect(carrito.aplicarDescuento(50)).toBe(150);
        expect(carrito.aplicarDescuento(90)).toBe(30);
        expect(carrito.aplicarDescuento(100)).toBe(0);
    });
});
