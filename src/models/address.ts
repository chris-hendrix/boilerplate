import {
  Model,
  Column,
  Table,
  HasMany,
  CreatedAt,
  UpdatedAt
} from 'sequelize-typescript'

import Ping from './address'

/* eslint-disable @typescript-eslint/no-unsafe-call*/
@Table({
  underscored: true,
  timestamps: true,
  modelName: 'ping'
})
class Address extends Model<Address> {

  @Column
  public remoteAddress!: string

  @HasMany(() => Ping)
  public pings?: Ping[]

  @CreatedAt
  @Column
  public createdAt!: Date

  @UpdatedAt
  @Column
  public updatedAt!: Date
}

export default Address