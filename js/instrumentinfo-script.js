document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('instrument-modal');
    const instrumentName = document.getElementById('instrument-name');
    const instrumentParameter = document.getElementById('instrument-parameter');
    

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const info = JSON.parse(item.getAttribute('data-info'));

            // Check if the clicked item is already active
            if (item.classList.contains('active')) {
                item.classList.remove('active');
                modal.style.display = 'none';
            } else {
                // Remove active class from all items and hide modal
                galleryItems.forEach(i => i.classList.remove('active'));
                modal.style.display = 'none';

                // Add active class to the clicked item and show modal
                item.classList.add('active');
                instrumentName.textContent = info.name;
                instrumentParameter.textContent = info.parameter;
                

                // Position the modal below the clicked item
                const itemRect = item.getBoundingClientRect();
                modal.style.top = `${itemRect.bottom + window.scrollY + 10}px`;
                modal.style.left = `${itemRect.left + window.scrollX}px`;
                modal.style.display = 'block';
            }
        });
    });
});
