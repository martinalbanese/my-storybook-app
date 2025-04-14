import React, { useState } from "react"; 
import { Button } from "./Button";

type UserCard = {
    name: string;
    email: string;
}

/**
 * Un componente UserCard che riceve via props un nome e un email
 * @param name - Il nome dell'utente
 * @param email - L'indirizzo email dell'utente
 * @returns Un card con il nome e l'email dell'utente
*/
export const UserCard: React.FC<UserCard> = ({ name, email }) => {
    const [conferma, setConferma] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleConferma = async () => {
        setIsLoading(true);
        setTimeout(() => {
            setConferma(true);
            setIsLoading(false);
        }, 3000)
    }

    const isNameValid = name.trim().length > 0;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    return (
        <div style={{ border: '1px solid #ccc', padding: '1rem'}}>
            <h3>{name}</h3>
            {!isNameValid && <p style={{ color: "red" }}>Il nome è obbligatorio</p>}
            
            <p>{email}</p>
            {!isEmailValid && <p style={{ color: "red" }}>Email non valida</p>}

            <Button 
                label="Conferma" 
                onClick={handleConferma} 
                isDisabled={isLoading || !isNameValid || !isEmailValid}
            />

            {conferma && <p style={{ color: "green" }}>Utente confermato</p>}
        </div>
    )
}