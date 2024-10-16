'use client'
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import { Box, Grid } from '@mui/material';


const BusinessPage = () => {
    return (
        <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <p>Esta es una pagina</p>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
    )
}

export default BusinessPage