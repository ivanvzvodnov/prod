import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className, articles, view = ArticleView.SMALL, isLoading,
    } = props;

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
        />
    );

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                {
                    new Array(view === ArticleView.SMALL ? 9 : 3)
                        .fill(0)
                        .map((item, index) => (
                            <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
                        ))
                }
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {
                articles.length
                    ? articles.map(renderArticle)
                    : null
            }
        </div>
    );
});
