function updateGallery(counter) {
    myBox.innerHTML = counter;
    myBox.style.backgroundImage = "url(" + arrayOfSimpsons[counter] + ")";
}