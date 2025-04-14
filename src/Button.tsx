import React, { useState } from "react";

type ButtonProps = {
    label: string;
    onClick: () => void;
}

/**
 * Un componente Button riutilizzabile che mostra un'etichetta e gestisce gli eventi di click
 * @param {string} label - Il testo da visualizzare sul bottone
 * @param {() => void} onClick - Funzione di callback da eseguire quando il bottone viene cliccato
 * @returns Un bottone con l'etichetta e il gestore di click
*/
export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    const [isDisabled, setIsDisabled] = useState(false);

    const handleClick = async () => {
        setIsDisabled(true);
        await onClick();
        setIsDisabled(false);
    };

    return <button onClick={handleClick} disabled={isDisabled}>{label}</button>
}


