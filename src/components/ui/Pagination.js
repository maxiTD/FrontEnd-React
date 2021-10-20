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
            {pages.map((x) =>
                <Pagination.Item className='height-40' key={x}  active={selected == x}>
                    <a onClick={() => paginate(x)} role="button">{x}</a>
                </Pagination.Item>
            )}
        </Pagination>
    );
}