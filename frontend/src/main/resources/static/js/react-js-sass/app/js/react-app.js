import reactor from './reactor';
import Store from './stores/Store';
import UserListComponent from './components/UserListComponent';

reactor.registerStores({store: Store});

const App = () => (
  <div>
    <div>React Application render here</div>
    <br/>
    <UserListComponent />
  </div>
);

ReactDOM.render(
  <App />,
  document.querySelector('#react')
);