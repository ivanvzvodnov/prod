import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useArticleRecommendationList } from '../../api/articleRecommendationsApi';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleList } from '@/entities/Article';
import { Text, TextSize } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';

interface ArticleReccomendationsListProps {
    className?: string;
}

export const ArticleReccomendationsList = memo(
    (props: ArticleReccomendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation();

        const {
            data: articles,
            isLoading,
            error,
        } = useArticleRecommendationList(3);

        if (isLoading || error || !articles) return null;

        return (
            <VStack
                gap="8"
                className={classNames('', {}, [className])}
                data-testid="ArticleReccomendationsList"
            >
                <Text size={TextSize.L} title={t('Рекомендуем')} />
                <ArticleList
                    articles={articles}
                    isLoading={isLoading}
                    target="_blank"
                />
            </VStack>
        );
    },
);
