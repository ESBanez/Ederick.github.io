import PropTypes from 'prop-types';  // Import PropTypes

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function SkillCard({ skill, selected, onClick }) {
  return (
    <Card
      className={`sticky-card ${selected ? 'clicked' : ''}`}
      sx={{
        maxWidth: 250,
        boxShadow: selected ? '1px 4px 20px rgb(0,255,161)' : '0 4px 8px rgba(0,0,0,0.2)',
        background: 'rgb(0,15,26)',
        padding: '2rem',
        transform: selected ? 'scale(1)' : 'none',
        transition: 'box-shadow 0.3s ease-in-out',
        animation: selected ? 'flicker 2s ease-in-out infinite' : 'none',
        '@keyframes flicker': {
          '0%, 100%': {
            boxShadow: '1px 4px 20px rgb(0,255,161)',
          },
          '50%': {
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          },
        },
      }}
      onClick={onClick}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          style={{ height: '70 rem', width: '100%', background: 'rgb(0,15,26)' }}
          image={skill.src}
          alt={skill.title}
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
            value={skill.value}
            precision={0.5}
          />
        </Box>
      </CardActionArea>
    </Card>
  );
}

// Add PropTypes validation
SkillCard.propTypes = {
  skill: PropTypes.shape({
    title: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    dialog: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }).isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SkillCard;
