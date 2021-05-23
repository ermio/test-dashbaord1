import Footer from '../components/Footer';
import { getReasons } from '../lib/api';
import Reasons from '../components/Reasons';

const Home = ({ reasons }) => {
  return (
    <>
      <header className='bg'>
        <div className='container narrow'>
          <img src='/images/logo.png' />
          <strong>A Beginner’s Guide to</strong>
          <h1>Basis Cash</h1>
          <p>An open-source, permissionless algorithmic stablecoin</p>
        </div>
      </header>
      <main>
        <section className='bg'>
          <div className='container'>
            <Reasons reasons={reasons} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const reasons = getReasons(['number', 'slug', 'title', 'intro']);

  return {
    props: { reasons },
  };
}
