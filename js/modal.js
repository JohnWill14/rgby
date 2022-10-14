function inicialModal(id, video){
    const modal = document.getElementById(id);



    const modalClass = modal.firstElementChild;
    const iframe = modalClass.firstElementChild;

    
    iframe.src = video;
    console.log(iframe);
    modal.classList.add('show');
}


function fecharModal(id){
    const modal = document.getElementById(id);
    modal.classList.remove('show');
    stopVideos();
}

var stopVideos = function () {
	var videos = document.querySelectorAll('iframe, video');
	Array.prototype.forEach.call(videos, function (video) {
		if (video.tagName.toLowerCase() === 'video') {
			video.pause();
		} else {
			var src = video.src;
			video.src = src;
		}
	});
};