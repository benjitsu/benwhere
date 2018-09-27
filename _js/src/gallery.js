var photoNumber = 22;
var thumbPath = '/photos/thumbs/';
var fullPath = '/photos/full/';

var grid = document.getElementById('#photoGrid');

function makeGallery(){
var galleryHTML;
for (i=1; i<photoNumber; i++){
    galleryHTML += '<a class="tile" href="' + fullPath + i + '.jpg">' + '<img src="' + thumbPath + i + '.jpg">' + '</a>';
}
return galleryHTML;
};

if (grid){
grid.innerHTML = makeGallery();
};