# Proyecto e-commerce con React-JS

Este es Mi Proyecto E-commerce desarrollado en el marco del Curso React-js en Coder House. 

## Idea / Enfoque del proyecto

La idea es crear un sitio web con la misma temática utilizada en mi proyecto final de JS: https://melprim.github.io/ProyectoFinal-JavaScript_PRIMON-MELISA/ : CORTINAS DECORATIVAS de MelisaDecoScreen (logo de mi autoría)

El sitio está diseñado para una óptima navegabilidad del usuario, brindándole una experiencia visual agradable y de fácil lectura.   

Inicia en un "HOME" donde se presenta la marca y desde la cual se puede acceder a la TIENDA-ONLINE. Esta última conforma la página "NUESTRAS CORTINAS" donde se muestran todas las cortinas disponibles a la venta. Corresponde a la E-commerce en si, pudiendo realizar filtros por categoria (por TIPO DE CORTINA), ver detalles de cada una, seleccionar cantidad y agregar al carrito. Dentro del carrito es posible vaciarlo, eliminar una cortina y concretar la compra. 

![GIF-ProyectoReactJs-PrimonMelisa](https://user-images.githubusercontent.com/104146977/195745436-2ea3d078-6630-4f0e-934e-bc1d9d93a4fa.gif)

## Librerías utilizadas

### React-Toastify 
Utilizada para mostrar la alerta cuando el cliente añade una cortina al carrito y al momento de finalizar la compra, si el usuario omite algun dato o si el segundo mail no coinde.

### Sweetalert2
Utilizada para mostrar la alerta de finalización de compra. Aparece un modal con el aviso de compra exitosa, un codigo de orden y el aviso de envio del detalle al mail ingresado.

### React-Boostrap
Utilizada para implementar algunos estilos.

### React-router-dom
Indispensable para una óptima navegabilidad del usuario dentro de nuestra aplicación.

## Conexión a FireBase
Para la solicitud y envio de datos, se conectó la aplicación a una base de datos remota. Se solicita el catálogo de cortinas y se envían los datos del la compra. 



