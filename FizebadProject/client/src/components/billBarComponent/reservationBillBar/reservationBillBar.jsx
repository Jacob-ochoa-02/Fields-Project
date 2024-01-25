import { useState, useEffect } from 'react';
import './reservationBillBar.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function ReservationBillBar({usrEmail}) {
    const [reservInf, setReservInf] = useState([]);
    const [currReservation, setCurrReserv] = useState(null);
    const [showAllBills, setShowAllBills] = useState(false);

    useEffect(() => {
        const fetchingData = async () => {
            const response = await axios.post('http://localhost:8000/reservesTo', {
                email: usrEmail,
            });
            setReservInf(response.data);
        };
        fetchingData();
    }, [usrEmail]);

    const handleShowAllBills = () => {
        setShowAllBills(true);
    };

    return (
        <div className="cont" id='cont'>
            <h1 className="titleReserv">FACTURACION RESERVA</h1>
            <div className="bills">
                {showAllBills ? (
                    <div className='allBillsInfo'>
                        {reservInf.map((reservation) => (
                            <div key={reservation.ID_Reserve} className='billInfo'>
                                <hr className='borde' />
                                <h1 className='dataBill1'>Referencia de pago: {reservation.ID_Reserve}</h1>
                                <hr className='borde' />
                                <h2 className='dataBill'>Nombre del cliente: {reservation.Email_FK}</h2>
                                <h2 className='dataBill'>Fecha: {reservation.ReservationHour}</h2>
                                <h2 className='dataBill'>Total a pagar: <p className='dollar'>$</p>{reservation.TurnFee + reservation.Implements_FK}</h2>
                            </div>
                        ))}
                    </div>
                ) : (
                    <>
                        {currReservation ? (
                            <>
                                <h1 className='dataBill1'>Referencia de pago: {currReservation.ID_Reserve}</h1>
                                <hr className='borde' />
                                <h2 className='dataBill'>Nombre del cliente: {currReservation.Email_FK}</h2>
                                <h2 className='dataBill'>Fecha: {currReservation.ReservationHour}</h2>
                                <h2 className='dataBill'>Total a pagar: <p className='dollar'>$</p>{currReservation.TurnFee + currReservation.Implements_FK}</h2>
                            </>
                        ) : (
                            <p>No hay información de reserva</p>
                        )}
                    </>
                )}
                <div className='buttonsBox'>
                    <button onClick={handleShowAllBills} className='showAll'>Mostrar Facturas Anteriores</button>
                <Link className='returnButton' to='/reserve'>Regresar</Link>
                </div>
            </div>
        </div>
    )
}
