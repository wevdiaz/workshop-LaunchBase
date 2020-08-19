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
    
    const firstAndLastPage = currentPage == 1  || currentPage == totalPages;
    const secondAndPenultimatePage = currentPage == 2 || currentPage == (totalPages - 1);

    const beginAndEndPages = firstAndLastPage || secondAndPenultimatePage;

    const pagesAfterSelectedPage = currentPage <= selectedPage + 2;
    const pagesBeforeSelectedPage = currentPage >= selectedPage - 2;

    if (beginAndEndPages || pagesAfterSelectedPage && pagesBeforeSelectedPage) {
        pages.push(currentPage)
    }
    
}

console.log(pages);



