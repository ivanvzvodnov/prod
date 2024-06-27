import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppRouter } from './providers/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserInited, initAuthData } from '@/entities/User';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { PageLoader } from '@/widgets/PageLoader';

export function App() {
    const dispatch = useAppDispatch();
    const { theme } = useTheme();

    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!inited) {
        return <PageLoader />
    }

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}
