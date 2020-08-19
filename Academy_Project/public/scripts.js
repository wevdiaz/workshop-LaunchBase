const currentPage = location.pathname;
const menuItems = document.querySelectorAll("header .links a");

for ( item of menuItems) {
    if (currentPage.includes(item.getAttribute("href"))) {
        item.classList.add("active");
    }
}


/* --- Pagination --- */
let totalPages = 46;

let selectedPage = 15;

let pages = [];

for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
    
    if (currentPage == 1  || currentPage == totalPages) {
        pages.push(currentPage);
    }

    if (currentPage == 2 || currentPage == (totalPages - 1)) {
        pages.push(currentPage);
    }
}

console.log(pages);



