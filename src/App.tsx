import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography, AppBar, Container, Toolbar, CssBaseline } from '@mui/material';
import SettingsTab from './components/SettingsTab';
import DateCalculationsTab from './components/DateCalculationsTab';
import MonthlySummaryTab from './components/MonthlySummaryTab';

// Interface for our sales data
export interface SalesData {
  march: number;
  april: number;
  august: number;
}

// Interface for TabPanel props
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// TabPanel component
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`marketplace-tabpanel-${index}`}
      aria-labelledby={`marketplace-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, md: 3 } }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function App() {
  // State for active tab
  const [tabValue, setTabValue] = useState(0);
  
  // Initial sales data
  const [salesData, setSalesData] = useState<SalesData>({
    march: 100,
    april: 200,
    august: 300
  });

  // Handle tab changes
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Update sales data from settings
  const updateSalesData = (newData: SalesData) => {
    setSalesData(newData);
  };

  return (
    <>
      <CssBaseline />
      <Box sx={{ 
        minHeight: '100vh',
        bgcolor: '#f5f5f5',
        pb: 4
      }}>
        <AppBar position="static" sx={{ 
          background: 'linear-gradient(90deg, #1976d2 0%, #2196f3 100%)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
        }}>
          <Toolbar>
            <Typography 
              variant="h4" 
              component="div" 
              sx={{ 
                flexGrow: 1, 
                padding: 2, 
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
              }}
            >
              Панель продаж на маркетплейсах
            </Typography>
          </Toolbar>
          <Box sx={{ 
            borderBottom: 1, 
            borderColor: 'divider', 
            backgroundColor: 'white',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
          }}>
            <Container maxWidth="lg">
              <Tabs 
                value={tabValue} 
                onChange={handleTabChange} 
                aria-label="marketplace tabs"
                centered
                textColor="primary"
                indicatorColor="primary"
                sx={{ 
                  '& .MuiTab-root': { 
                    fontSize: { xs: '0.8rem', sm: '1rem' },
                    fontWeight: 'bold',
                    py: 2
                  } 
                }}
              >
                <Tab label="Настройки" />
                <Tab label="Расчеты по датам" />
                <Tab label="Сводка по месяцам" />
              </Tabs>
            </Container>
          </Box>
        </AppBar>
        
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <TabPanel value={tabValue} index={0}>
            <SettingsTab salesData={salesData} updateSalesData={updateSalesData} />
          </TabPanel>
          
          <TabPanel value={tabValue} index={1}>
            <DateCalculationsTab salesData={salesData} />
          </TabPanel>
          
          <TabPanel value={tabValue} index={2}>
            <MonthlySummaryTab salesData={salesData} />
          </TabPanel>
        </Container>
      </Box>
    </>
  );
}

export default App; 