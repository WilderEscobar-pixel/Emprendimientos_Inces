/**
 * script.js - Interactive behavior for Expo-Emprende 2026 Landing Page
 */

// Function to handle card toggling
function toggleCard(cardId) {
    const card = document.getElementById(cardId);
    
    // Toggle the expanded class dynamically for styling and animation
    card.classList.toggle('expanded');
    
    // Get the hidden elements inside this card
    const summary = card.querySelector('.summary-text');
    const links = card.querySelector('.links-container');
    const tapHint = card.querySelector('.tap-hint');
    
    // Toggle visibility
    if (card.classList.contains('expanded')) {
        summary.classList.remove('hidden');
        links.classList.remove('hidden');
        if (tapHint) {
            tapHint.style.opacity = '0';
            setTimeout(() => tapHint.classList.add('hidden'), 300); // Wait for fade out
        }
    } else {
        summary.classList.add('hidden');
        links.classList.add('hidden');
        if (tapHint) {
            tapHint.classList.remove('hidden');
            setTimeout(() => tapHint.style.opacity = '1', 10); // Wait for display block to apply
        }
    }
}

// Ensure clicks on links inside the card don't collapse the card itself
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevents the click from bubbling up to the card
        });
    });
});
