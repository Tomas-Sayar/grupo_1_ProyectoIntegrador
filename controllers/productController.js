
let product = {
    frutosSecos: {
        precio: "$1000",
        decripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quae nam, voluptatibus illo repellat amet laboriosam.",
        titulo: "Frutos secos: almendras",
    },
    mielLiquida: {
        precio: "$1000",
        decripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quae nam, voluptatibus illo repellat amet laboriosam.",
        titulo: "Miel liquida Beepture de 500g",
    },
    latasScotch: {
        precio: "$1000",
        decripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quae nam, voluptatibus illo repellat amet laboriosam.",
        titulo: "6x Latas Scotch antares",
    },
    panMixSemillas: {
        precio: "$1000",
        decripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quae nam, voluptatibus illo repellat amet laboriosam.",
        titulo: "Pan mix de semillas",
    },
    quinua: {
        precio: "$1000",
        decripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quae nam, voluptatibus illo repellat amet laboriosam.",
        titulo: "Quinua Molicusco",
    },
    tostaditasArroz: {
        precio: "$1000",
        decripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quae nam, voluptatibus illo repellat amet laboriosam.",
        titulo: "Tostaditas de arroz sin Tacc",
    },
}


const controller = {
    product: (req, res) => {
        res.render("product-details", product);
    },
}

module.exports = controller;