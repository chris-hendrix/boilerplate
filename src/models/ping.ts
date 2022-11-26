import {
  Model,
  Column,
  Table,
  BelongsTo,
  ForeignKey,
  CreatedAt,
  UpdatedAt
} from 'sequelize-typescript'

import Address from './address'

@Table({
  modelName: 'ping',
  timestamps: true,
  underscored: true
})
class Ping extends Model {

  @Column
  public message: string

  @ForeignKey(() => Address)
  @Column
  public addressId: number

  @BelongsTo(() => Address)
  public address: Address

  @CreatedAt
  @Column
  public createdAt: Date

  @UpdatedAt
  @Column
  public updatedAt: Date
}

export default Ping