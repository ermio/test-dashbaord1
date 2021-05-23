import { useRouter } from 'next/router';
import Link from 'next/link';
import cx from 'classnames';

const Footer = () => {
  const router = useRouter();
  const home = router.pathname === '/';

  return (
    <footer className={cx({ 'page-home': home })}>
      <div className='container narrow'>
        <h2>Ready to get started with Basis Cash?</h2>
        <a href='https://basis.cash' className='button'>
          Connect to the Basis Cash App
        </a>
      </div>
      <ul>
        <li>
          <Link href='/about'>
            <a>About this site</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
