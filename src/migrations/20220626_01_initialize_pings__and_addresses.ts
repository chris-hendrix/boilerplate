import { QueryInterface, DataTypes, literal } from 'sequelize'

module.exports = {
  up: async ({ context: queryInterface }: { context: QueryInterface }) => {
    // create pings table
    await queryInterface.createTable('pings', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      pingType: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      createdAt: {
        type: 'TIMESTAMP',
        defaultValue: literal('CURRENT_TIMESTAMP'),
        allowNull: false,
      },
      updatedAt: {
        type: 'TIMESTAMP',
        defaultValue: literal('CURRENT_TIMESTAMP'),
        onUpdate: String(literal('CURRENT_TIMESTAMP')),
        allowNull: false,
      },
    })

    // create address table (for remote addresses)
    await queryInterface.createTable('addresses', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      remoteAddress: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      createdAt: {
        type: 'TIMESTAMP',
        defaultValue: literal('CURRENT_TIMESTAMP'),
        allowNull: false,
      },
      updatedAt: {
        type: 'TIMESTAMP',
        defaultValue: literal('CURRENT_TIMESTAMP'),
        onUpdate: String(literal('CURRENT_TIMESTAMP')),
        allowNull: false,
      },
    })

    // add ping to address relationship column
    await queryInterface.addColumn('pings', 'address_id', {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'addresses', key: 'id' }
    })

  },
  down: async ({ context: queryInterface }: { context: QueryInterface }) => {
    await queryInterface.dropTable('addresses')
    await queryInterface.dropTable('pings')
  },
}