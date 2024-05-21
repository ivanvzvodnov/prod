import { createSelector } from '@reduxjs/toolkit';
import { SidebarItemType } from '../types/sidebar';
import { getUserAuthData } from '@/entities/User';
import { RoutePath } from '@/shared/const/router';
import AboutIcon from '@/shared/assets/icons/about.svg';
import MainIcon from '@/shared/assets/icons/main.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticlesIcon from '@/shared/assets/icons/articles.svg';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userAuthData) => {
        const sidebarItemList: SidebarItemType[] = [
            {
                path: RoutePath.main,
                Icon: MainIcon,
                text: 'Главная',
            },
            {
                path: RoutePath.about,
                Icon: AboutIcon,
                text: 'О сайте',
            },
        ];

        if (userAuthData) {
            sidebarItemList.push(
                {
                    path: RoutePath.profile + userAuthData.id,
                    Icon: ProfileIcon,
                    text: 'Профиль',
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    Icon: ArticlesIcon,
                    text: 'Статьи',
                    authOnly: true,
                },
            );
        }

        return sidebarItemList;
    },
);
