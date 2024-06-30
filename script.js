document.addEventListener("DOMContentLoaded", function() {
    const games = [
        {
            id: 'minecraft',
            name: 'Minecraft',
            infoUrl: 'https://www.minecraft.net/',
            downloadUrl: 'https://www.minecraft.net/en-us/download'
        },
        {
            id: 'free-fire',
            name: 'Free Fire',
            infoUrl: 'https://ff.garena.com/',
            downloadUrl: 'https://ff.garena.com/download.html'
        },
        {
            id: 'pubg',
            name: 'PUBG',
            infoUrl: 'https://www.pubg.com/',
            downloadUrl: 'https://www.pubg.com/download/'
        },
        {
            id: 'roblox',
            name: 'Roblox',
            infoUrl: 'https://www.roblox.com/',
            downloadUrl: 'https://www.roblox.com/download'
        }
    ];
    
    games.forEach(game => {
        const gameElement = document.getElementById(game.id);
        gameElement.addEventListener('click', function() {
            const moreInfo = confirm(`Do you want to know more about ${game.name}?`);
            if (moreInfo) {
                window.open(game.infoUrl, '_blank');
            }
            const downloadGame = confirm(`Do you want to download ${game.name}?`);
            if (downloadGame) {
                window.open(game.downloadUrl, '_blank');
            }
        });
    });
});
