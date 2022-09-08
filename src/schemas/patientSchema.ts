import * as Joi from 'joi';

const patientSchema = Joi.object({
  patient: {
    name: Joi.string().min(3).required(),
    treatmentId: Joi.number().min(1).required(),
  },
  installments: Joi.number().min(1).required()
});

export default patientSchema;
