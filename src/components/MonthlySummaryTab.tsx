import React from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Card,
  CardContent,
  Grid
} from '@mui/material';
import { SalesData } from '../App';

interface MonthlySummaryTabProps {
  salesData: SalesData;
}

const MonthlySummaryTab: React.FC<MonthlySummaryTabProps> = ({ salesData }) => {
  // Calculate the total sales from all months
  const totalSales = salesData.march + salesData.april + salesData.august;
  
  // Calculate percentages
  const marchPercentage = (salesData.march / totalSales) * 100;
  const aprilPercentage = (salesData.april / totalSales) * 100;
  const augustPercentage = (salesData.august / totalSales) * 100;
  
  // Calculate average sales per month
  const averageSales = totalSales / 3;

  return (
    <Card elevation={3} sx={{ borderRadius: 2, overflow: 'hidden' }}>
      <Box sx={{ 
        p: 2, 
        background: 'linear-gradient(45deg, #4CAF50 30%, #81C784 90%)',
        color: 'white'
      }}>
        <Typography variant="h5" fontWeight="bold">
          Сводка по месяцам
        </Typography>
      </Box>
      
      <CardContent sx={{ p: 3 }}>
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          Сводка данных о продажах по всем месяцам.
        </Typography>
        
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ 
              height: '100%', 
              boxShadow: '0 4px 12px rgba(76, 175, 80, 0.2)',
              borderRadius: 2,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 16px rgba(76, 175, 80, 0.3)',
              }
            }}>
              <CardContent sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom color="#4CAF50" fontWeight="bold">
                  Всего продаж
                </Typography>
                <Typography variant="h3" fontWeight="bold">
                  {totalSales}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ 
              height: '100%', 
              boxShadow: '0 4px 12px rgba(76, 175, 80, 0.2)',
              borderRadius: 2,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 16px rgba(76, 175, 80, 0.3)',
              }
            }}>
              <CardContent sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom color="#4CAF50" fontWeight="bold">
                  Среднее за месяц
                </Typography>
                <Typography variant="h3" fontWeight="bold">
                  {averageSales.toFixed(2)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ 
              height: '100%', 
              boxShadow: '0 4px 12px rgba(76, 175, 80, 0.2)',
              borderRadius: 2,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 16px rgba(76, 175, 80, 0.3)',
              }
            }}>
              <CardContent sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom color="#4CAF50" fontWeight="bold">
                  Лучший месяц
                </Typography>
                <Typography variant="h3" fontWeight="bold">
                  {Math.max(salesData.march, salesData.april, salesData.august)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ 
              height: '100%', 
              boxShadow: '0 4px 12px rgba(76, 175, 80, 0.2)',
              borderRadius: 2,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 16px rgba(76, 175, 80, 0.3)',
              }
            }}>
              <CardContent sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom color="#4CAF50" fontWeight="bold">
                  Количество месяцев
                </Typography>
                <Typography variant="h3" fontWeight="bold">
                  3
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        
        <TableContainer component={Paper} sx={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)', borderRadius: 2, overflow: 'hidden' }}>
          <Table>
            <TableHead sx={{ backgroundColor: '#E8F5E9' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Месяц</TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Продажи</TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>% от общего</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow sx={{ '&:hover': { backgroundColor: '#F1F8E9' } }}>
                <TableCell>
                  <Typography fontWeight="medium">Март</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography fontWeight="medium">{salesData.march}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography fontWeight="medium">{marchPercentage.toFixed(2)}%</Typography>
                </TableCell>
              </TableRow>
              <TableRow sx={{ '&:hover': { backgroundColor: '#F1F8E9' } }}>
                <TableCell>
                  <Typography fontWeight="medium">Апрель</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography fontWeight="medium">{salesData.april}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography fontWeight="medium">{aprilPercentage.toFixed(2)}%</Typography>
                </TableCell>
              </TableRow>
              <TableRow sx={{ '&:hover': { backgroundColor: '#F1F8E9' } }}>
                <TableCell>
                  <Typography fontWeight="medium">Август</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography fontWeight="medium">{salesData.august}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography fontWeight="medium">{augustPercentage.toFixed(2)}%</Typography>
                </TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: '#E8F5E9' }}>
                <TableCell>
                  <Typography fontWeight="bold">Итого</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography fontWeight="bold">{totalSales}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography fontWeight="bold">100.00%</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default MonthlySummaryTab; 