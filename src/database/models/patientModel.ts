import { DataTypes, Model } from 'sequelize';
import db from '.';
import TreatmentModel from './treatmentModel';

class PatientModel extends Model {
  public id: number;
  public name: string;
  public treatmentId: number;
}

PatientModel.init({
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
  treatmentId: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'patient',
  timestamps: false,
});

PatientModel.hasOne(TreatmentModel, { foreignKey: 'treatmentId', as: 'treatmentId' });

export default PatientModel;
