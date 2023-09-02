import React from 'react';
import { useTranslation } from 'react-i18next';

function MainPage() {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('Главная страница')}
            {' '}
            {t('ger')}
        </div>
    );
}

export default MainPage;
