import {
  Model,
  Column,
  Table,
  HasMany,
  CreatedAt,
  UpdatedAt
} from 'sequelize-typescript'

import Ping from './ping'

@Table({
  modelName: 'address',
  timestamps: true,
  underscored: true,
})
class Address extends Model<Address> {

  @Column
  public remoteAddress: string

  @HasMany(() => Ping)
  public pings: Ping[]

  @CreatedAt
  @Column
  public createdAt: Date

  @UpdatedAt
  @Column
  public updatedAt: Date
}

export default Address