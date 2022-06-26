import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../util/db'

interface AddressAttributes {
  id: number,
  remoteAddress: string
  [key: string]: string | number;
}

class Address extends Model<AddressAttributes> {
  public id!: number
  public remoteAddress!: string
}

Address.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
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

export default Address