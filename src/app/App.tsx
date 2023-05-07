import {useTheme} from './providers/ThemeProvider';
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/AppRouter";
import './styles/index.scss'
import {Header} from "widgets/Header";

const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <Header />
            <AppRouter />
            <button onClick={toggleTheme}>THEME</button>
        </div>
    );
};

export default App;