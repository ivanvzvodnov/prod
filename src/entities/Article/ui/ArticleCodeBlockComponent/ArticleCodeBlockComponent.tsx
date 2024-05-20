import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Code } from '@/shared/ui/Code';
import { ArticleCodeBlock } from '../../model/types/article';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const { className, block } = props;

    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            <Code text={block.code} />
        </div>
    );
});
