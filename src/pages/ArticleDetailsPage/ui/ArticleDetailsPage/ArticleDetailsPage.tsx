import { ArticleDetails } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');

    const { id } = useParams<{id: string}>();

    if (!id) {
        return (
            <div className={classNames('', {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames('', {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
};

export default ArticleDetailsPage;
