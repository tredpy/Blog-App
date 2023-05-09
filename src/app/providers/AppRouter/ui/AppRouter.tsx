import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { routeConfig } from 'app/providers/AppRouter/config/routeConfig';

const AppRouter = () => {
    const { t } = useTranslation();
    return (
        <Suspense fallback={<div>{t('Загрузка...')}</div>}>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <div className="content">
                                {element}
                            </div>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
