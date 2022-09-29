import { button } from '../Variables/Variables.js';
export const ButtonInteraction = () => {
    const buttonInteraction = () => {
        button?.classList.toggle('add__button-active');
    };
    const buttonReset = () => {
        button?.classList.remove('add__button-active');
    };
    button?.addEventListener('mousedown', () => {
        buttonInteraction();
    });
    button?.addEventListener('mouseleave', () => {
        buttonReset();
    });
    button?.addEventListener('mouseup', () => {
        buttonInteraction();
    });
};
