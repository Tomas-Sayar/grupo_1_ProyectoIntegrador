
let product = [
    {
        titulo: "Frutos secos: almendras",
        decripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quae nam, voluptatibus illo repellat amet laboriosam.",
        precio: "$1000",
    },
    {
        titulo: "Miel liquida 'Beepture' de 500g",
        decripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quae nam, voluptatibus illo repellat amet laboriosam.",
        precio: "$1000",
    },
    {
        titulo: "6x Latas Scotch antares",
        decripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quae nam, voluptatibus illo repellat amet laboriosam.",
        precio: "$1000",
    },
    {
        titulo: "Pan mix de semillas",
        decripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quae nam, voluptatibus illo repellat amet laboriosam.",
        precio: "$1000",
    },
    {
        titulo: "Quinua 'Molicusco'",
        decripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quae nam, voluptatibus illo repellat amet laboriosam.",
        precio: "$1000",
    },
    {
        titulo: "Tostaditas de arroz sin Tacc",
        decripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quae nam, voluptatibus illo repellat amet laboriosam.",
        precio: "$1000",
    },
];


const controller = {
    product: (req, res) => {
        res.render("product-details", product);
    },
}

module.exports = controller;