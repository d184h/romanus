import React from 'react';
import '../styles/style.css';
import { NavLink, Outlet } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

function NavBar(): JSX.Element {
  const { user } = useSelector((store: RootState) => store.authReducer);
  const dispatch = useDispatch();

  const onHandleLogOut: React.MouseEventHandler<HTMLAnchorElement> = async (
    e
  ): Promise<void> => {
    e.preventDefault();
    await fetch('/api/auth/logout');
    dispatch({ type: 'auth/logout' });
  };
  return (
    <>
      <div className="navbar">
        <ul>
          <a>
            {' '}
            <NavLink className="activee" to="/">
              Главная
            </NavLink>
          </a>
          {user ? (
            <>
              <li>
                <a>
                  {' '}
                  <NavLink to="/game">Игра</NavLink>
                </a>
              </li>
              <li>
                <a>Hello {user?.name}</a>
              </li>
              <li>
                <a>
                  <NavLink
                    onClick={onHandleLogOut}
                    className="nav__button"
                    to="/"
                  >
                    Выход
                  </NavLink>
                </a>
              </li>
            </>
          ) : (
            <>
              <a>
                {' '}
                <NavLink to="/login">Авторизация</NavLink>
              </a>
              <a>
                {' '}
                <NavLink to="/registration">Регистрация</NavLink>
              </a>
            </>
          )}
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
