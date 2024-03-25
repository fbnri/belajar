// next&previousbtn
const cardContainer = document.getElementById('cardContainer');
    const btnNext = document.getElementById('btnNext');
    const btnPrevious = document.getElementById('btnPrevious');
    const scrollStep = 400; // Jumlah scroll yang diinginkan

    btnNext.addEventListener('click', function() {
        cardContainer.scrollBy({
            top: 0,
            left: scrollStep,
            behavior: 'smooth'
        });
    });

    btnPrevious.addEventListener('click', function() {
        cardContainer.scrollBy({
            top: 0,
            left: -scrollStep,
            behavior: 'smooth'
        });
    });