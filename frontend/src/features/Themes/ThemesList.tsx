import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import ThemesItem from './ThemeItem';

function ThemesList(): JSX.Element {
  const { themes } = useSelector((store: RootState) => store.themeReducer);
//   console.log(themes);

  return (
    <div>
        {themes.map((theme) => (
          <ThemesItem theme={theme} key={theme.id} />
        ))}
    </div>
  );
}

export default ThemesList;
