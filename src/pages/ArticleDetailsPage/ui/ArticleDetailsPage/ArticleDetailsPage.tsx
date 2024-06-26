import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ArticleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetails } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/Stack';
import { ArticleReccomendationsList } from '@/features/articleReccomendationsList';
import { ArticleRating } from '@/features/articleRating';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/Card';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducerList: ReducerList = {
    articleDetailsPage: ArticleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');

    const { id } = useParams<{ id: string }>();

    if (!id) {
        return null;
    }

    return (
        <DynamicModuleLoader reducers={reducerList} removeAfterUnmount>
            <Page
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                <VStack gap="16" max>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <ToggleFeatures
                        name="isArticleRatingEnabled"
                        on={<ArticleRating articleId={id} />}
                        off={<Card>{t('Оценка статей скоро появится!')}</Card>}
                    />
                    <ArticleReccomendationsList />
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default ArticleDetailsPage;
