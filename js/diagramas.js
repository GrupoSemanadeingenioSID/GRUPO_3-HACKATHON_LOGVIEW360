

    const basePath = 'Diagramas/';
    const imagePrefix = 'Diagrama (';
    const imageSuffix = ').png';
    const totalImages = 1000;
    
 
    const imageInput = document.getElementById('imageId');
    const loadBtn = document.getElementById('loadImage');
    const imagePreview = document.getElementById('imagePreview');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close-btn');
    const prevBtn = document.getElementById('prevImage');
    const nextBtn = document.getElementById('nextImage');
    const imageNumber = document.getElementById('imageNumber');
    
    let currentImageId = 0;
    
   
    function loadImage(id) {
        currentImageId = Math.min(Math.max(0, id), totalImages - 1); 
        imageInput.value = currentImageId; 
        
        
        const fileNumber = currentImageId + 1;
        const imgUrl = `${basePath}${imagePrefix}${fileNumber}${imageSuffix}`;
        
        const img = new Image();
        
        img.onload = function() {
            imagePreview.innerHTML = `<img src="${imgUrl}" alt="Diagrama ${currentImageId}">`;
            imageNumber.textContent = `${currentImageId}/${totalImages - 1}`; 
            modalImg.src = imgUrl;
        };
        
        img.onerror = function() {
            imagePreview.innerHTML = `<p>Diagrama ${currentImageId} no disponible</p>`;
            modalImg.src = '';
        };
        
        img.src = imgUrl;
    }
    
    
    loadBtn.addEventListener('click', () => {
        loadImage(parseInt(imageInput.value));
    });
    
    imageInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            loadImage(parseInt(imageInput.value));
        }
    });
    
    
    loadBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = `${basePath}Diagrama${currentImageId}.${imageFormat}`;
    });
    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    
    prevBtn.addEventListener('click', () => {
        loadImage(currentImageId - 1);
        modalImg.src = `${basePath}Diagrama${currentImageId}.${imageFormat}`;
    });
    
    nextBtn.addEventListener('click', () => {
        loadImage(currentImageId + 1);
        modalImg.src = `${basePath}Diagrama${currentImageId}.${imageFormat}`;
    });
    
    
    loadImage(0);
