//your JS code here. If required.
// Get form elements
const title = document.getElementById('title');
const author = document.getElementById('author');
const isbn = document.getElementById('isbn');
const submitBtn = document.getElementById('submit');
const bookList = document.getElementById('book-list');

// Function to add book to the table
function addBook(e) {
    e.preventDefault();

    // Validate input fields
    if (title.value === '' || author.value === '' || isbn.value === '') {
        alert('Please fill in all fields');
        return;
    }

    // Create new row
    const row = document.createElement('tr');

    // Insert columns
    row.innerHTML = `
        <td>${title.value}</td>
        <td>${author.value}</td>
        <td>${isbn.value}</td>
        <td><button class="btn btn-danger btn-sm delete">Clear</button></td>
    `;

    // Append row to book list
    bookList.appendChild(row);

    // Clear input fields
    title.value = '';
    author.value = '';
    isbn.value = '';
}

// Function to delete a book from the table
function deleteBook(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this book?')) {
            const row = e.target.parentElement.parentElement;
            bookList.removeChild(row);
        }
    }
}

// Event listeners
submitBtn.addEventListener('click', addBook);
bookList.addEventListener('click', deleteBook);

