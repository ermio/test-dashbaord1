import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import cx from 'classnames';
import PropTypes from 'prop-types';

const Reasons = ({ reasons, horizontal }) => {
  const router = useRouter();
  const current = router.query.slug;

  const containerEl = useRef(null);
  const currentEl = useRef(null);

  useEffect(() => {
    const container = containerEl.current;
    const current = currentEl.current;

    if (container && current) {
      const offset = container.offsetWidth / 2 - current.offsetWidth / 2;

      container.scrollTo(current.offsetLeft - offset, 0);
    }
  }, [current]);

  return (
    <ol
      ref={containerEl}
      className={cx(
        { 'reasons-horizontal': horizontal },
        { reasons: !horizontal }
      )}
    >
      {reasons.map(({ number, slug, title, intro }) => {
        const active = slug === current;
        return (
          <li key={number} ref={active ? currentEl : null}>
            <Link href={`/${slug}`}>
              <a
                className='reason'
                className={cx('reason', { active: active })}
              >
                <div className='reason-index'>
                  <div>
                    <span>{number}</span>
                  </div>
                </div>
                <div className='reason-title'>{title}</div>
                <div className='reason-intro'>{intro}</div>
              </a>
            </Link>
          </li>
        );
      })}
      {horizontal && <li />}
    </ol>
  );
};

Reasons.defaultProps = {
  horizontal: false,
};

Reasons.propTypes = {
  horizontal: PropTypes.bool,
};

export default Reasons;
