import React, { useState } from 'react';
import { Container, Grid, Typography, Box, Breadcrumbs, Link, IconButton } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LaunchIcon from '@mui/icons-material/Launch';

//Images
import gmtk2026 from '../../assets/images/GameJamsPrototypes/gmtk2026.png';
import gameplay2 from '../../assets/images/GameJamsPrototypes/gameplay2.png';
import gameplay3 from '../../assets/images/GameJamsPrototypes/gameplay3.png';
import gameplay4 from '../../assets/images/GameJamsPrototypes/gameplay4.png';

const jamImages = [
{ src: gmtk2026, alt: 'Interface view 1' },
{ src: gameplay2, alt: 'Gameplay view 2' },
{ src: gameplay3, alt: 'Gameplay view 3' },
{ src: gameplay4, alt: 'Gameplay view 4' },
];

export function GameJamCarousel({ images = jamImages }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  
  if (!images || images.length === 0) return null;
  
  return (
      <Box
          sx={{
            position: 'relative',
            border: '1px solid #333',
            borderRadius: '12px',
            overflow: 'hidden',
            width: '100%',
            '&:hover .carousel-arrow': { opacity: 1 } // Show arrows on hover
          }}
      >
        {/* Active Image */}
        <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            style={{
              width: '100%',
              height: '350px', // Set your desired fixed height here (e.g., 300px, 350px, 400px)
              display: 'block',
              objectFit: 'cover' // Crops the image cleanly to fit without distortion
            }}
        />
  
        {/* Show controls only if there is more than 1 image */}
        {images.length > 1 && (
            <>
              {/* Previous Button */}
              <IconButton
                  className="carousel-arrow"
                  onClick={handlePrev}
                  aria-label="Previous image"
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '12px',
                    transform: 'translateY(-50%)',
                    color: '#fff',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    opacity: 0,
                    transition: 'opacity 0.2s ease, background-color 0.2s ease',
                    '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.85)' }
                  }}
              >
                <ArrowBackIosNewIcon fontSize="small" />
              </IconButton>
  
              {/* Next Button */}
              <IconButton
                  className="carousel-arrow"
                  onClick={handleNext}
                  aria-label="Next image"
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    right: '12px',
                    transform: 'translateY(-50%)',
                    color: '#fff',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    opacity: 0,
                    transition: 'opacity 0.2s ease, background-color 0.2s ease',
                    '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.85)' }
                  }}
              >
                <ArrowForwardIosIcon fontSize="small" />
              </IconButton>
  
              {/* Pagination Indicators / Dots */}
              <Box
                  sx={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: '8px',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    backdropFilter: 'blur(4px)'
                  }}
              >
                {images.map((_, idx) => (
                    <Box
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        sx={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: idx === currentIndex ? '#fff' : 'rgba(255, 255, 255, 0.3)',
                          cursor: 'pointer',
                          transition: 'background-color 0.2s ease'
                        }}
                    />
                ))}
              </Box>
            </>
        )}
      </Box>
  );
}

