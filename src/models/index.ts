import Address from './address'
import Ping from './ping'

Ping.belongsTo(Address)
Address.hasMany(Ping)

export default { Address, Ping }