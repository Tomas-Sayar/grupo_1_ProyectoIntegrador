module.exports = (sequelize, dataTypes) => {
    let alias = 'Brand'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        brand: {
            type: dataTypes.STRING(100),
        },
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
    }

    const Brand = sequelize.define(alias,cols,config);

    Brand.associate = function (models) {

        Brand.hasMany(models.Product, {

            as: 'products',

            foreignKey: 'type_id'

        })
    }

    return Brand;
};