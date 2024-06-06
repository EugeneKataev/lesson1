import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import './EditContact.css'

function AddContact() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const getLocalStorage = JSON.parse(localStorage.getItem('data-contacts'));
            const contact = getLocalStorage.find(contact => String(contact.id) === String(id));

            setName(contact.name);
            setUsername(contact.username);
            setPhone(contact.phone);
        } else {
            setName("");
            setUsername("");
            setPhone("");
        }
    }, [id])


    const handleSave = () => {
        if (!name || !username || !phone) {
            setError('Заполните все поля');
            return;
        }
        const getLocalStorage = JSON.parse(localStorage.getItem('data-contacts')) || [];
        const newContact = {
            id: id || nanoid(),
            name,
            username,
            phone
        }

        let updateContacts;
        if (id) {
            updateContacts = getLocalStorage.map(contact => (String(contact.id) === String(id) ? newContact : contact))
        } else {
            updateContacts = [...getLocalStorage, newContact]
        }
        localStorage.setItem('data-contacts', JSON.stringify(updateContacts));
        console.log(newContact);
        navigate('/');
    };


    const handleCancel = () => {
        navigate('/');
    };

    return (
        <div>
            <h5>{id ? 'Edit Contact' : `Add Contact`}</h5>
            {error && <p className="error">{error}</p>}
            <form className="edit-form">
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <label>Surname:</label>
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Phone:</label>
                    <input type="text" value={phone} onChange={e => setPhone(e.target.value)} />
                </div>
                <div className="bottom-panel">
                    <a type="button" onClick={handleSave}>{id ? `Save` : `Add`}</a>
                    <a type="button" onClick={handleCancel}>Cancel</a>
                </div>
            </form>
        </div>
    );
}

export default AddContact;