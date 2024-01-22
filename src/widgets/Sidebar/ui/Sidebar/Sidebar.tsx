import {
    memo, useCallback, useMemo, useState,
} from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { getSidebarItems } from '../../model/selectors/getSidebaritems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
    const { className } = props;

    const [collapsed, setCollapsed] = useState(false);

    const sidebarItemList = useSelector(getSidebarItems);

    const onToggle = useCallback(() => {
        setCollapsed(!collapsed);
    }, [collapsed]);

    const itemList = useMemo(() => sidebarItemList.map((item) => (
        <SidebarItem item={item} collapsed={collapsed} key={item.path} />
    )), [collapsed, sidebarItemList]);

    return (
        <div
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
            data-testid="sidebar"
        >
            <Button
                type="button"
                onClick={onToggle}
                data-testid="sidebar-toggle"
                className={cls.collapsedBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                {itemList}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </div>
    );
});
