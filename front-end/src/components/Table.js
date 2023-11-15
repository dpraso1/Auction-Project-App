import React, { useState, useEffect } from 'react';
import api from '../api/api.js';
import * as ReactBootStrap from 'react-bootstrap';
import './Table.css';
import { format } from 'date-fns'

export const Table = ({ id }) => {

    const [bids, setBids] = useState([]);


    useEffect(() => {
        const fetchBids = async (id) => {
            try {
                const bids = await api.get(`/api/products/${id}/bids`);
                setBids(bids.data);
            } catch (err) {
                if (err.response) {
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else {
                    console.log(`Error: ${err.message}`);
                }
            }
        }

        fetchBids(id);
    }, []);


    return (
        bids.length > 0 &&
        <div className="table">
            <ReactBootStrap.Table bordered>
                <thead className="first-row">
                    <tr>
                        <th className="bdb">Bider</th>
                        <th className="bdb">Date</th>
                        <th className="bdb">Bid</th>
                    </tr>
                </thead>
                <tbody className="biders-rows">
                    {
                        bids.map((bid, index) => (
                            <tr key={index}>
                                <td>{bid.user.first_name} {bid.user.last_name}</td>
                                <td>{format(new Date(bid.date_time), "d MMMM Y")}</td>
                                <td>${bid.amount.toFixed(2)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </ReactBootStrap.Table>
        </div>
    );

}

export default Table;