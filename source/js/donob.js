document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('#posts').addEventListener('mouseover', function(e) {
        if (e.target.tagName == 'A' && e.target.getAttribute('data-thumb')) {
            var oldimg = document.querySelector('#thumb');
            if (oldimg) {
                document.body.removeChild(oldimg)
            }

            var img = document.createElement('img');
            img.id = 'thumb';
            img.onload = function() {
                document.body.insertBefore(img, document.body.firstChild)
            }
            img.src = e.target.getAttribute('data-thumb'); 
        }
    })

})