function GameJamsPrototypes(){
    const codeBlock = `// Flask API Vector Matcher Pipeline
@app.route('/api/search', methods=['POST'])
def search_movies():
    query = request.json.get('query')
    # Generate vector representation using OpenAI's API
    query_vector = openai.Embedding.create(
        input=query, 
        model="text-embedding-ada-002"
    )['data'][0]['embedding']
    
    # Query Qdrant vector database for semantic nearest neighbors
    results = qdrant_client.search(
        collection_name="movies",
        query_vector=query_vector,
        limit=5
    )
    return jsonify(results)`;
    
    return (
    <Container maxWidth="lg" sx={{ pt: 12, pb: 8 }}>
      {/* Simple Breadcrumb Navigation to easily jump home */}
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 4, color: '#aaa' }}>
        <Link component={RouterLink} to="/" underline="hover" color="inherit">
          Home
        </Link>
        <Typography color="text.primary" sx={{ color: '#fff' }}>Game Jam project dives</Typography>
      </Breadcrumbs>

      {/* Main Title Block */}
      <Box sx={{ mb: 6 }}>
        <Typography
            variant="h2"
            component="h1"
            fontWeight="bold"
            gutterBottom
            sx={{
              color: 'var(--card-text-color)', // Automatically uses your dark/light mode text color
              transition: 'color 0.3s ease'
            }}
        >
          Game Jams
        </Typography>
        <Typography
            variant="h6"
            sx={{
              color: 'var(--accent-color, #8a2be2)', // Uses your accent variable (or fallback)
              fontFamily: 'monospace',
              transition: 'color 0.3s ease'
            }}
        >
          Rapid prototyping // Gameplay programming // Team skills
        </Typography>
      </Box>
      
      {/* Section Header */}
      <Box sx={{ mb: 4 }}>
        {/* Title */}
        <Typography variant="h3" fontWeight="bold" sx={{ color: '#fff', mb: 1 }}>
          GMTK 2026: CHRONOPHOBIA
        </Typography>
        
        {/* Description */}
        <Typography variant="body1" sx={{ color: '#aaa', mb: 3, lineHeight: 1.7 }}>
          This was my first Game Jam. I was responsible for implementing time-related game mechanics,
          building the UI framework, creating visual effects, and streamlining team workflow via GitHub.
          Built with Unity and C#.
        </Typography>

        {/* Section Container without background */}
        <Box sx={{ mb: 4 }}>
          <Grid container spacing={4}>
            {/* Challenges Faced */}
            <Grid item xs={12} md={6}>
              <Box sx={{ pl: 2, borderLeft: '2px solid #333' }}>
                <Typography
                    variant="overline"
                    sx={{ color: '#888', letterSpacing: '1.5px', fontWeight: 'bold' }}
                >
                  CHALLENGES FACED
                </Typography>

                <Box sx={{ mt: 1.5, display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box>
                    <Typography
                        variant="overline"
                        sx={{ color: '#888', letterSpacing: '1.5px', fontWeight: 'bold' }}
                    >
                      Large-Scale Git Management
                    </Typography>
                    <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                      Coordinated version control for a 13-person team, actively resolving merge conflicts and maintaining repository stability.
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                        variant="overline"
                        sx={{ color: '#888', letterSpacing: '1.5px', fontWeight: 'bold' }}
                    >
                      96-Hour Scope & Sprint
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#aaa', lineHeight: 1.6 }}>
                      Balanced rapid feature requests with tight time constraints, delivering a complete game within a 4-day deadline.
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                        variant="overline"
                        sx={{ color: '#888', letterSpacing: '1.5px', fontWeight: 'bold' }}
                    >
                      Built From Scratch
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#aaa', lineHeight: 1.6 }}>
                      Started with a completely blank repository and designed all core mechanics ground-up immediately following brainstorming.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* The Team */}
            <Grid item xs={12} md={6}>
              <Box sx={{ pl: 2, borderLeft: '2px solid #333' }}>
                <Typography
                    variant="overline"
                    sx={{ color: '#888', letterSpacing: '1.5px', fontWeight: 'bold' }}
                >
                  THE TEAM (13)
                </Typography>

                <Grid container spacing={1.5} sx={{ mt: 1 }}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="caption" sx={{ color: '#666', textTransform: 'uppercase', display: 'block', mb: 0.5 }}>
                      Game Design & Art
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#aaa', lineHeight: 1.6 }}>
                      Ivan Scappini<br />
                      Andrea Siclari<br />
                      Lorenzo Marchetti<br />
                      Gabriele Ubertazzi <span style={{ color: '#666' }}>(Narrative)</span>
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Typography variant="caption" sx={{ color: '#666', textTransform: 'uppercase', display: 'block', mb: 0.5 }}>
                      Programming
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#aaa', lineHeight: 1.6 }}>
                      Jacopo Ricchetti<br />
                      Martina Tenani<br />
                      Janessa "Jay" Walpole<br />
                      Matteo Guccione
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Typography variant="caption" sx={{ color: '#666', textTransform: 'uppercase', display: 'block', mb: 0.5 }}>
                      3D Art
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#aaa', lineHeight: 1.6 }}>
                      Fabiola Carnevale<br />
                      Anastasia Dzyubanov<br />
                      Alberto Saccomani<br />
                      Mary Vitetta
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Typography variant="caption" sx={{ color: '#666', textTransform: 'uppercase', display: 'block', mb: 0.5 }}>
                      Audio
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#aaa', lineHeight: 1.6 }}>
                      Steed
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* Main 2-Column Section */}
      <Grid container spacing={6} sx={{ mb: 4 }}>
        {/* Left Column: Screenshots & Carousel */}
        <Grid item xs={12} md={6}>
          <Typography
              variant="overline"
              sx={{ color: '#888', letterSpacing: '1.5px', fontWeight: 'bold' }}
          >
            SCREENSHOTS
          </Typography>
          <Typography variant="body1" sx={{ color: '#aaa', mb: 4, lineHeight: 1.7 }}>
            The goal was to craft a short yet visually striking experience grounded in popular horror tropes—evoking 'The Backrooms' liminality, eerie dungeon environments, and grainy 90s analog horror.
            We wanted to create a sense of tension through the unrelenting passing of time.
          </Typography>
          <GameJamCarousel
              images={[
                { src: gmtk2026, alt: 'Interface view 1' },
                { src: gameplay2, alt: 'Gameplay view 2' },
                { src: gameplay3, alt: 'Gameplay view 3' },
                { src: gameplay4, alt: 'Gameplay view 4' },
              ]}
          />
        </Grid>

        {/* Right Column: Key Learnings & Reflection Section */}
        <Grid item xs={12} md={6}>
          <Box sx={{ pl: { md: 2 }, borderLeft: { md: '2px solid #333' } }}>
            <Typography
                variant="overline"
                sx={{ color: '#888', letterSpacing: '1.5px', fontWeight: 'bold' }}
            >
              REFLECTIONS & TAKEAWAYS
            </Typography>

            <Typography variant="body1" sx={{ color: '#aaa', mt: 1, mb: 2, lineHeight: 1.8 }}>
              This project was a major milestone for me in many ways. I learned to collaborate across disciplines within a large, newly formed team, managed a high-activity Git repository, and resolved complex merge conflicts under strict deadline pressure. The energy and determination of my teammates was one of the best parts, working in a team of motivated and driven people really helped the 4 day crunch feel lighter.
            </Typography>

            <Typography variant="body1" sx={{ color: '#aaa', mb: 2, lineHeight: 1.8 }}>
              Working alongside non-native Italian speakers also reinforced the importance of clear, precise communication in a multi-language environment. 
            </Typography>
            
            <Typography variant="body1" sx={{ color: '#aaa', mb: 2, lineHeight: 1.8 }}>
              Looking back, my primary technical focus for improvement would be refining the custom VHS visual effect to eliminate resolution and monitor-specific visual artifacts. To maximize development efficiency, I would prepare a core library of modular, extensible components before starting the jam. Having a pre-built foundation of flexible systems—like configurable UI elements and decoupled gameplay triggers—allows the team to focus entirely on creative design and rapid gameplay iteration rather than building baseline framework code from scratch.            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Full Width Footer Link */}
      <Box sx={{ pt: 2, borderTop: '1px solid #222', display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography variant="body1" fontWeight="bold" sx={{ color: '#fff' }}>
          Check out the game here:
        </Typography>

        <Link
            href="https://heathcliff19.itch.io/chronophobia" // Replace with your link
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#4fc3f7',
              fontWeight: '500',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              '&:hover': { textDecoration: 'underline' }
            }}
        >
          Play CHRONOPHOBIA <LaunchIcon sx={{ fontSize: '0.9rem' }} />
        </Link>
      </Box>
    </Container>
  );
}

export default GameJamsPrototypes