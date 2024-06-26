import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppRouter } from './providers/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserInited, userActions } from '@/entities/User';
import { useTheme } from '@/shared/lib/hooks/useTheme';

export function App() {
    const dispatch = useDispatch();
    const { theme } = useTheme();

    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);


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
