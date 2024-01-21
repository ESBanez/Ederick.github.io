import '../sass/SkillsCarousel.scss'; // Make sure to adjust the path to your actual stylesheet
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import * as React from 'react';



const styles = {
  neon: '#00FFA1',
  blacky: '#040D12',
  darkgreen: '#183D3D',
  blue: '#000F1A',
  green: '#5C8374',
  grey: '#93B1A6',
};


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(2),
    },
  }));
  

function SkillsCarousel() {
    const [open, setOpen] = React.useState(false);
    const [selectedImage, setSelectedImage] = React.useState(null);
  
    const handleClickOpen = (image) => {
      setSelectedImage(image);
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  const numImages = [
    {
      title: "Front End",
      index: 0,
      dialoge: "I learned about Front End in Bootcamp",
      src: "/1.png",
    },
    {
      title: "Back End",
      index: 1,
      dialoge: "I learned about Back End in Bootcamp",
      src: "/2.png",
    },
    {
      title: "Logo Maker",
      index: 2,
      dialoge: "I learned about Logo Maker in through exposure in creating projects",
      src: "/3.png",
    },
    {
      title: "Ai Content",
      index: 3,
      dialoge: "I learned about Ai Content in through self study",
      src: "/4.png",
    },
        {
      title: "Front End",
      index: 4,
      dialoge: "I learned about Front End in Bootcamp",
      src: "/1.png",
    },
    {
      title: "Back End",
      index: 5,
      dialoge: "I learned about Back End in Bootcamp",
      src: "/2.png",
    },
    {
      title: "Logo Maker",
      index: 6,
      dialoge: "I learned about Logo Maker in through exposure in creating projects",
      src: "/3.png",
    },
    {
      title: "Ai Content",
      index: 7,
      dialoge: "I learned about Ai Content in through self study",
      src: "/4.png",
    },
    
  ];

 
  return (
    <>
      <React.Fragment>
        <div>
          <article style={{ backgroundColor: styles.blacky, cursor: 'pointer' }}>
            <div className="gallery">
              {numImages.map((image) => (
                <aside
                  key={image.index + 1}
                  style={{ "--i": image.index + 1 }}
                  onClick={() => handleClickOpen(image)}
                >
                  <img src={image.src} alt={image.title} />
                </aside>
              ))}
            </div>
          </article>
        </div>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          sx={{color: "black"}}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            {selectedImage?.title}
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: "black",
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <Typography gutterBottom>{selectedImage?.dialoge}</Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Close
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </React.Fragment>
      <br/><br/><br/><br/><br/>
    </>
  );
}
export default SkillsCarousel;
