import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../util/db'

interface PingAttributes {
  id: number,
  pingType: string
  [key: string]: string | number;
}

class Ping extends Model<PingAttributes> {
  public id!: number
  public pingType!: string
  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Ping.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  pingType: {
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