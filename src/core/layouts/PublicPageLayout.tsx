import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Wrapper } from '../components/Wrapper';
import { Footer } from '../containers/Footer';
import { Header } from '../containers/Header';
import { actionCheckSession } from '@/modules/Auth/actions';
import { useTypedSelector } from '@/core/hooks/useTypedSelector';
import { actionSendAvatar, clearDraft } from '@/modules/CreateAvatarPage/actions';

interface IPublicPageLayout {
  children: React.ReactNode;
  withoutWrapper?: boolean;
}

const PublicPageLayout = ({ children, withoutWrapper }: IPublicPageLayout): JSX.Element => {
  const dispatch = useDispatch();
  const { user, isExist } = useTypedSelector(({ authReducer }) => authReducer);
  const { draft } = useTypedSelector(({ avatarReducer }) => avatarReducer);
  useEffect(() => {
    dispatch(actionCheckSession() as any);
  }, [dispatch]);

  useEffect(() => {
    if (user && isExist && draft) {
      (async () => {
        await actionSendAvatar({ ...draft, creatorId: user.id });
      })();
      dispatch(clearDraft());
    }
  }, [user, isExist, draft]);

  return (
    <>
      <Header />
      {withoutWrapper ? <>{children}</> : <Wrapper>{children}</Wrapper>}
      <Footer />
    </>
  );
};

export default PublicPageLayout;
