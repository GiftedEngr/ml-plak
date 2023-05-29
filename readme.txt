Los nuevos "módulos o funciones" a integrar en nuestro actual actual sistema deben integrarse sin perder ninguna función actual.
No debe mermar el funcionamiento ni haber una caída del desempeño mayor al 15% o 20% al encender estas nuevas funciones.

El sistema es dinámico, y al agregar las nuevas funciones no debe volverse estático ya que esa es la escencia del sistema.

las funciones a realizar:

1 - *creación de un panel y repositorio de objetos (para ingresar y guardar objetos Dae y OBJ , ej mesas sillas, tv, o ambietes completos) al servidor
- al agregar un objeto debe incluir sus texutras originales y permitir editar texturas y tamaños, mostar tamaño en mm
- debe permitir introducirlos dentro del proyecto abierton y ubicarlo en mm en los ejes X Y Z y rotarlos EN ° X Y Z
Al agregar un Objeto en el proyecto debe incluir texturas y necesitamos que se pueda seleccionar el objeto desde el 3d y desde un panel que nos muestre los nombres de los objetos en escena, para poder moverlos, rotarlos ocultarlos, o eliminarlos, de manera independiente.

Los proyectos deben guardar informacion de Objetos, ubicaicon, tamaño etc.. al abrir al proyecto cargar tal cual estaba al guardarlo

- desde el panel/ modal/vista a crear, debemos poder almacenarlos en el servidor, y poder abrirlos desde una lista que mostrará todos los modelos guardados. ,

La lista de los objetos debera ser global para todos los usuarios

2 - Creación de un plano habitacion o casa en 2d, esta habitacion o casa debe verse en el 3d actual

Crear un modulo con una herramienta que permita crear las habitaciones en plano 2D customizables 100%, debe permitir ingresar espesor de pared, angulo y medidas en mm, además deberán poderse ubicar, columnas, paredes tipo tabiques, puertas y ventanas (deberán ser editables en color/ textura y tamaño y modelos, por los menos 3 o 4 modelos de puertas y de ventanas), las habitaciones deben poder moverse en el mundo ( con los ejes, X Y Z y rotación de X Y Z) debe permitir varias habitaciones dentro de un mismo proyecto
- guardar habitacion por separado para usar en otro proyecto,
-al guardar y cargar un proyecto, toda la config de habitacion y sus parametos deben guardarse y luego cargarse

La herramienta de creación de planos, nos debe permitir dibujar en "planta"y "Vista" de cada una de las pared de la casa que se dibuje ,
primero se dibujara la planta y luego seleccionando en las vistas de las las paredes poder situar figuras geométricas como cuadrados rectángulo lineas circulos, que representaran enchufes, caños, tomas de agua, bocas de desagües etc. Por eso deben poder editarse en tamaño según la medida en mm (necitamos que pueda tomar un valor enviado por bluetooth).
las texturas de las paredes piso y techo deben poder editarse por grupo o de manera indpendiente.
los pisos techos y paredes ademas de incluir niveles, o pendientes, ademas de eso deberan poder guardar junto a sus propiedades hasta 6 valoes extra con Nombe y valor. al tocar la pared debe mostrar esas propiedad ademas de sus medidas. y el plano de vista dibujado.

ej app Magic plan ( sin la parte lidar, solo la parte manual)

3 - Agregar un panel de iluminación , para poder controlar la iluminación de la escena, iluminación general ambiental, o tipo spot en lugares específicos con su control de parámetros independientes( como las luces que trae ya la librería).
cada luz debe sus parametros independientes
los proyectos deben guardar/cargar los parametros de luces

se necesita una llave On OFF para encender o apagar las funciones 3 funciones independientemente.

AL presentar cada punto luego del testeo en staging se libera % segun etapa,
30% para el primer punto, 30% para el 2 y 40% para el 3.

trabajamos con gitlab

una explicaicon mas:
https://www.loom.com/share/db0f5e9f1029402c9995fee8d5d24c95

Las funciones que se agreguen no deben dañar ninguna función de lo que esta realizado actualmente.