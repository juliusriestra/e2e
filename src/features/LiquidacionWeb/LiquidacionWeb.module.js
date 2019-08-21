const I = actor();
const assert = require("assert");
let wait = { retries: 5, minTimeout: 2000 };
const config = require("./LiquidacionWeb.locator");
let locator = config.locator;

module.exports = {
  
  SeleccionarOpcionLiquidacionWeb() {
    I.wait(1);
    I.retry(wait).click(locator.SeleccionarOpcionLiquidacionWeb_flecha);
    I.retry(wait).click(locator.AgregarCantidadLiquidacion);
    I.wait(3);
    I.retry(wait).click(locator.AgregarProductoHome);
  },

  VisualizarPopupAgregado() {
    I.retry(wait).waitForElement(locator.AgregarProductoHome);
    I.retry(wait).see("¡Listo! Agregaste con éxito a tu pedido.");
  },

  async VerificarAgregadoCarrito() {
    I.wait(10);
    I.retry(wait).click(locator.ClickCarrito);
    let nombrevalhome = await I.grabTextFrom(locator.NombreProductoHome);
    let nombrevalcarrito = await I.grabTextFrom(locator.NombreProductoCarrito);
    //console.log(nombreval)
    assert.equal(nombrevalhome, nombrevalcarrito.trim());
  },

  async LandingLiquidacionWeb() {
    I.wait(10);    
    I.retry(wait).click(locator.ClickOpcionLiquidacionWeb);  

  }
};
