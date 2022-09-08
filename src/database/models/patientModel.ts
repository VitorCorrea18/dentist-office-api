import { DataTypes, Model } from 'sequelize';
import db from '.';
import TreatmentModel from './treatmentModel';
import InstallmentModel from './installmentModel';

export default class PatientModel extends Model {
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

PatientModel.belongsTo(TreatmentModel, {
  foreignKey: 'treatmentId',
  as: 'treatment'
});

PatientModel.hasMany(InstallmentModel, {
  foreignKey: 'patientId',
  as: 'installments'
});

TreatmentModel.hasMany(PatientModel, {
  foreignKey: 'treatmentId',
  as: 'patients'
});

InstallmentModel.belongsTo(PatientModel, {
  foreignKey: 'patientId',
  as: 'patient'
});



