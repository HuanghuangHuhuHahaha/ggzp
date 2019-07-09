import {connect} from 'react-redux'
import App from '../components/app/app'
import {} from '../redux/actions'


export default connect(
    state => ({count:state})
)(App)


