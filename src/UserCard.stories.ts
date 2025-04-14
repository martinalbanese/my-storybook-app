import { Meta, StoryObj } from '@storybook/react'
import { UserCard } from './UserCard';
import { within } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { waitFor } from '@storybook/testing-library';

const meta: Meta<typeof UserCard> = {
    component: UserCard, // Componente da testare
    title: 'Components/UserCard', // Titolo del componente
    tags: ['autodocs'] // Tags per la documentazione
}
export default meta; // Esporta il meta per essere utilizzato in altri file

type Story = StoryObj<typeof UserCard>; //Definisce il tipo di storie per il compoente Button

export const Default: Story = {
    args: {
        name: 'Mario Rossi',
        email: "mario.rossi@gmail.com"
    }
};

export const NoName: Story = {
    args: {
        name: '',
        email: "mario.rossi@example.com"
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await canvas.findByText("Il nome è obbligatorio");
    }
};

export const InvalidEmail: Story = {
    args: {
        name: 'Mario Rossi',
        email: "mariorossiexample.com"
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await canvas.findByText("Email non valida");
    }
};

export const isConfirmed: Story = {
    args: {
        name: 'Mario Rossi',
        email: "mario.rossi@example.com"
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const button = canvas.getByRole("button");
        await userEvent.click(button);
        
        // Aspetta fino a 5 secondi che appaia il testo "Utente confermato"
        await waitFor(
            () => canvas.findByText("Utente confermato"),
            { timeout: 5000 }
        );
    }
}

