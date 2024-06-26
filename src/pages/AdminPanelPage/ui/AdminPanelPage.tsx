import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

function AdminPanelPage() {
    const { t } = useTranslation('about');

    return <Page data-testid="AdminPanelPage">{t('Админ панель')}</Page>;
}

export default memo(AdminPanelPage);
