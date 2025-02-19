import { Outlet, Link } from 'react-router-dom';
import '../styles/MainLayout.css';

const MainLayout = () => {
    return (
        <>
            <header className="main-header">
                <h1>Movie App</h1>
                <nav>
                    <Link to="/">Главная</Link>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default MainLayout;
