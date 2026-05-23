document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('games-grid');
    
    // Array of game IDs that have been uploaded and are ready to play.
    // Add numbers 1 to 30 to this array as you upload each game.
    const unlockedGames = [1, 2, 3]; // Example: Days 1, 2, and 3 are unlocked
    
    // Generate 30 games
    const fragment = document.createDocumentFragment();
    for (let i = 1; i <= 30; i++) {
        const isUnlocked = unlockedGames.includes(i);
        
        // Use an anchor tag if unlocked, otherwise just a div
        const card = document.createElement(isUnlocked ? 'a' : 'div');
        
        if (isUnlocked) {
            card.href = `game.html?id=${i}`;
            card.className = 'game-card';
        } else {
            card.className = 'game-card locked';
        }
        
        // Add random titles for variety or keep it simple
        const gameTitles = [
            'Neon Rider', 'Cyber Dash', 'Synthwave Shooter', 'Retro Racer', 
            'Neon Blaster', 'Galaxy Quest', 'Pixel Hero', 'Void Runner'
        ];
        const randomTitle = gameTitles[Math.floor(Math.random() * gameTitles.length)] + ' ' + i;
        
        card.innerHTML = `
            <div class="card-image-wrapper">
                <img src="assets/game_cover.png" alt="${randomTitle}" class="card-image" loading="lazy">
                <div class="card-overlay"></div>
            </div>
            <div class="card-info">
                <div class="game-name">${randomTitle}</div>
                <div class="game-description">
                    ${isUnlocked 
                        ? `Welcome to Day ${i} of the challenge! Dive into this retro synthwave adventure. Can you beat the high score?`
                        : `Locked. Upload the game for Day ${i} to unlock this tile.`
                    }
                </div>
                <button class="play-btn" ${isUnlocked ? '' : 'disabled'}>${isUnlocked ? 'PLAY NOW' : 'LOCKED'}</button>
            </div>
        `;
        
        fragment.appendChild(card);
    }
    grid.appendChild(fragment);
});
