import { QueryInterface, DataTypes } from 'sequelize'
import { id, createdAt, updatedAt } from '../utils/defaultColumns'

module.exports = {
  up: async ({ context: queryInterface }: { context: QueryInterface }) => {
    // create pings table
    await queryInterface.createTable('pings', {
      id,
      message: {
        field: 'message',
        type: DataTypes.TEXT,
        allowNull: true
      },
      createdAt,
      updatedAt
    })

    // create address table (for remote addresses)
    await queryInterface.createTable('addresses', {
      id,
      remoteAddress: {
        field: 'remote_address',
        type: DataTypes.TEXT,
        allowNull: true
      },
      createdAt,
      updatedAt
    })

    // add ping to address relationship column
    await queryInterface.addColumn('pings', 'address_id', {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'addresses', key: 'id' }
    })

  },
  down: async ({ context: queryInterface }: { context: QueryInterface }) => {
    await queryInterface.dropTable('pings')
    await queryInterface.dropTable('addresses')
  },
}