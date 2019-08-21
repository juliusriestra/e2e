config = {
  locator: {
    clickMiNegocio: { id: "lnk-pri-mi-negocio" },
    clickIngresaTuPedido: {
      xpath: '//*[@id="contentmain"]/div[1]/div[2]/div[1]/div[3]/a'
    },
    ClickOpcionLiquidacionWeb: {
      xpath: '//*[@id="seccionMiAcademiaLiquidacion"]/div[5]/a'
    },

    SeleccionarOpcionLiquidacionWeb_flecha: {
      xpath: '//*[@id="seccionMiAcademiaLiquidacion"]/div[5]/div[3]/a[2]/img'
    },
    AgregarCantidadLiquidacion: {
      xpath:
        '//*[@id="divCarruselLiquidaciones"]/div/div/div[2]/div/div[2]/div[2]/div/a[1]/img'
    },
    AgregarProductoHome: {
      xpath: '//*[@id="divCarruselLiquidaciones"]/div/div/div[2]/div/div[2]/a'
    },
    NombreProductoHome: {
      xpath: '//*[@id="divCarruselLiquidaciones"]/div/div/div[2]/div/div[2]/p/b'
    },
    NombreProductoCarrito: { xpath: '//*[@id="carrito_items"]/div[2]/div[2]' },
    ClickCarrito: { id: "pCantidadProductosPedido" }
  }
};
module.exports.config = config;
module.exports.locator = config.locator;
