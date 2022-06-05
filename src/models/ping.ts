import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../util/db'

class Ping extends Model { }

Ping.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  type: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  remoteAddress: {
    type: DataTypes.TEXT,
    allowNull: false
  },
}, {
  sequelize,
  underscored: true,
  timestamps: true,
  modelName: 'ping'
})

export default Ping