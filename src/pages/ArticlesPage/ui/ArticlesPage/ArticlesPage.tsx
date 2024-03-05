import { ArticleList } from 'entities/Article';
import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader, ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useSelector } from 'react-redux';
import { Page } from 'widgets/Page/Page';
import { useSearchParams } from 'react-router-dom';
import {
    fetchNextArticlesPage,
} from '../../model/services/fetchNexthArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import cls from './ArticlesPage.module.scss';
import { articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice';
import {
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelector';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducerList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlesPage, {}, [className])}>
                <ArticlesPageFilters />
                <ArticleList className={cls.list} isLoading={isLoading} view={view} articles={articles} />
            </Page>
        </DynamicModuleLoader>

    );
};

export default memo(ArticlesPage);
