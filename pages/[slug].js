import { getReasons, getPages, getBySlug } from '../lib/api';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import markdownToHtml from '../lib/markdownToHtml';
import cx from 'classnames';
import Footer from '../components/Footer';
import Reasons from '../components/Reasons';

const Reason = ({ post, reasons }) => {
  const { number, title, intro, content } = post;

  return (
    <>
      <NextSeo title={title} description={intro} />
      <header className={cx({ alt: number })}>
        <div className='container narrow'>
          <Link href='/'>
            <a>
              <img src='/images/logo.png' />
            </a>
          </Link>
          {number && <strong>Basis Cash Explained</strong>}
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
      </header>
      <main>
        <section>
          <div
            className='container narrow content'
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </section>
        {number && (
          <div className='bg'>
            <Reasons reasons={reasons} horizontal={true} />
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Reason;

export async function getStaticProps({ params }) {
  const post = getBySlug(params.slug, ['number', 'title', 'intro', 'content']);
  const content = await markdownToHtml(post.content || '');

  const reasons = getReasons(['number', 'slug', 'title', 'intro']);

  return {
    props: {
      post: {
        ...post,
        content,
      },
      reasons,
    },
  };
}

export async function getStaticPaths() {
  const reasons = getReasons(['slug']);
  const pages = getPages(['slug']);

  const all = reasons.concat(pages);

  return {
    paths: all.map((item) => {
      return {
        params: {
          slug: item.slug,
        },
      };
    }),
    fallback: false,
  };
}
