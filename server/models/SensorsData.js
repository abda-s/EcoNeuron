    module.exports = (sequelize, DataTypes) => {
        const SensorsData = sequelize.define("SensorsData", {
            timestamps:{
                type: DataTypes.DATE,
                allowNull: false,

            },
            ldr: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            motion: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
        });
      
        return SensorsData;
    };
