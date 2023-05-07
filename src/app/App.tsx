import {useTheme} from './providers/ThemeProvider';
import {classNames} from "shared/lib/classNames/classNames";
import {Link} from 'react-router-dom';
import {AppRouter} from "app/providers/AppRouter";
import './styles/index.scss'

const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>THEME</button>
            <Link to='/'>MAIN</Link>
            <Link to='/profile'>PROFILE</Link>
            <AppRouter />
        </div>
    );
};

export default App;