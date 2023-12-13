import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockCompoment.module.scss';

interface ArticleTextBlockCompomentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockCompoment = memo((props: ArticleTextBlockCompomentProps) => {
    const { className, block } = props;

    return (
        <div className={classNames(cls.ArticleTextBlockCompoment, {}, [className])}>
            {block.title && (
                <Text title={block.title} className={cls.title} />
            )}
            {block.paragraphs.map((paragraph) => (
                <Text key={paragraph} text={paragraph} className={cls.paragraph} />
            ))}
        </div>
    );
});
