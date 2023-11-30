function changeImage(imagePath) 
{
    document.getElementById('displayedImage').src = imagePath;
}

function changeImageSize() 
{
    var width = document.getElementById('widthInput').value + 'px';
    var height = document.getElementById('heightInput').value + 'px';
    document.getElementById('displayedImage').style.width = width;
    document.getElementById('displayedImage').style.height = height;
}

function changeImageBorder() 
{
    var border = document.getElementById('borderInput').value + 'px';
    document.getElementById('displayedImage').style.border = border + ' solid black';
}

function changeAltText()
{
    var altText = document.getElementById('altTextInput').value;
    document.getElementById('displayedImage').alt = altText;
}
