import React, { useState } from 'react';
import { 
  TextField, 
  Button, 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  SelectChangeEvent,
  Card,
  CardContent
} from '@mui/material';
import { SalesData } from '../App';

interface DateCalculationsTabProps {
  salesData: SalesData;
}

const DateCalculationsTab: React.FC<DateCalculationsTabProps> = ({ salesData }) => {
  const [selectedMonth, setSelectedMonth] = useState('march');
  const [days, setDays] = useState(30);
  const [dailyCalculation, setDailyCalculation] = useState<number | null>(null);

  // Calculate daily sales based on selected month and days
  const calculateDailySales = () => {
    let monthlySales = 0;
    
    switch (selectedMonth) {
      case 'march':
        monthlySales = salesData.march;
        break;
      case 'april':
        monthlySales = salesData.april;
        break;
      case 'august':
        monthlySales = salesData.august;
        break;
      default:
        monthlySales = 0;
    }
    
    const result = days > 0 ? monthlySales / days : 0;
    setDailyCalculation(result);
  };

  // Handle month selection change - fixed type error
  const handleMonthChange = (event: SelectChangeEvent) => {
    setSelectedMonth(event.target.value as string);
  };

  // Handle days input change
  const handleDaysChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDays(Number(event.target.value));
  };

  // Handle calculation form submission
  const handleCalculate = (event: React.FormEvent) => {
    event.preventDefault();
    calculateDailySales();
  };

  return (
    <Card elevation={3} sx={{ borderRadius: 2, overflow: 'hidden' }}>
      <Box sx={{ 
        p: 2, 
        background: 'linear-gradient(45deg, #FF9800 30%, #FFB74D 90%)',
        color: 'white'
      }}>
        <Typography variant="h5" fontWeight="bold">
          Расчеты по датам
        </Typography>
      </Box>
      
      <CardContent sx={{ p: 3 }}>
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          Рассчитайте ежедневные продажи на основе месячных итогов и количества дней.
        </Typography>
        
        <Card sx={{ p: 3, mb: 4, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <form onSubmit={handleCalculate}>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={4}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="month-select-label">Месяц</InputLabel>
                  <Select
                    labelId="month-select-label"
                    id="month-select"
                    value={selectedMonth}
                    label="Месяц"
                    onChange={handleMonthChange}
                  >
                    <MenuItem value="march">Март</MenuItem>
                    <MenuItem value="april">Апрель</MenuItem>
                    <MenuItem value="august">Август</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Количество дней"
                  type="number"
                  value={days}
                  onChange={handleDaysChange}
                  InputProps={{
                    inputProps: { min: 1, max: 31 }
                  }}
                  variant="outlined"
                />
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Button 
                  type="submit" 
                  variant="contained" 
                  color="warning"
                  fullWidth
                  size="large"
                  sx={{ 
                    py: 1.5, 
                    fontWeight: 'bold',
                    borderRadius: 2,
                    boxShadow: '0 4px 10px rgba(255, 152, 0, 0.3)'
                  }}
                >
                  Рассчитать
                </Button>
              </Grid>
            </Grid>
          </form>
        </Card>
        
        {dailyCalculation !== null && (
          <Box>
            <Typography variant="h6" gutterBottom fontWeight="bold" color="#FF9800">
              Результаты расчета
            </Typography>
            
            <TableContainer component={Paper} sx={{ mt: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.1)', borderRadius: 2, overflow: 'hidden' }}>
              <Table>
                <TableHead sx={{ backgroundColor: '#FFF3E0' }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold' }}>Месяц</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Общие продажи</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Дни</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Ежедневное среднее</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Typography fontWeight="medium">
                        {selectedMonth === 'march' ? 'Март' : 
                         selectedMonth === 'april' ? 'Апрель' : 'Август'}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography fontWeight="medium">
                        {selectedMonth === 'march' ? salesData.march : 
                         selectedMonth === 'april' ? salesData.april : salesData.august}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography fontWeight="medium">{days}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography fontWeight="bold" color="#FF9800">
                        {dailyCalculation.toFixed(2)}
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default DateCalculationsTab; 