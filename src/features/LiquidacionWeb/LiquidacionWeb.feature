Feature:  Agregar pedido de Liquidación Web 
Como Consultora quiero agregar pedidos de Liquidación Web

@LiquidacionWeb @Home
Scenario Outline: Agregar pedido de Liquidacion Web desde el Home
Given Ingreso el "<Pais>" mi usuario "<Usuario>" y mi "<Password>"
And Si se muestra el popup deberia cerrarse
When agrego un producto del Liquidacion Web
Then visualizo el popup de confirmacion de agregado
And  ingreso al carrito y verifico que se haya agregado el producto al carrito.


Examples:
| Pais | Usuario | Password |  cantidad |
| PE |044676648| 1 | 7 |

@LiquidacionWeb @Landing
Scenario Outline: Agregar pedido de Liquidacion Web desde el Landing
Given Ingreso el "<Pais>" mi usuario "<Usuario>" y mi "<Password>"
And Si se muestra el popup deberia cerrarse
And ingresar al landing de Liquidacion Web
When agrego un producto con la "<cantidad>"
Then visualizo el popup de confirmacion de agregado
And verifico que el stock haya disminuido la cantidad agregada en el landing
And verifico que el producto se haya agregado al carrito
And verifico que el producto haya ingresado al pedido satisfactoriamente

Examples:
| Pais | Usuario | Password |  cantidad |
| PE |044676648| 1 | 50|
