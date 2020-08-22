const currentPage = location.pathname;
const menuItems = document.querySelectorAll("header .links a");

for ( item of menuItems) {
    if (currentPage.includes(item.getAttribute("href"))) {
        item.classList.add("active");
    }
}


/* --- Pagination --- */

function paginate(selectedPage, totalPages) {

    let pages = [];
    let oldPage;
        
    for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
    
        const firstAndLastPage = currentPage == 1  || currentPage == totalPages;
        const secondAndPenultimatePage = currentPage == 2 || currentPage == (totalPages - 1);

        const beginAndEndPages = firstAndLastPage || secondAndPenultimatePage;

        const pagesAfterSelectedPage = currentPage <= selectedPage + 2;
        const pagesBeforeSelectedPage = currentPage >= selectedPage - 2;

        if (beginAndEndPages || pagesAfterSelectedPage && pagesBeforeSelectedPage) {
        
        if (oldPage && currentPage - oldPage > 2) {
            pages.push("...");
        }

        if (oldPage && currentPage - oldPage == 2) {
            pages.push(oldPage + 1);
        }

        pages.push(currentPage);

        oldPage = currentPage; 
             
        }    
    }

    return pages;
}

const pagination = document.querySelector(".pagination");

const filter = pagination.dataset.filter;
const page = +pagination.dataset.page;
const total = +pagination.dataset.total;

const pages = paginate(page, total);

let elements = "";

for (let page of pages) {
    
    if (String(page).includes("...")) {
        elements += `<span>${page}</span>`
    }
    else {
        if (filter) {
            elements += `<a href="?page=${page}&filter=${filter}">${page}</a>`
        }
        else {
            elements += `<a href="?page=${page}">${page}</a>`
        }
       
    }
}

pagination.innerHTML = elements;




