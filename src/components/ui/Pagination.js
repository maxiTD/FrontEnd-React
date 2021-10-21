import React from 'react';
import { Pagination } from 'react-bootstrap';
import './Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Paginate = ({totalPages, paginate, selected}) => {
    var pages = [];

    for (var i = 1; i <= totalPages; i++) {
        if (i == 1 || (i <= selected + 3 && i >= selected - 3) || i == totalPages) {
            pages.push(i);
        }
    }

    return (
        <Pagination>
            {pages.map((page) =>
                <Pagination.Item className='height-40' key={page}  active={selected == page}>
                    <a onClick={() => paginate(page)} role="button">{page}</a>
                </Pagination.Item>
            )}
        </Pagination>
    );
}