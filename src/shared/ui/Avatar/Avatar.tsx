import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = (props: AvatarProps) => {
    const {
        className, src, size, alt,
    } = props;

    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    return (
        <img
            src={src}
            className={classNames(cls.Avatar, {}, [className])}
            style={styles}
            alt={alt}
        />
    );
};
