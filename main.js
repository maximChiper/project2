
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.previous');
    const fieldsets = document.querySelectorAll('fieldset');

    let currentSlide = 0;

    nextButton.addEventListener('click', () => {
        navigate(+1);
    });

    prevButton.addEventListener('click', () => {
        navigate(-1);
    });

    function navigate(direction) {
        const currentFieldset = fieldsets[currentSlide];
        currentFieldset.style.opacity = '0';
        currentFieldset.style.display = 'none';

        currentSlide = (currentSlide + direction + fieldsets.length) % fieldsets.length;

        const nextFieldset = fieldsets[currentSlide];
        nextFieldset.style.opacity = '1';
        nextFieldset.style.display = 'block';
    }
