import React from "react"; 

type UserCard = {
    name: string;
    email: string;
}

/**
 * Un componente UserCard che riceve via props un nome e un email
 * @param {string} name - Il nome dell'utente
 * @param {string} email - L'indirizzo email dell'utente
 * @returns Un card con il nome e l'email dell'utente
*/
export const UserCard: React.FC<UserCard> = ({ name, email }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '1rem'}}>
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    )
}