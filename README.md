##curvas base para animaciones
###Aligerando curvas

--http://cubic-bezier.com/#.17,.67,.46,1.02

1. Curva estándar
  * La curva estándar (también conocida como "facilidad de salida") es la curva de aceleración más común. Los elementos aceleran rápidamente y desaceleran lentamente entre las ubicaciones en pantalla. Se aplica a materiales de crecimiento y contracción, entre otros cambios de propiedad.

2. Curva de desaceleración
3. Curva de aceleración
4. Curva cerrada

"https://drafts.csswg.org/css-timing-1/#typedef-timing-function"

##Móvil
Las transiciones en dispositivos móviles generalmente ocurren a  300 ms

  Las transiciones grandes, complejas y de pantalla completa pueden tener duraciones más largas, que ocurren a  375ms
  Los elementos que ingresan a la pantalla ocurren a 225 ms
  Los elementos que salen de la pantalla ocurren a 195 ms

##Tablet
se presenta un aumento del 30% a la duracion del movil

##wearables - relojes inteligentes (Pendiente si se contempla)
se presenta una disminución del 30% a la duracion del movil

##Desktop
Estas animaciones deben durar de 150 ms a 200 ms.
"Pendiente si se mantienen esas velocidad, ya que se justifica por temas de rendimiento, posible implementacion con gpu"