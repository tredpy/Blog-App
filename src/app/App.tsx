import {useTheme} from './providers/ThemeProvider';
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/AppRouter";
import {Header} from "widgets/Header";
import './styles/index.scss'

const App = () => {
    const {theme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <Header />
            <AppRouter />
        </div>
    );
};

export default App;