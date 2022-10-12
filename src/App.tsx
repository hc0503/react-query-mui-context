import { Container, Grid } from '@mui/material';
import Chart from "./components/Chart";
import Table from "./components/Table";

export default function App() {
  return (
    <Container sx={{mt: 10, p: 5, bgcolor: "white"}}>
      <Grid container spacing={2}>
        <Grid item lg={6} md={12}>
          <Chart />
        </Grid>
        <Grid item lg={6} md={12}>
          <Table />
        </Grid>
      </Grid>
    </Container>
  )
}