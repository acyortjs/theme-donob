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
                dimg.style.opacity = 1;
                dimg.src = image;
            } else {

                var img = new Image();
                img.onload = function() {
                    images.push(image)
                    dimg.style.opacity = 1;
                    dimg.src = image;
                }
                img.src = image

            }
        }

    })

})
