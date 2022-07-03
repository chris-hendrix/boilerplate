import { DataTypes, literal } from 'sequelize'

export const id = {
  type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncrement: true,
}

export const createdAt = {
  field: 'created_at',
  type: 'TIMESTAMP',
  defaultValue: literal('CURRENT_TIMESTAMP'),
  allowNull: false,
}

export const updatedAt = {
  field: 'updated_at',
  type: 'TIMESTAMP',
  defaultValue: literal('CURRENT_TIMESTAMP'),
  onUpdate: String(literal('CURRENT_TIMESTAMP')),
  allowNull: false,
}