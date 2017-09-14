import axios from 'axios'
import { API_CONFIG } from './config'

export default class TicketServices
{
    constructor()
    {
        this.api = API_CONFIG.api
        this.getTickets = this.getTickets.bind(this)
    }

    getTickets(requesterEmail)
    {
        return axios.get(`${this.api}/tickets/${requesterEmail}`)
    }

    createTicket(ticket)
    {
        return axios.post(`${this.api}/tickets`, ticket)
    }

    getRequesters()
    {
         return axios.get(`${this.api}/requesters`)
    }
}