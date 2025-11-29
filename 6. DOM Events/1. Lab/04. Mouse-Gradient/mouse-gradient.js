function attachGradientEvents() {
    const gradientElement = document.getElementById('gradient');
    const resultElement = document.getElementById('result');

    gradientElement.addEventListener('mousemove', handleMouseMove);
    function handleMouseMove(event){
        const cursorDistanseFromLeft = event.offsetX;
        const divElWidth = event.target.clientWidth;
        const percent = Math.floor(cursorDistanseFromLeft/divElWidth*100);
        resultElement.textContent = `${percent}%`;
    }
}
