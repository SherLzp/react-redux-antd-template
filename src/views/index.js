import Loadable from 'react-loadable'
import { Loading } from '../components'

//Component lazy init
const NotFound = Loadable({
    loader: () => import('./NotFound'),
    loading: Loading
})

export {
    NotFound,
}