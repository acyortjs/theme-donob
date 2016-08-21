document.addEventListener('DOMContentLoaded', function() {

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
                if (thumb.src == image) {
                    return
                }
                document.body.removeChild(thumb)
            }

            var img = document.createElement('img');
            img.id = 'thumb';
            img.src = image;
            document.body.insertBefore(img, document.body.firstChild)
        }

    })

})
