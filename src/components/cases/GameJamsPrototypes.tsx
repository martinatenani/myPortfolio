import React from 'react';
import { Container, Grid, Typography, Box, Breadcrumbs, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

//Images
import mock10 from '../../assets/images/GameJamsPrototypes/mock10.png'; 

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
        <Typography color="text.primary" sx={{ color: '#fff' }}>Filmate AI Deep Dive</Typography>
      </Breadcrumbs>

      {/* Main Title Block */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom sx={{ color: '#fff' }}>
          Filmate AI: Case Study
        </Typography>
        <Typography variant="h6" sx={{ color: '#deff9a', fontFamily: 'monospace' }}>
          Backend Engineering // Vector Analytics // UI Design
        </Typography>
      </Box>

      {/* Content Layout */}
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
            <img src={mock10} alt="Interface view" style={{ width: '100%', display: 'block' }} />
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