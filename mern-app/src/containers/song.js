import { connect } from 'react-redux'
import Songs from '../components/Songs'

const wrapperFunction = connect()
const SongSheet  = wrapperFunction(Songs)

// another way to write the above: const SongSheet = connect() (Songs)

export default SongSheet