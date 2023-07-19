import './App.css';
import { Card, Grid } from '@mui/material';
import Resume from './components/Resume';
function App() {
  return (
    <div className="App">
      <Grid container>
      <Grid item xs={12} sm={6} md={3}>
        
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Card sx={{background: "#1f1e1e" ,height :"100vh" }}>
        <Resume/>
        </Card>
       
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
  
      </Grid>
    </Grid>
    </div>
  );
}

export default App;
