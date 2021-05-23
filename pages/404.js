import Link from 'next/link';
import Footer from '../components/Footer';

const Container = {
  margin: '10px auto',
  maxWidth: '600px',
  textAlign: 'center',
};

const Heading = {
  margin: '30px 0',
  fontSize: '4em',
  lineHeight: 1,
  letterSpacing: '-1px',
};

const NotFound = () => {
  return (
    <>
      <header>
        <div className='container narrow'>
          <Link href='/'>
            <a>
              <img src='/images/logo.png' />
            </a>
          </Link>
        </div>
      </header>
      <main>
        <section>
          <div style={Container}>
            <h1 style={Heading}>404</h1>
            <p>
              <strong>Page not found :(</strong>
            </p>
            <p>The requested page could not be found.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
