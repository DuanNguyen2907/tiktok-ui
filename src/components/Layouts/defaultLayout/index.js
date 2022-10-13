import classNames from 'classnames/bind';
import Header from '~/components/Layouts/components/Header';
import Sidebar from './Sidebar';
import styles from './defaultLayout.module.scss';

const cx = classNames.bind(styles);

function defaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default defaultLayout;
