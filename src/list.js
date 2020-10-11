import Pagination from './app/Pagination';

const items = document.querySelectorAll('[data-value="download"]');
const main = document.querySelector('.list');
const pagination = new Pagination([...items]);

pagination.createPagination(main);
