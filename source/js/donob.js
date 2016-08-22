document.addEventListener('DOMContentLoaded', function() {

    var images = [];

    document.querySelector('#posts').addEventListener('mouseover', function(e) {

        if (e.target.tagName == 'A') {

            var thumb = document.querySelector('#thumb');
            var image = e.target.getAttribute('data-thumb');

            if (!image) {
                if (thumb) {
                    document.body.removeChild(thumb)
                }
                return
            }

            if (thumb) {
                if (thumb.getAttribute('data-thumb') == image) {
                    return
                }
                document.body.removeChild(thumb)
            }

            var dimg = document.createElement('img');
            dimg.id = 'thumb';
            dimg.setAttribute('data-thumb', image)
            dimg.style.opacity = 0;
            document.body.insertBefore(dimg, document.body.firstChild)

            if (images.indexOf(image) > -1) {
                show(dimg, image)
            } else {

                var img = new Image();
                img.onload = function() {
                    images.push(image)
                    show(dimg, image)
                }
                img.src = image

            }
        }

    })

})

function show(img, src) {
    img.src = src;
    setTimeout(function() {
        full(img, img.width, img.height)
        img.style.opacity = 1;
    }, 0)
}

function full(img, w, h) {
    var _height = window.innerHeight,
        _width = window.innerWidth,
        ratio = h / w;

    if (_height / _width > ratio) {
        img.style.height = _height +'px';
        img.style.width = _height / ratio +'px';
    } else {
        img.style.width = _width +'px';
        img.style.height = _width * ratio +'px';
    }

    img.style.left = (_width - parseInt(img.style.width)) / 2 +'px';
    img.style.top = (_height - parseInt(img.style.height)) / 2 +'px';
}
