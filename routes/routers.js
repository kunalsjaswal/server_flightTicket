import express from 'express'
import { addNewUser, getUserData, userLogin, welcomeApi } from '../controllers/posts.js';
import { addAdminTicket, buyTicket, deleteTicket, showAllTickets, showUserTickets } from '../controllers/tickets.js';

const router = express.Router();

router.get('/welcomeApi',welcomeApi);
router.post('/addUser',addNewUser)
router.post('/userLogin',userLogin)
router.get('/getUsers/:id',getUserData)

router.post('/addTicket',addAdminTicket)
router.delete('/deleteTicket/:id',deleteTicket)
router.post('/buyTicket/:id',buyTicket)
router.get('/showAllTickets',showAllTickets)
router.get('/showuserTickets/:id',showUserTickets)

export default router