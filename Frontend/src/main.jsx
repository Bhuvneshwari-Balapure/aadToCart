import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import App from './App.jsx'
//redux
import store from './redux/store.jsx';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
 <Provider store={store}>
    <App />

 </Provider>
  
)
