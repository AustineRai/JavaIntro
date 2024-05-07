var backgroundColors = ['#E78895', '#6AD4DD'];
var currentColorIndex = 0;

function changeImage() {
    var image1 = document.getElementById('image1');
    var image2 = document.getElementById('image2');
    var currentImage = image1.classList.contains('d-none') ? image2 : image1;

    image1.classList.toggle('d-none');
    image2.classList.toggle('d-none');
    currentImage.style.display = 'block';

    document.body.style.backgroundColor = backgroundColors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % backgroundColors.length;
}
