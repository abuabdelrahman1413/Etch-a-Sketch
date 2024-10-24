const container = document.getElementById('container');

function createGrid(size) {
    container.innerHTML = ''; // إفراغ الشبكة السابقة
    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black'; // التأثير عند تمرير الفأرة
        });
        container.appendChild(square);
    }
}

document.getElementById('resizeBtn').addEventListener('click', () => {
    const newSize = prompt('Enter new grid size (max 100):');
    if (newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert('Please enter a number between 1 and 100');
    }
});

createGrid(16); // الإنشاء الافتراضي لشبكة 16x16
