const express = require('express');
const { SensorsData } = require('../models'); // Sequelize model
const Sequelize = require('sequelize');
const moment = require('moment'); // Import moment.js for date manipulation


const router = express.Router();

// Endpoint to accept bulk sensor data
router.post('/', async (req, res) => {
    try {
        const sensorDataArray = req.body;

        // Validate the array data
        if (!Array.isArray(sensorDataArray) || sensorDataArray.length === 0) {
            return res.status(400).json({ error: 'Invalid data format or empty array' });
        }

        // Save data to the database in bulk
        const sensorData = await SensorsData.bulkCreate(sensorDataArray);

        res.status(201).json({ message: 'Data saved successfully', data: sensorData });
    } catch (error) {
        console.error('Error saving sensor data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/', async (req, res) => {
    const { startDate, endDate } = req.query;

    // Validate the date parameters
    if (!startDate || !endDate) {
        return res.status(400).json({ error: 'Both startDate and endDate are required' });
    }

    // Parse and validate date strings using moment.js
    try {
        const start = moment(startDate, 'YYYY-MM-DDTHH:mm:ss.SSS');
        const end = moment(endDate, 'YYYY-MM-DDTHH:mm:ss.SSS');
        console.log("the data:", startDate, endDate);
        console.log("the date:", start.toString(), end.toString());
        
        
        if (!start.isValid() || !end.isValid()) {
            return res.status(400).json({ error: 'Invalid date format' });
        }

        // Fetch data from the database between the given dates
        const sensorData = await SensorsData.findAll({
            where: {
                timestamps: {
                    [Sequelize.Op.between]: [
                        Sequelize.literal(`'${startDate}'`), 
                        Sequelize.literal(`'${endDate}'`) 
                    ]
                }
            }
        });

        // If no data is found
        if (sensorData.length === 0) {
            return res.status(404).json({ message: 'No data found for the given date range' });
        }

        // Return the fetched data
        res.status(200).json(sensorData);

    } catch (error) {
        console.error('Error fetching sensor data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = router;

