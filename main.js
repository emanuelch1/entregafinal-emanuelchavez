

const productos = [
    {
        id:1,
        nombre:"SMART TV 32' SAMSUMG",
        precio:120000,
        descripcion:"Samsung UN32AU5500jC, resolución HD (3840 x 2160 píxeles) y cuenta con Crystal Processor 4K. Su panel LED ofrece además la característica de alto rango dinámico (HDR), que aumenta la expresión brillante del televisor para que puedas disfrutar de un inmenso espectro de colores y detalles visuales, incluso en las escenas más oscuras.",
        stock:5,
        urlImg:"./img/tv32.jpg"
    },

    {
        id:2,
        nombre:"SMART TV 43' SAMSUMG",
        precio:150000,
        descripcion:"El Smart TV Samsung UN43AU7000GC, resolución FULL HD (3840 x 2160 píxeles) y cuenta con Crystal Processor 4K. Su panel LED ofrece además la característica de alto rango dinámico (HDR), que aumenta la expresión brillante del televisor para que puedas disfrutar de un inmenso espectro de colores y detalles visuales, incluso en las escenas más oscuras.",
        stock:5,
        urlImg:"./img/tv43.jpg",
    },

    {
        id:3,
        nombre:"SMART TV 55' SAMSUMG",
        precio:180000,
        descripcion:"El Smart TV Samsung UN55AU7000GC, resolución HD (3840 x 2160 píxeles) y cuenta con Crystal Processor 4K. Su panel LED ofrece además la característica de alto rango dinámico (HDR), que aumenta la expresión brillante del televisor para que puedas disfrutar de un inmenso espectro de colores y detalles visuales, incluso en las escenas más oscuras.",
        stock:5,
        urlImg:"./img/tv55.jpg",
    },
    {
        id:4,
        nombre:"SMART TV 65' SAMSUMG",
        precio:200000,
        descripcion:"El Smart TV Samsung UN65AU7000, resolución FULL HD (3840 x 2160 píxeles) y cuenta con Crystal Processor 4K. Su panel LED ofrece además la característica de alto rango dinámico (HDR), que aumenta la expresión brillante del televisor para que puedas disfrutar de un inmenso espectro de colores y detalles visuales, incluso en las escenas más oscuras.",
        stock:5,
        urlImg:"./img/tv65.jpg",
    },
    {
        id:5,
        nombre:"SMART TV 70' SAMSUMG",
        precio:250000,
        descripcion:"El Smart TV Samsung UN70AU7000GC, resolución FULL HD (3840 x 2160 píxeles) y cuenta con Crystal Processor 4K. Su panel LED ofrece además la característica de alto rango dinámico (HDR), que aumenta la expresión brillante del televisor para que puedas disfrutar de un inmenso espectro de colores y detalles visuales, incluso en las escenas más oscuras.",
        stock:5,
        urlImg:"./img/tv70.jpg",
    },
    {
        id:6,
        nombre:"LG 32'UHD LED ThinQ ",
        precio: 110000,
        descripcion:"Led HD, Procesador Inteligente 5ta generación 5, Active HDR, Sonido Virtual Surround Plus, LG ThinQ AI: Inteligencia Artificial ",
        stock:5,
        urlImg:"./img/lg32.jpg",
    },
    {
        id:7,
        nombre:"LG 43'UHD LED ThinQ ",
        precio:130000,
        descripcion:"LED UHD, Procesador Inteligente , HDR Activo 4K, Sonido Ultra Surround, LG AI ThinQ: Inteligencia Artificia",
        stock:5,
        urlImg:"./img/lg43.jpg",
    },
    {
        id:8,
        nombre:"LG 55' UHD LED AI ThinQ 4K",
        precio:140000,
        descripcion:"LED 4K UHD, Procesador Inteligente α5 4K, HDR Activo 4K, Sonido Ultra Surround, LG AI ThinQ: Inteligencia Artificial",
        stock:5,
        urlImg:"./img/lg55.jpg",
    },
    {
        id:9,
        nombre:"LG 60' UHD LED AI ThinQ 4K ",
        precio:190000,
        descripcion:"LED 4K UHD, Procesador Inteligente α5 4K, HDR Activo 4K, Sonido Ultra Surround, LG AI ThinQ: Inteligencia Artificial",
        stock:5,
        urlImg:"./img/lg60.jpg",
    },
    {
        id:10,
        nombre:"LG 70' UHD LED AI ThinQ 4K",
        precio:220000,
        descripcion:"LED 4K UHD, Procesador Inteligente α5 4K, HDR Activo 4K, Sonido Ultra Surround, LG AI ThinQ: Inteligencia Artificial",
        stock:5,
        urlImg:"./img/lg70.jpg",
    }
]

const carrito = JSON.parse(localStorage.getItem("carrito")) ?? []


const verProducto = ({id,nombre,precio,descripcion,stock,urlImg}) =>{
    const tarjetasProductos = document.querySelector("#tarjetasProductos")
    const tarjeta = document.createElement("div")
    tarjeta.className = "tarjeta"
    tarjeta.innerHTML=`
                       <img class="img"src="${urlImg}" alt="">
                       <div class="contenido">
                       <h3 class="nombre">${nombre}</h3>
                       <p class="descripcion">${descripcion}</p>
                       </div>
                       <span class="precio"><b>Precio:</b> $${precio}</span>
                       <form class="form" id="formCarrito${id}">
                       <input name="id" type="hidden" value="${id}">
                       <input name="cantidad" type="number" value="1" min="1" max="${stock}">
                       <button type="submit">Comprar</button>
                       </form>
    `
    tarjetasProductos.append(tarjeta)
}
const agregarCarrito = (id) =>{
    const formCarrito = document.querySelector("#formCarrito"+ id)
    formCarrito.addEventListener("submit",(e)=>{
        e.preventDefault()
        const cantidad = e.target.children["cantidad"].value
        
        carrito.push({
            id,
            cantidad,
        })
       
        
        console.log(carrito)
        const numeroCarrito = document.querySelector("#agregarCarrito")
        numeroCarrito.innerText = cantidad
        Swal.fire({
            icon: 'success',
            title: 'Felicidades!!!',
            text: 'Usted agrego un producto SMART TV al Carrito.',
           
          }) 

    localStorage.setItem("carrito",JSON.stringify(carrito))
    })
   
}

const verProductos = () =>{
    productos.forEach(producto =>{
        if(producto.stock !=0){
            verProducto(producto)
            agregarCarrito(producto.id)
        }
        
    })
}

verProductos()
