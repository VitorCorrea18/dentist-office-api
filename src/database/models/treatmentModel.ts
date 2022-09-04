
import { DataTypes, Model } from 'sequelize';
import db from '.';

class TreatmentModel extends Model {
  public id: number;
  public name: string;
  public price: number;
}

TreatmentModel.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  price: {
    allowNull: false,
    type: DataTypes.DECIMAL,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'treatment',
  timestamps: false,
});

export default TreatmentModel; 
