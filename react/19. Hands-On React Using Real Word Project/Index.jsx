import {createRoot} from 'react-dom/client'
import App from './App'
import Header from './components/Header'

const root = createRoot(document.querySelector('#root'))

root.render(
    <div >
        <App/>
       
    </div>
)