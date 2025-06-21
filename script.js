// Full-screen view ke liye
const images = document.querySelectorAll('.gallery img');
images.forEach(image => {
    image.addEventListener('click', () => {
        const fullScreenDiv = document.createElement('div');
        fullScreenDiv.style.position = 'fixed';
        fullScreenDiv.style.top = '0';
        fullScreenDiv.style.left = '0';
        fullScreenDiv.style.width = '100%';
        fullScreenDiv.style.height = '100%';
        fullScreenDiv.style.backgroundColor = 'rgba(0,0,0,0.8)';
        fullScreenDiv.style.display = 'flex';
        fullScreenDiv.style.alignItems = 'center';
        fullScreenDiv.style.justifyContent = 'center';
        
        const fullImage = document.createElement('img');
        fullImage.src = image.src;
        fullImage.style.maxWidth = '90%';
        fullImage.style.maxHeight = '90%';
        
        fullScreenDiv.appendChild(fullImage);
        document.body.appendChild(fullScreenDiv);
        
        // Click karke close karne ke liye
        fullScreenDiv.addEventListener('click', () => {
            fullScreenDiv.remove();
        });
    });
});
