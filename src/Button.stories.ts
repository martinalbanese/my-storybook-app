import { Meta, StoryObj } from '@storybook/react'
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
    component: Button, // Componente da testare
    title: 'Components/Button', // Titolo del componente
    tags: ['autodocs'] // Tags per la documentazione
}
export default meta; // Esporta il meta per essere utilizzato in altri file

type Story = StoryObj<typeof Button>; //Definisce il tipo di storie per il compoente Button

const onClick = async () => {
    return new Promise<void>(
        (resolve) => {
            setTimeout(() => {
                alert('Operazione completata dopo 5 secondi!');
                resolve();
            }, 5000);
        }
    )
}

export const Default: Story = {
    args: {
        label: 'Cliccami',
        onClick: onClick
    }
};

export const Disabled: Story = {
    args: {
        label: 'Cliccami',
        onClick: onClick,
        isDisabled: true
    }
}

