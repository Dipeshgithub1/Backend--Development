// ticketRoutes.js
const express = require('express');
const router = express.Router();
const Ticket = require('../models/Ticket.js');
const ticketRoutes = require('../routes/ticketRoutes.js');


router.get('/tickets',
    async (req, res) => {
        try {
            const tickets = await Ticket.find();
            res.json(tickets);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    });

router.get('/tickets/:id',
    getTicket, (req, res) => {
        res.json(res.ticket);
    });

router.post('/tickets', async (req, res) => {
    const ticket = new Ticket({
        title: req.body.title,
        description: req.body.description,
        createdBy: req.body.createdBy,
        status: 'Open',
        priority: req.body.priority || 'Low',
    });

    try {
        const newTicket = await ticket.save();
        res.status(201).json(newTicket);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

router.patch('/tickets/:id', getTicket,
    async (req, res) => {
        if (req.body.title != null) {
            res.ticket.title = req.body.title;
        }
        if (req.body.description != null) {
            res.ticket.description = req.body.description;
        }
        if (req.body.status != null) {
            res.ticket.status = req.body.status;
        }
        if (req.body.priority != null) {
            res.ticket.priority = req.body.priority;
        }

        try {
            const updatedTicket = await res.ticket.save();
            res.json(updatedTicket);
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    });

router.delete('/tickets/:id',
    getTicket, async (req, res) => {
        try {
            // Use deleteOne method here
            await res.ticket.deleteOne();
            res.json({ message: 'Ticket deleted' });
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    });

async function getTicket(req, res, next) {
    let ticket;
    try {
        ticket = await Ticket.findById(req.params.id);
        if (ticket == null) {
            return res.status(404).json({
                message: 'Ticket not found'
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }

    res.ticket = ticket;
    next();
}

module.exports = router;
