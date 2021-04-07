# Prototipo DnD

## Descripción del componente

El prototipo permite generar marcas que ayudarán al médico a guardar información sobre zonas específicas del paciente.

![](https://i.imgur.com/ErkDljQ.png)


---

## Descripción de la funcionalidad

El usuario puede ingresar descripciones de lo que quieren señalar, y agregarlas al gráfico, estas marcas mostrarán el contenido ingresado al pasar el mouse sobre ellas. El usuario tendrá además la capacidad de guardar estas marcas en una base de datos, y de eliminarlas arrastrándolas a la esquina inferior derecha.


---

## Diagrama de flujo

[Diagrama ](https://viewer.diagrams.net/?highlight=0000ff&edit=_blank&layers=1&nav=1&title=Consulta%20en%20Casa#R7VrbVsI4FP0aHnGlV%2BARkcus0dERZ9B5mRWb0AbSBkOQ4tdPSlPakgqOAuKsebHJyaXJPmfv5FRqVieM%2BxzOghuGMK2ZAMU166pmmrZpNOUjsaxSi2NaILX4nKDUZuSGIXnDyph1WxCE56WOgjEqyKxs9FgUYU%2BUbJBztix3GzNafusM%2BlgzDD1IdeuIIBGk1qbZyO0DTPwge7PhttKWEGad1U7mAURsWTBZ3ZrV4YyJtBTGHUwT9DJc%2BvHQvO%2BhuGezienbaDBpB%2FV0st6%2FGbLZAseR%2BPTUf8%2FRynUWt7hNpk9v7tUzNMO6q7YmVhleGEn4VJVxETCfRZB2c%2BslZ4sI4WRWIGt5n2vGZtJoSOMEC7FSsQAXgklTIEKqWnFMxGOh%2FJRMdeGo2lWsZl5XVlklEnz1WKyko0wnq%2Bfj1rVsYLrBZFdb8bAHTNVvzhbcU0PvzHiA7l8YurydXWP0m%2FlXb6RABwJyH4sdSJubiJFcwyzEcpFyHMcUCvJaXhxUMe9v%2BuV%2BlQXl2mo371rkK6QL9aZuJOsUJowiXpA8w1rHqrVbiHhQCwrBCYz8tfeXARF4OINrUJZSNMq%2B5UzI%2FbBIoQ8p8ZMyxWOxccYr5gLHn3CHDp%2BapW5ZQAmV0qm6bbdMGVNr2zInfkNBERQ474Kvw%2F6%2Bz0uwa8iWybQH3DGhtMMo4%2Bux1niMXc%2BT9rngbIoLLajRegbgqIAbrW3AnUwoC3BvxDMoaazzdcCnsTcdLEePgz8n6I%2Bl0%2Bm%2BvrzWre%2BUs1zCnooKtkfOLpyioBmnU7PKiLV0NasE%2Bp3oOLia7VpkgVZtn2Mf8q%2Bx64hcaWriZOvS5FRQxTyANMU3w0V09%2FZyfx%2F8%2BhiFHu1PW%2BfEFONTTAF7mLKu3WFOJF6Yn4g%2Btk6fSvRBdcCchj62Rp%2F%2BAnJ0xvQxQHaS7yRQZjo0gaoV0NDg%2BgFnjdssnTYXwLDOkUfOR4%2BhbyWSo9%2BqKQlJdL5MAtbZHUR6anLVfmhLy%2FDh9r7d72pQyjR8lhS9FSUSU27tB%2FQ5Rf%2F6eWOA3tRf%2B%2BR2IeQ0WNnnKe8M57h6ln1C2XjBaupX52aFmh0iU6kkUusnillrW8zAvuvzscXs%2FbvyB8TMOZGW7VpkKVV1aZKzj5lEoRga7suCZQ31lDEJX5uzOG%2BTJT95bi7mIITcg0gmqGpaucp05rTjuzSXboCUYsp8DkPZcVbwXqmt4Nb9eXSMs0%2BVRdqfOmO2q2h%2FJPF9P%2BRKXr%2FZuOk8TzCjZWyB6Bg6iM4pb4LuzwOx2dJANL8XxMYPBLGhgWh%2FL4jNHwjidmLnGO73gmjoN9KDHIV5bvD%2FWWgB5%2BzOwkwBC37vsQixc6WOnstViviRIBTtRnw5WgLPGPUef3kQk8nv1n%2F%2Fo2LtcKlCJYAV%2F0zcEasnyBV2rbJAlAcykzwBCCfihhHxdNZsNIwzD8%2FnH0jad%2Bfo4AI0DFtmyfnf49LNtbbp5uiKZYDD8E1W8x8WrNsKv8%2Bwuv8A)

## Librerías utilizadas

-   React
-   react-dnd
-   reactstrap
    -   tooltip
-   firebase


---

## Estructura del proyecto

📦src

┣ 📂components

┃ ┗ 📂DragAndDrop

┃ ┃ ┣ 📂box

┃ ┃ ┃ ┣ 📜Box.jsx

┃ ┃ ┃ ┣ 📜BoxDragPreview.jsx

┃ ┃ ┃ ┗ 📜DraggableBox.jsx

┃ ┃ ┣ 📂call

┃ ┃ ┃ ┣ 📜example.js

┃ ┃ ┃ ┗ 📜Example.jsx

┃ ┃ ┣ 📂Container

┃ ┃ ┃ ┣ 📜Container.jsx

┃ ┃ ┃ ┗ 📜CustomDragLayer.jsx

┃ ┃ ┗ 📂itemTypes

┃ ┃ ┃ ┗ 📜ItemTypes.js

┣ 📂Config

┃ ┗ 📜firebase.js

┣ 📂Consultas

┃ ┗ 📜dnd-Medic.js

┗ 📜index.js


---

## Código relevante

Para cambiar la imagen de fondo tenemos que cambiar la variable “backgroundImageURL” ubicada en el archivo “Container.jsx”.

```javascript
const backgroundImageURL =
  "https://coloringhome.com/coloring/KTn/gLr/KTngLrbAc.jpg";
const styles = {
  width: 750,
  height: 750,
  border: "1px solid black",
  position: "relative",
  backgroundImage: `url(${backgroundImageURL})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};
```

Para cambiar la imagen de las marcas, tenemos que modificar la variable “boxImage” del archivo “Box.jsx”

```js
 const boxImage="https://hubpng.com/download/52Wb3KNvVpVrNflOEAmaE7diyZj3RjGbRh9CYDKCTmaHulyXTNxWURf3FeFd9VemWqKXfLWxUO33t6bNdAlWJHHehe614NS3wabw4f6WbqxodyxpstvNsifS1GFEIt7cVqFH4BHap6FMOmKG5uG6EUkHBEvUV0PouroNUi6YxjLyS0nMQIWMg6gLtH8lhLOPGyqzfa6h/large"
    return (
      <div
        style={{ ...styles, backgroundColor }}
        role={preview ? "BoxPreview" : "Box"}
      >
        <img
          src={boxImage}
          alt="crossair"
          style={{
            height: "30px",
            display: "flex",
            justifyContent: "center",
            // filter: "invert(100%)",
          }}
        />
      </div>
    );
```


---

Written by :

@Sr.Chey

          
