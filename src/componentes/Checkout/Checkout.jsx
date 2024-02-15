import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../services/config';
import Swal from 'sweetalert2';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';
import './Checkout.css';

const Checkout = () => {
    const { carrito, vaciarCarrito, total } = useContext(CarritoContext);

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirmacion, setEmailConfirmacion] = useState('');
    const [ordenId, setOrdenId] = useState('');
    const [error, setError] = useState('');

    const manejadorSubmit = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError('¡Por favor completa todos los campos!');
            return;
        }

        if (email !== emailConfirmacion) {
            setError('Los emails no coinciden!');
            return;
        }

        const orden = {
            items: carrito.map((producto) => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad,
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email,
        };

        addDoc(collection(db, 'ordenes'), orden)
            .then((docRef) => {
                setOrdenId(docRef.id);
                vaciarCarrito();
                setNombre('');
                setApellido('');
                setTelefono('');
                setEmail('');
                setEmailConfirmacion('');
                Swal.fire({
                    title: '¡Orden generada!',
                    text: `Tu código de compra es: ${docRef.id}`,
                    icon: 'success',
                });
            })
            .catch((error) => {
                console.error('Error al crear la orden de compra', error);
                setError('No se pudo crear la orden, revisa tu información.');
            });
    };




    return (
        <div className="checkout-container">
            <div className="checkout-content">
                <h2>Checkout - Finalizamos la Compra</h2>

                <Form onSubmit={manejadorSubmit}>
                    {carrito.map((producto) => (
                        <div key={producto.item.id}>
                            <p>
                                {producto.item.nombre} x {producto.cantidad}
                            </p>
                            <p>{producto.item.precio}</p>
                            <hr />
                        </div>
                    ))}

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="nombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="apellido">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="telefono">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control type="text" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="emailConfirmacion">
                            <Form.Label>Confirmar Email</Form.Label>
                            <Form.Control type="email" placeholder="Confirmar Email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                        </Form.Group>
                    </Row>

                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    <Button variant="primary" type="submit" disabled={carrito.length === 0}>
                        Finalizar Orden
                    </Button>
                    <br />
                    {ordenId && <strong>¡Gracias por su compra! Tu número de orden es el siguiente: {ordenId}</strong>}
                </Form>
            </div>
        </div>
    );
};

export default Checkout;


