module.exports = (sequelize, dataTypes) => {
    let alias = 'Product'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL.UNSIGNED,
            allowNull: false
        },
        discount: {
            type: dataTypes.BIGINT(10).UNSIGNED,
        },
        description: {
            type: dataTypes.STRING(500),
        },
        image: {
            type: dataTypes.STRING(150),
        },
        category_id: dataTypes.BIGINT(10),
    };
    let config = {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }

    const Product = sequelize.define(alias,cols,config);

    Product.associate = function (models) {

        Product.belongsTo(models.Category, { 
            
            as: "categories",
            
            foreignKey: "category_id",
        
        })
        
        Product.belongsTo(models.Type, { 
        
            as: "types",
        
            foreignKey: "type_id",
        
        })

        Product.belongsTo(models.Brand, { 
        
            as: "brands",
        
            foreignKey: "brand_id",
        
        })

    }

    return Product;
};