function handleCTAVideoButton() {
    const videoButtons = document.querySelectorAll('.video-button');
    const videoBg = document.querySelector('.bg');

    videoButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            videoButtons.forEach((btn, index2) => {
                const img = btn.querySelector('img');
                img.src = `./assets/images/button-video${index2 + 1}-inactive.png`;
            });

            const img = button.querySelector('img');
            img.src = `./assets/images/button-video${index + 1}.png`;
            videoBg.style.backgroundImage = `url('./assets/images/bg-inside-video${index + 1}.png')`;
        });
    });
}
function handlePlayVideo() {
    const playButton = document.querySelector('.play-button')
    const inside = document.querySelector('.bg')
    const iframe = document.getElementById('video')
    playButton.addEventListener('click', () => {
        var iframeSrc = iframe.src;
        playButton.style.display = 'none';
        inside.style.display = 'none';
        if (iframeSrc.indexOf('?') > -1) {
            iframe.src += '&autoplay=1';
        } else {
            iframe.src += '?autoplay=1';
        }
    },)

}
function generateCircle() {
    const snowflakeContainer = document.getElementById('snowflakeContainer');
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.classList.add('circle');

    const size = Math.random() * 100 + 10;
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.transform = `translateY(-100%)`;
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 5 + 50}s, ${Math.random() * 0.3}s`;
    snowflake.style.animationDelay = `${Math.random() * 5}s, ${Math.random() * 0.2}s`;
    snowflakeContainer.appendChild(snowflake);
}
function snow() {
    generateCircle();
    setInterval(() => {
        generateCircle();
    }, Math.random() * 1000);


}
function generateBall() {
    const snowflakeContainer = document.getElementById('snowflakeContainer');
    const snowflake = document.createElement('img');
    snowflake.classList.add('snowflake');
    snowflake.src = `./assets/images/ball-${Math.ceil(Math.random() * 3)}.png`;
    const size = Math.random() * 2 + 2;
    snowflake.style.width = `${size}vw`;
    snowflake.style.height = `${size}vw`;

    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.transform = `translateY(-100%)`;
    snowflake.style.animationDuration = `${Math.random() * 5 + 100}s, ${Math.random() * 0.3}s`;
    snowflake.style.animationDelay = `${Math.random() * 5}s, ${Math.random() * 0.2}s`;
    snowflakeContainer.appendChild(snowflake);

}
function snowBall() {
    generateBall();
    setInterval(() => {
        generateBall();
    }, Math.random() * 2000 + 1000);

}
document.addEventListener('DOMContentLoaded', function () {
    snow();
    snowBall();
    handleCTAVideoButton()
    handlePlayVideo();

})