const login = require("./../../pages/Login/Login.module");
const modulo = require("./LiquidacionWeb.module");

Given("Ingreso el {string} mi usuario {string} y mi {string}", async function(
  Pais,
  Usuario,
  Password
) {
  login.Constructor();
  login.IngresarCredenciales(Pais, Usuario, Password);
  login.ClickBotonLogin();
});

Given("Si se muestra el popup deberia cerrarse", async function() {
  login.ValidacionFinalLogin();
  await login.SiPopUp_Cerrar();

});

Given("ingresar al landing de Liquidacion Web",async function(){
 await modulo.LandingLiquidacionWeb();

});

When("agrego un producto del Liquidacion Web", async function() {
  await modulo.SeleccionarOpcionLiquidacionWeb();
});

Then("visualizo el popup de confirmacion de agregado", async function() {
  await modulo.VisualizarPopupAgregado();
});

Then(
  "ingreso al carrito y verifico que se haya agregado el producto al carrito.",
  async function() {
    await modulo.VerificarAgregadoCarrito();
  }
);
