import * as BusinessController from "./controller";
import BusinessDatatable from "./datatable";
import {Box, Grid} from "@mui/material";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import {Metadata} from "next";
import PROJECT_CONFIG from "@/config/config";

const PAGE_TITLE = "Business"
export const metadata: Metadata = {
    title: `${PAGE_TITLE} | ${PROJECT_CONFIG.NAME}`,
    description: 'Business page',
}


export default async function Business() {
    let data = []
    let error = null

    try {
        data = await BusinessController.getAll();
    } catch (err) {
        console.error('Error fetching business data:', err);
        error = 'Failed to load data. Please try again later.';
    }

    return (
        <Grid container spacing={3}>
            <Grid item sm={12}>
                <DashboardCard title="Business">
                    <BusinessDatatable dataTable={data}/>
                </DashboardCard>
            </Grid>
        </Grid>
    );
};