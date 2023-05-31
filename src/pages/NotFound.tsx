import { useTranslation } from 'react-i18next';
import styles from './NotFound.module.scss';
import { Localization } from '../enums/Localization';
import { auth } from '../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { Paths } from '../enums/Paths';

const NotFound = () => {
  const { t } = useTranslation();
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate(Paths.ROOT);
    }
  }, [user, loading, navigate]);

  return (
    <h1 className={styles.notFound}>
      404 <br></br>
      {t(Localization.NOT_FOUND)}
    </h1>
  );
};

export default NotFound;
