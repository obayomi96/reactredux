import { Button, Box,Typography, Modal } from '@mui/material';

export default function BasicModal({isOpen}) {
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  return (
    <div>
      <Button>Open modal</Button>
      <Modal
        open={isOpen}
        onClose={!isOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
        <Box>
          <Button variant="contained" >Create User</Button>
        </Box>
      </Modal>
    </div>
  );
}