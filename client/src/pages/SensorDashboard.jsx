import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {
  Paper,
  Typography,
  Box,
  Container,
  CircularProgress,
  Alert,
  Button,
  Stack
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';
import axios from 'axios';
import NavBar from '../components/NavBar';

const SensorDashboard = () => {
  const [sensorData, setSensorData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [startDate, setStartDate] = useState(moment().subtract(24, 'hours'));
  const [endDate, setEndDate] = useState(moment());

  const fetchSensorData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:3001/sensors-data', {
        params: {
          startDate: startDate.format('YYYY-MM-DDTHH:mm:ss.SSS'),
          endDate: endDate.format('YYYY-MM-DDTHH:mm:ss.SSS')
        }
      });
      console.log(response.data);
      setSensorData(response.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchSensorData();
  }, []);

  const formatTimestamp = (timestamp) => {
    return moment(timestamp).format('HH:mm');
  };

  const handleFetchData = () => {
    if (startDate.isAfter(endDate)) {
      setError('Start date must be before end date');
      return;
    }
    fetchSensorData();
  };

  return (
    <Box ax={{ with: "100%" }}>
      <NavBar />
      <Box sx={{ py: 4, px: 2 }}>
        {/* Date Range Selection */}
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Select Date Range
          </Typography>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 2 }}>
              <DateTimePicker
                label="Start Date"
                value={startDate}
                onChange={(newValue) => setStartDate(newValue)}
                slotProps={{ textField: { fullWidth: true } }}
              />
              <DateTimePicker
                label="End Date"
                value={endDate}
                onChange={(newValue) => setEndDate(newValue)}
                slotProps={{ textField: { fullWidth: true } }}
              />
              <Button
                variant="contained"
                onClick={handleFetchData}
                disabled={loading}
                sx={{ minWidth: '120px', height: '56px' }}
              >
                {loading ? 'Loading...' : 'Fetch Data'}
              </Button>
            </Stack>
          </LocalizationProvider>
          {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
        </Paper>

        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
            <CircularProgress />
          </Box>
        ) : (
          <>
            {/* LDR Value Chart */}
            <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Light Sensor (LDR) Values
              </Typography>
              <Box sx={{ height: 400, width: '100%' }}>
                <ResponsiveContainer>
                  <LineChart data={sensorData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="timestamps"
                      tickFormatter={formatTimestamp}
                      interval="preserveStartEnd"
                    />
                    <YAxis />
                    <Tooltip
                      labelFormatter={(label) => moment(label).format('YYYY-MM-DD HH:mm:ss')}
                      formatter={(value) => [`${value}`, 'LDR Value']}
                    />
                    <Line
                      type="monotone"
                      dataKey="ldr"
                      stroke="#1976d2"
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </Paper>

            {/* Motion Detection Chart */}
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Motion Detection Events
              </Typography>
              <Box sx={{ height: 400, width: '100%' }}>
                <ResponsiveContainer>
                  <LineChart data={sensorData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="timestamps"
                      tickFormatter={formatTimestamp}
                      interval="preserveStartEnd"
                    />
                    <YAxis domain={[0, 1]} ticks={[0, 1]} />
                    <Tooltip
                      labelFormatter={(label) => moment(label).format('YYYY-MM-DD HH:mm:ss')}
                      formatter={(value) => [value ? 'Motion Detected' : 'No Motion', 'Status']}
                    />
                    <Line
                      type="stepAfter"
                      dataKey="motion"
                      stroke="#2e7d32"
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </Paper>
          </>
        )}
      </Box>
    </Box>
  );
};

export default SensorDashboard;