window.addEventListener('load', function() {
    var openModalBtn = document.getElementById('openModalBtn');
    var modal = document.getElementById('modal');
    var closeBtn = document.getElementsByClassName('close')[0];

    openModalBtn.addEventListener('click', function() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Disable scrolling
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Enable scrolling
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Enable scrolling
        }
    });
});
