import {
  Model,
  Column,
  Table,
  ForeignKey,
  CreatedAt,
  UpdatedAt
} from 'sequelize-typescript'

import Address from './address'

@Table({
  underscored: true,
  timestamps: true,
  modelName: 'ping'
})
class Ping extends Model {

  @Column
  public pingType!: string

  @ForeignKey(() => Address)
  public addressId?: number

  @CreatedAt
  @Column
  public createdAt!: Date

  @UpdatedAt
  @Column
  public updatedAt!: Date
}

export default Ping