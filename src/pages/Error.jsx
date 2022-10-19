import { Link } from 'react-router-dom';
import '../style/index.css';
import Header from '../components/Header';

function Error() {

  return (
    <div className="Error">
      <Header />
      <section>
        <h1 className='error__title'>404</h1>
        <p className='error__text'> Oups! La page que vous demandez n'existe pas.</p>
        <Link to='/' className='error__link'>Retourner sur la page d’accueil</Link>
      </section>
    </div>
  );
}

export default Error;
