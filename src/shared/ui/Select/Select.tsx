import { ChangeEvent, memo, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
    const {
        className, label, options, value, readonly, onChange,
    } = props;

    const optionList = useMemo(() => options?.map((opt) => (
        <option className={cls.option} value={opt.value} key={opt.value}>{opt.content}</option>
    )), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) onChange(e.target.value);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && (
                <span className={cls.label}>
                    {`${label}>`}
                </span>
            )}
            <select disabled={readonly} className={cls.select} value={value} onChange={onChangeHandler}>
                {optionList}
            </select>
        </div>
    );
});