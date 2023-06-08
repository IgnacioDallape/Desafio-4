const socket = io()

socket.on('products', (data) => {
    render(data)
})

const render =  (data) => {
    console.log(data)
    const html =  data.map(e => {
        return (
            `
        <div>
            <span>
            <h5> producto: ${e.title}  </h5>
            <em> precio: ${e.price} </em>   
            <em> codigo: ${e.code} </em>   
            <em> stock: ${e.stock} </em>   
            </span>
        </div>
        `
        )

    }).join('')
    document.getElementById('box').innerHTML = html
}

