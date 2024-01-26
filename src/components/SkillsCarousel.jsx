import '../sass/SkillsCarousel.scss';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';

function SkillsCarousel() {
  const numImages = [
    {
      title: 'Front End',
      index: 0,
      dialoge: 'I learned about Front End in Bootcamp',
      src: '/1.png',
      value: 3.5,
    },
    {
      title: 'Back End',
      index: 1,
      dialoge: 'I learned about Back End in Bootcamp',
      src: '/2.png',
      value: 3,
    },
    {
      title: 'Logo Maker',
      index: 2,
      dialoge: 'I learned about Logo Maker in through exposure in creating projects',
      src: '/3.png',
      value: 4,
    },
    {
      title: 'Ai Content',
      index: 3,
      dialoge: 'I learned about Ai Content in through self study',
      src: '/4.png',
      value: 4,
    },
  ];

  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(index === selectedCard ? null : index);
  };

  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
      {numImages.map((image, index) => (
        <Card
          key={image.index}
          className={`sticky-card ${selectedCard === index ? 'clicked' : ''}`}
          sx={{
            maxWidth: 345,
            boxShadow: selectedCard === index ? '0 4px 0px rgb(0,255,161)' : '0 4px 8px rgba(0,0,0,0.2)',
            background: 'rgb(0,15,26)',
            padding: '2rem',
            transform: selectedCard === index ? ' scale(1.05)' : 'none',
          }}
          onClick={() => handleCardClick(index)}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              style={{ height: '200 rem', width: '100%', background: 'rgb(0,15,26)' }}
              image={image.src}
              alt={image.title}
            />
            <Box
              sx={{
                position: 'absolute',
                top: '92%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
              }}
            >
              <Typography component="legend"></Typography>
              <Rating
                name="simple-controlled"
                value={image.value}
                precision={0.5}
              />
            </Box>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}

export default SkillsCarousel;
