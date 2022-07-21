module.exports = (sequelize, dataTypes) => {
    let alias = 'TypeOfUser'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        typeofusers: {
            type: dataTypes.STRING(100),
        },
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
    }

    const TypeOfUser = sequelize.define(alias,cols,config);

    TypeOfUser.associate = function (models) {

        TypeOfUser.hasMany(models.User, {

            as: 'typesOfUsers',

            foreignKey: 'typeOfUser_id'

        })
    }

    return TypeOfUser;
};