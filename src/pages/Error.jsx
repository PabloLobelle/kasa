import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../style/error.css';

function Error() {

  return (
    <div className="Error">
      <Header />
      <main>
        <div className='errorContainer'>
          <h1 className='errorTitle'>404</h1>
        </div>
        <p className='errorText'> Oups! La page que vous demandez n'existe pas.</p>
        <Link to='/' className='errorLink'>Retourner sur la page d’accueil</Link>
      </main>
    </div>
  );
}

export default Error;
