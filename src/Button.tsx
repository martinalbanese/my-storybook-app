import React, { useState } from "react";

type ButtonProps = {
    label: string;
    onClick: () => Promise<void>;
    isDisabled?: boolean;
}

/**
 * Un componente Button riutilizzabile che mostra un'etichetta e gestisce gli eventi di click
 * @param label - Il testo da visualizzare sul bottone
 * @param onClick - Funzione di callback da eseguire quando il bottone viene cliccato
 * @param disableOnClick - Se true, il bottone viene disabilitato dopo il click
 * @returns Un bottone con l'etichetta e il gestore di click
*/
export const Button: React.FC<ButtonProps> = ({ label, onClick, isDisabled = false }) => {
    const [disabled, setDisabled] = useState(isDisabled);

    const handleClick = async () => {
        setDisabled(true);
        await onClick();
        setDisabled(false);
    };

    return <button onClick={handleClick} disabled={disabled || isDisabled}>{label}</button>
}


