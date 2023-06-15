
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

const verProductos = async () =>{
    const res = await fetch("./productos.json")
    const productos = await res.json()
    productos.forEach(producto =>{
        if(producto.stock !=0){
            verProducto(producto)
            agregarCarrito(producto.id)
        }
        
    })
}

verProductos()
