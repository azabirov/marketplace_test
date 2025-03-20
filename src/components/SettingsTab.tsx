import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Grid, Paper, Card, CardContent } from '@mui/material';
import { SalesData } from '../App';

interface SettingsTabProps {
  salesData: SalesData;
  updateSalesData: (newData: SalesData) => void;
}

const SettingsTab: React.FC<SettingsTabProps> = ({ salesData, updateSalesData }) => {
  // Local state to store form values
  const [formData, setFormData] = useState<SalesData>({
    march: salesData.march,
    april: salesData.april,
    august: salesData.august
  });

  // Handle input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: Number(value)
    });
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    updateSalesData(formData);
  };

  return (
    <Card elevation={3} sx={{ borderRadius: 2, overflow: 'hidden' }}>
      <Box sx={{ 
        p: 2, 
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        color: 'white'
      }}>
        <Typography variant="h5" fontWeight="bold">
          Настройки
        </Typography>
      </Box>
      
      <CardContent sx={{ p: 3 }}>
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          Настройте значения продаж для разных месяцев. Изменения будут отражены во всех вкладках.
        </Typography>
        
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 2, height: '100%', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                  Март
                </Typography>
                <TextField
                  fullWidth
                  label="Продажи за Март"
                  name="march"
                  type="number"
                  value={formData.march}
                  onChange={handleInputChange}
                  InputProps={{
                    inputProps: { min: 0 }
                  }}
                  variant="outlined"
                  sx={{ mt: 1 }}
                />
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 2, height: '100%', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                  Апрель
                </Typography>
                <TextField
                  fullWidth
                  label="Продажи за Апрель"
                  name="april"
                  type="number"
                  value={formData.april}
                  onChange={handleInputChange}
                  InputProps={{
                    inputProps: { min: 0 }
                  }}
                  variant="outlined"
                  sx={{ mt: 1 }}
                />
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 2, height: '100%', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                  Август
                </Typography>
                <TextField
                  fullWidth
                  label="Продажи за Август"
                  name="august"
                  type="number"
                  value={formData.august}
                  onChange={handleInputChange}
                  InputProps={{
                    inputProps: { min: 0 }
                  }}
                  variant="outlined"
                  sx={{ mt: 1 }}
                />
              </Card>
            </Grid>
          </Grid>
          
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
            <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
              size="large"
              sx={{ 
                px: 5, 
                py: 1.5, 
                fontWeight: 'bold',
                borderRadius: 2,
                boxShadow: '0 4px 10px rgba(33, 150, 243, 0.3)'
              }}
            >
              Сохранить настройки
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
};

export default SettingsTab; 