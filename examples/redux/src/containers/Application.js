import { connect } from 'react-redux'
import Application from '../components/Application.js'

const mapStateToProps = (state) => {
  const { slides } = state

  return {
    slides
  }
}

export default connect(mapStateToProps)(Application)
