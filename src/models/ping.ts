import {
  Model,
  Column,
  Table,
  ForeignKey,
  CreatedAt,
  UpdatedAt
} from 'sequelize-typescript'

import Address from './address'

/* eslint-disable @typescript-eslint/no-unsafe-call*/
@Table({
  underscored: true,
  timestamps: true,
  modelName: 'ping'
})
class Ping extends Model {

  @Column
  public pingType!: string

  @ForeignKey(() => Address)
  @Column
  public addressId?: number

  @CreatedAt
  @Column
  public createdAt!: Date

  @UpdatedAt
  @Column
  public updatedAt!: Date
}

export default Ping