import { QueryInterface, DataTypes, literal } from 'sequelize'

module.exports = {
  up: async ({ context: queryInterface }: { context: QueryInterface }) => {
    await queryInterface.createTable('pings', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      type: {
        type: DataTypes.TEXT,
        allowNull: true
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
  },
  down: async ({ context: queryInterface }: { context: QueryInterface }) => {
    await queryInterface.dropTable('pings')
  },
}