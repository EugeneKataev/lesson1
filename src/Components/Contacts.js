import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './tableContacts.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal, Button } from 'react-bootstrap';

function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [contactToDelete, setContactToDelete] = useState(null);

    useEffect(() => {
        const getLocalStorage = localStorage.getItem('data-contacts');
        if (getLocalStorage) {
            setContacts(JSON.parse(getLocalStorage));
            console.log("записано в локал сторадж первым юсееффект");
        } else {
            getData();
        }
    }, []);

    useEffect( () => {
            localStorage.setItem('data-contacts', JSON.stringify(contacts));
            console.log('useEffect contacts');
    },[contacts])

    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                const apiData = data.map(user => ({
                    id: user.id,
                    name: user.name,
                    username: user.username,
                    phone: user.phone
                }));
                setContacts(apiData)
                console.log("getData");
            })
            .catch(error => {
                console.error('Error fetch get data:', error);
            });
    }

    const handleDeleteClick = (contactId) => {
        setShowModal(true);
        setContactToDelete(contactId);
    };

    const deleteContact = (id) => {
        setContacts(contacts.filter(contact => contact.id !== contactToDelete));
        setShowModal(false);
        setContactToDelete(null);
    };
    const cancelDelete = () => {
        setShowModal(false);
        setContactToDelete(null);
    };

    return (
        <div>
            <h5>Contacts</h5>
            <div className="contacts-table">
                <div className="contacts-header">
                    <div className="contacts-header-item">Имя</div>
                    <div className="contacts-header-item">Фамилия</div>
                    <div className="contacts-header-item">Телефон</div>
                    <div className="contacts-header-item">Действия</div>
                </div>
                {contacts && contacts.map(contact => (
                    <div key={contact.id} className="contacts-row">
                        <div className="contacts-item">{contact.name}</div>
                        <div className="contacts-item">{contact.username}</div>
                        <div className="contacts-item">{contact.phone}</div>
                        <div className="contacts-item">
                            <div onClick={() => handleDeleteClick(contact.id)} className="delete-button" />
                            <div className="edit-button">
                                <Link to={`/edit/${contact.id}`}></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Modal show={showModal} onHide={cancelDelete}>
                <Modal.Header closeButton>
                    <Modal.Title>Подтверждение удаления</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Вы уверены, что хотите удалить контакт?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={cancelDelete}>
                        Отмена
                    </Button>
                    <Button variant="danger" onClick={deleteContact}>
                        Удалить
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Contacts;