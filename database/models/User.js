module.exports = (sequelize, dataTypes) => {
    let alias = 'User'; // esto debería estar en singular
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
        username: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        dateOfBirth: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        Image: {
            type: dataTypes.STRING(150)
        },
        typeOfUser_id: dataTypes.BIGINT(10),
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }

    const User = sequelize.define(alias,cols,config);

    User.associate = function (models) {

        User.belongsTo(models.Genre, {

            as: "genre",

            foreignKey: "genre_id"

        })

        User.belongsToMany(models.Actor, {

            as: "actors",
            through: 'actor_movie',
            foreignKey: 'movie_id',
            foreignKeyConstraint: true,
            otherKey: 'actor_id',
            timestamps: false,
            onDelete: 'cascade'

        })

    }

    return User;
};