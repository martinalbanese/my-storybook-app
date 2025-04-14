import { Meta, StoryObj } from '@storybook/react'
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
    component: Button, // Componente da testare
    title: 'Component/Button', // Titolo del componente
    tags: ['autodocs'] // Tags per la documentazione
}
export default meta; // Esporta il meta per essere utilizzato in altri file

type Story = StoryObj<typeof Button>; //Definisce il tipo di storie per il compoente Button

export const Primary: Story = {
    args: {
        label: 'Click me', // Label del bottone
        onClick: () => alert('Clicked!') // Funzione da eseguire al click
    }
}