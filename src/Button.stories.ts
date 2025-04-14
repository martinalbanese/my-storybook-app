import { Meta, StoryObj } from '@storybook/react'
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
    component: Button, // Componente da testare
    title: 'Components/Button', // Titolo del componente
    tags: ['autodocs'] // Tags per la documentazione
}
export default meta; // Esporta il meta per essere utilizzato in altri file

type Story = StoryObj<typeof Button>; //Definisce il tipo di storie per il compoente Button

export const Default: Story = {
    args: {
        // Label del bottone
        label: 'Cliccami',

        // Funzione da eseguire al click
        onClick: () => new Promise<void>(resolve => {
            setTimeout(() => {
                alert('Cliccato!');
                resolve();
            }, 5000);
        })
    }
};

/* Nuova storia per il bottone
- Modificare il componente Button per supportare la disabilitazione
- Aggiungere una proprietà opzionale per disabilitarlo
- Se la proprietà è null (non obbligatoria) gestire all'onClick prima la disabilitazione 
(quando non viene passata ha un comportamento di default)
- Simulare l'operazione del click con un setTimeout di 5 secondi */
export const AsyncClick: Story = {
    args: {
        label: 'Cliccami per vedere il delay',
        onClick: () => new Promise<void>(resolve => {
            setTimeout(() => {
                alert('Operazione completata dopo 5 secondi!');
                resolve();
            }, 5000);
        })
    }
}

