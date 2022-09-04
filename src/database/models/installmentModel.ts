
import { DataTypes, Model } from 'sequelize';
import db from '.';
import PatientModel from './patientModel';

class InstallmentModel extends Model {
  public id: number;
  public name: string;
  public treatmentId: number;
}

InstallmentModel.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  date: {
    allowNull: false,
    type: DataTypes.DATEONLY,
  },
  status: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  patientId: {
    allowNull: false,
    type: DataTypes.INTEGER,
  }
}, {
  underscored: true,
  sequelize: db,
  modelName: 'installment',
  timestamps: false,
});

PatientModel.hasMany(InstallmentModel, { foreignKey: 'patientId', as: 'patient' });

InstallmentModel.belongsTo(PatientModel, { foreignKey: 'patientId', as: 'patient' });

export default InstallmentModel;
