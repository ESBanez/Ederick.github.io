import '../sass/SkillsCarousel.scss';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

// import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions } from '@mui/material';
// import CardContent from '@mui/material/CardContent';


function SkillsCarousel() {
  const numImages = [
    {
      title: 'Front End',
      index: 0,
      dialoge: 'I learned about Front End in Bootcamp',
      src: '/1.png',
    },
    {
      title: 'Back End',
      index: 1,
      dialoge: 'I learned about Back End in Bootcamp',
      src: '/2.png',
    },
    {
      title: 'Logo Maker',
      index: 2,
      dialoge: 'I learned about Logo Maker in through exposure in creating projects',
      src: '/3.png',
    },
    {
      title: 'Ai Content',
      index: 3,
      dialoge: 'I learned about Ai Content in through self study',
      src: '/4.png',
    },
  ];

  return (
  <div className="container" style={{display: "flex", justifyContent:"space-between"}}>
    {numImages.map((image) => (
        <Card key={image.index} className="sticky-card" sx={{ maxWidth: 345, boxShadow: '0 4px 0px rgb(0,255,161)', backGround:"rgb(4,13,18)"  }}>
          <CardActionArea>
            <CardMedia
              component="img"
              style={{ height: 250, width: '100%', backGround:"rgb(4,13,18)"}}
              image={image.src}
              alt={image.title}
            />
            {/* <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {image.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {image.dialoge}
              </Typography>
            </CardContent> */}
          </CardActionArea>
          {/* <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions> */}
        </Card>
      ))}
    </div>
  );
}

export default SkillsCarousel;
