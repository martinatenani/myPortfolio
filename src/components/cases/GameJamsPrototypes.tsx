import React from 'react';
import { Container, Grid, Typography, Box, Breadcrumbs, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

//Images
import gmtk2026 from '../../assets/images/GameJamsPrototypes/gmtk2026.png'; 

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
        <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom sx={{ color: '#fff' }}>
          Game Jams and Prototyping
        </Typography>
        <Typography variant="h6" sx={{ color: '#deff9a', fontFamily: 'monospace' }}>
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
                    <Typography variant="subtitle2" sx={{ color: '#fff', fontWeight: 'bold' }}>
                      Large-Scale Git Management
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#aaa', lineHeight: 1.6 }}>
                      Coordinated version control for a 13-person team, actively resolving merge conflicts and maintaining repository stability.
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="subtitle2" sx={{ color: '#fff', fontWeight: 'bold' }}>
                      96-Hour Scope & Sprint
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#aaa', lineHeight: 1.6 }}>
                      Balanced rapid feature requests with tight time constraints, delivering a complete game within a 4-day deadline.
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="subtitle2" sx={{ color: '#fff', fontWeight: 'bold' }}>
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
      
      <Grid container spacing={6}>
        {/* Left Column: The Creative Canvas */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" sx={{ color: '#fff', mb: 2 }}>
            01. The Artistic Direction
          </Typography>
          <Typography variant="body1" sx={{ color: '#aaa', mb: 4, lineHeight: 1.7 }}>
            The visual workspace was tailored around classic cinematic atmosphere—leveraging deep, 
            low-luminance backdrop fields offset by vibrant neon status trackers. Layout transitions 
            emulate a projector shifting frames smoothly, ensuring an engaging user discovery path.
          </Typography>
          <Box sx={{ border: '1px solid #333', borderRadius: '12px', overflow: 'hidden' }}>
            <img src={gmtk2026} alt="Interface view" style={{ width: '100%', display: 'block' }} />
          </Box>
        </Grid>

        {/* Right Column: The Core Code */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" sx={{ color: '#fff', mb: 2 }}>
            02. Technical Architecture
          </Typography>
          <Typography variant="body1" sx={{ color: '#aaa', mb: 3, lineHeight: 1.7 }}>
            Rather than scanning text strings for matching characters, the system processes linguistic context 
            by calculating geometric dot products within a 1536-dimensional vector array. Below is the localized 
            orchestration function running on the Flask controller layer:
          </Typography>
          
          {/* Formatted Code Block */}
          <Box sx={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #333', fontSize: '0.9rem' }}>
            <SyntaxHighlighter language="python" style={vscDarkPlus} customStyle={{ margin: 0, padding: '20px' }}>
              {codeBlock}
            </SyntaxHighlighter>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        {/* Left Column: The Creative Canvas */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" sx={{ color: '#fff', mb: 2 }}>
            01. The Artistic Direction
          </Typography>
          <Typography variant="body1" sx={{ color: '#aaa', mb: 4, lineHeight: 1.7 }}>
            The visual workspace was tailored around classic cinematic atmosphere—leveraging deep,
            low-luminance backdrop fields offset by vibrant neon status trackers. Layout transitions
            emulate a projector shifting frames smoothly, ensuring an engaging user discovery path.
          </Typography>
          <Box sx={{ border: '1px solid #333', borderRadius: '12px', overflow: 'hidden' }}>
            <img src={gmtk2026} alt="Interface view" style={{ width: '100%', display: 'block' }} />
          </Box>
        </Grid>

        {/* Right Column: The Core Code */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" sx={{ color: '#fff', mb: 2 }}>
            02. Technical Architecture
          </Typography>
          <Typography variant="body1" sx={{ color: '#aaa', mb: 3, lineHeight: 1.7 }}>
            Rather than scanning text strings for matching characters, the system processes linguistic context
            by calculating geometric dot products within a 1536-dimensional vector array. Below is the localized
            orchestration function running on the Flask controller layer:
          </Typography>

          {/* Formatted Code Block */}
          <Box sx={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #333', fontSize: '0.9rem' }}>
            <SyntaxHighlighter language="python" style={vscDarkPlus} customStyle={{ margin: 0, padding: '20px' }}>
              {codeBlock}
            </SyntaxHighlighter>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default GameJamsPrototypes