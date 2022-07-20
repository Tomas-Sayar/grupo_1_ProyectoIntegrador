module.exports = (sequelize, dataTypes) => {
    let alias = 'Type'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        type: {
            type: dataTypes.STRING(100),
        },
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
    }

    const Type = sequelize.define(alias,cols,config);

    Type.associate = function (models) {

        Type.hasMany(models.Product, {

            as: 'products',

            foreignKey: 'type_id'

        })
    }

    return Type;
};