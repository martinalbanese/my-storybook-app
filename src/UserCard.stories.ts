import { Meta, StoryObj } from '@storybook/react'
import { UserCard } from './UserCard';

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
    }
};