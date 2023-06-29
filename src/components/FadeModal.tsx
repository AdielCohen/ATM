import * as React from 'react';
import { Transition } from 'react-transition-group';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';

export default function FadeModal({ OutButton }: { OutButton: JSX.Element }) {
  const [open, setOpen] = React.useState<boolean>(false);
  const languages = [
    'עברית',
    'English',
    'العربية',
    'Italiano',
    'Português',
    'Deutsch',
    'ภาษาไทย',
    'Español',
    'Français',
    'Русский',
  ];
  
  const handleButtonClick = () => setOpen(true);
  const handleLinkClick = () => setOpen(false);

  return (
    <React.Fragment>
      {React.cloneElement(OutButton, {
        onClick: handleButtonClick,
      })}
      <Transition in={open} timeout={400}>
        {(state: string) => (
          <Modal
            keepMounted
            open={!['exited', 'exiting'].includes(state)}
            onClose={() => setOpen(false)}
            slotProps={{
              backdrop: {
                sx: {
                  opacity: 0,
                  backdropFilter: 'none',
                  transition: `opacity 400ms, backdrop-filter 400ms`,
                  ...{
                    entering: { opacity: 1, backdropFilter: 'blur(8px)' },
                    entered: { opacity: 1, backdropFilter: 'blur(8px)' },
                  }[state],
                },
              },
            }}
            sx={{
              visibility: state === 'exited' ? 'hidden' : 'visible',
            }}
          >
            <ModalDialog
              aria-labelledby="fade-modal-dialog-title"
              aria-describedby="fade-modal-dialog-description"
              sx={{
                opacity: 0,
                transition: `opacity 300ms`,
                ...{
                  entering: { opacity: 1 },
                  entered: { opacity: 1 },
                }[state],
              }}
            >
              <Typography id="fade-modal-dialog-title" component="h2" style={{textAlign: 'right'}}>
                יש לבחור שפת מערכת
              </Typography>
              <Typography
                id="fade-modal-dialog-description"
                textColor="text.tertiary"
              >
              {languages.map((language, index) => (
                <React.Fragment key={index}>
                  <u onClick={handleLinkClick} style={{ cursor: 'pointer' }}>
                    {language}
                  </u>
                  {index < languages.length - 1 && ' '}
                </React.Fragment>
              ))}
              </Typography>
            </ModalDialog>
          </Modal>
        )}
      </Transition>
    </React.Fragment>
  );
}