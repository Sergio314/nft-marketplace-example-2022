import * as React from 'react';
import { useCallback } from 'react';
import { Form, FormikContext, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import dynamic from 'next/dynamic';

import { paths } from '@/data/paths';
import { Input } from '@/shared/components/Input';
import { Button } from '@/shared/components/Button';
import { FormPopup } from '@/shared/components/FormPopup';
import { RichTextEditor } from '@/shared/components/RtfEditor';
import { useTypedSelector } from '@/core/hooks/useTypedSelector';
import { actionSendAvatar } from '@/modules/CreateAvatarPage/actions';
import { actionSaveAvatarDraft } from '../../actions';
import { validateAvatar } from '../../utils';
import { ArrowButton } from '../ArrowButton';

import styles from './CreateAvatarForm.module.scss';

const ModelViewer: any = dynamic(() => import('../AvatarViewer/AvatarViewer'), { ssr: false });

export const CreateAvatarForm = (): any => {
  // const subdomain = 'fullbody'; /* for fullbody avatars, no customizing possible on our side apart from size */
  const router = useRouter();
  const dispatch = useDispatch();
  const subdomain = 'demo';
  const iFrameRef = React.useRef(null);
  const [avatarUrl, setAvatarUrl] = React.useState('');
  const [isSuccessPopupOpened, setIsSuccessPopupOpened] = React.useState(false);
  const [isFailPopupOpened, setIsFailPopupOpened] = React.useState(false);

  const { isExist, user } = useTypedSelector(({ authReducer }) => authReducer);

  const handleAvatarForm = async (values: any, { setErrors }) => {
    if (isExist && user) {
      try {
        await actionSendAvatar(values);
        setIsSuccessPopupOpened(true);
      } catch (e) {
        setErrors({ name: e.message });
      }
    } else {
      setIsFailPopupOpened(true);
    }
  };

  const failPopupClick = () => {
    dispatch(actionSaveAvatarDraft(createAvatarForm.values));
    setIsSuccessPopupOpened(false);
    router.push(paths.login);
  };
  const successPopupClick = () => {
    setIsSuccessPopupOpened(false);
    router.push('/');
    // must be Avatar gallery
  };

  const handleBackToEdit = useCallback(() => {
    setAvatarUrl('');
    createAvatarForm.setFieldValue('glbSource', '');
  }, []);

  React.useEffect(() => {
    let iFrame: any = iFrameRef.current;
    if (iFrame) {
      iFrame.src = `https://${subdomain}.readyplayer.me/avatar?clearCache=true&frameApi`;
    }
  });

  const subscribe = (event: any) => {
    const json = parse(event);
    if (json?.source !== 'readyplayerme') {
      return;
    }
    // Subscribe to all events sent from Ready Player Me
    // once frame is ready
    if (json.eventName === 'v1.frame.ready') {
      let iFrame: any = iFrameRef.current;
      if (iFrame && iFrame.contentWindow) {
        iFrame.contentWindow.postMessage(
          JSON.stringify({
            target: 'readyplayerme',
            type: 'subscribe',
            eventName: 'v1.**',
          }),
          '*',
        );
      }
    }
    // Get avatar GLB URL
    if (json.eventName === 'v1.avatar.exported') {
      createAvatarForm.setFieldValue('glbSource', json.data.url);
    }
  };

  const parse = (event: any) => {
    try {
      return JSON.parse(event.data);
    } catch (error) {
      return null;
    }
  };

  React.useEffect(() => {
    window.addEventListener('message', subscribe);
    document.addEventListener('message', subscribe);
    return () => {
      window.removeEventListener('message', subscribe);
      document.removeEventListener('message', subscribe);
    };
  });

  const createAvatarForm = useFormik({
    initialValues: {
      name: '',
      description: '',
      glbSource: avatarUrl,
      creatorId: user ? user.id : '',
    },
    validate: validateAvatar,
    onSubmit: handleAvatarForm,
    enableReinitialize: true,
  });

  const handleRTFChange = useCallback(
    (value: any) => {
      createAvatarForm.setFieldValue('description', value, true);
    },
    [createAvatarForm],
  );

  return (
    <div className={styles['create-avatar-page']}>
      {!createAvatarForm?.values?.glbSource && (
        <div>
          <ArrowButton text='Back to Avatar Gallery' href='/' className={styles.back_arrow} />
          <iframe
            allow='camera *; microphone *'
            id='frame'
            ref={iFrameRef}
            style={{
              display: 'block',
              border: 'none',
            }}
            title={'Ready Player Me'}
            className={styles.player}
          />
        </div>
      )}
      <FormikContext.Provider value={createAvatarForm}>
        <Form onSubmit={createAvatarForm.handleSubmit} noValidate>
          {createAvatarForm?.values?.glbSource && (
            <>
              <ArrowButton text='Back to Avatar editor' onClick={handleBackToEdit} className={styles.back_arrow} />
              <h3>Your avatar is almost ready, just add a description!</h3>
              <div className={styles['create-avatar-page__body']}>
                <ModelViewer glbSource={createAvatarForm.values.glbSource} className={styles['create-avatar-page__body__upper']} />
                <div className={styles['create-avatar-page__body__form']}>
                  <Input
                    type='text'
                    placeholder='Enter item name'
                    name='name'
                    label='Item Name *'
                    required
                    id='avatar-name'
                    onChange={createAvatarForm.handleChange}
                    value={createAvatarForm.values.name}
                    onBlur={createAvatarForm.handleBlur}
                    error={createAvatarForm.errors.name as string}
                  />
                  <RichTextEditor
                    id='avatar-description'
                    name='description'
                    placeholder='Type avatar description'
                    onChange={handleRTFChange}
                    value={createAvatarForm.values.description}
                    label='Description'
                    onBlur={createAvatarForm.handleBlur}
                    initialValue={createAvatarForm.initialValues.description}
                    error={createAvatarForm.errors.description as string}
                  />
                  <Button contained type='submit' className={styles['create-avatar-page__body__button']} disabled={createAvatarForm.isSubmitting}>
                    Save
                  </Button>
                </div>
              </div>
            </>
          )}
        </Form>
      </FormikContext.Provider>
      {isSuccessPopupOpened && <div className={styles.blur} />}
      {isFailPopupOpened && <div className={styles.blur} />}
      {isSuccessPopupOpened && (
        <FormPopup
          buttonText='Go to Avatar Gallery'
          coreText='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour'
          headerText='Successfully!'
          isModalOpen={isSuccessPopupOpened}
          handleClose={successPopupClick}
          onButtonClick={successPopupClick}
        />
      )}
      {isFailPopupOpened && (
        <FormPopup
          buttonText='Go to Sign In'
          coreText="You aren't logged in. You should log in or sign up"
          headerText='Failed!'
          isModalOpen={isFailPopupOpened}
          handleClose={failPopupClick}
          onButtonClick={failPopupClick}
        />
      )}
    </div>
  );
};
