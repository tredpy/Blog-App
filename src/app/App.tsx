import {useTheme} from "./providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/AppRouter";
import {Header} from "widgets/Header";
import {SideBar} from "widgets/SideBar";
import {Suspense} from "react";
import './styles/index.scss'

const App = () => {
    const {theme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <Header/>
                <div className='wrapper'>
                    <SideBar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;