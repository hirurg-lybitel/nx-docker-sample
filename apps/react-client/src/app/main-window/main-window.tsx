import { useState } from 'react';
import { useGetDataQuery } from '../features';
import styles from './main-window.module.less';

/* eslint-disable-next-line */
export interface MainWindowProps {}
export function MainWindow(props: MainWindowProps) {
  const [skip, setSkip] = useState(true);
  const {data:films = [], refetch} = useGetDataQuery(undefined, {skip});

  console.log('MainWindow', films);

  const onClick = () => {
    setSkip(false);
  };
  return (
    <div className={styles['container']}>
      <h1>Welcome to MainWindow!</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default MainWindow;
