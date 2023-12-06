import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleTextBlockCompoment.module.scss';

interface ArticleTextBlockCompomentProps {
    className?: string;
}

export const ArticleTextBlockCompoment = (props: ArticleTextBlockCompomentProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.ArticleTextBlockCompoment, {}, [className])} />
    );
};
