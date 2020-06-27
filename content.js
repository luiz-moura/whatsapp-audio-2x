console.log('My extension is already running 🚀');

const interval = setInterval(() => {
    const header = document.querySelector('._1QUKR');

    if (header) {
        clearInterval(interval);
        // Audio 2X
        const audios = () => {
            const audios = document.querySelectorAll('audio');
            audios.forEach((audio) => {
                audio.playbackRate = 2;
            });
        }
        // Element button
        const button = document.createElement('button');
        button.innerHTML = '2X';
        button.classList.add('twoTimesButton');
        // Event click in element button
        button.addEventListener('click', () => {
            audios();
        });

        header.appendChild(button);
    }
}, 1000);
