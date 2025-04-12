function openModal(title, description, price, image) {
    const modal = document.getElementById('product-modal');
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;
    document.getElementById('modal-price').innerText = `Price: ${price}`;
    document.getElementById('modal-image').src = image;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('product-modal');
    modal.style.display = 'none';
}