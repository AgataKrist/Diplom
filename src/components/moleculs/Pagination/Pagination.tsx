import React from "react";
import s from "./Pagination.module.css";
import cn from "classnames";
import { IPagination } from "../../../types";

interface IPaginat {
	pagination: IPagination;
	perPage: number;
	totalHeroes: any;
	paginate: (pageNumber: number) => void;
	nextPage: () => void;
	prevPage: (e: any) => void;
}
export const Pagination = ({
	pagination,
	perPage,
	totalHeroes,
	paginate,
	nextPage,
	prevPage,
}: IPaginat) => {
	let pageNumbers = [] as number[];
	for (let i: number = 1; i <= Math.ceil(totalHeroes / perPage); i++) {
		pageNumbers = [...pageNumbers, i];
	}
	return (
		<div className={s.pagination__wrapper}>
			<ul className={s.pagination_list}>
				<li
					onClick={e => prevPage(e)}
					className={cn(s.pagination__item, {
						[s.dn]: pagination.currentPage === 1,
					})}
				>
					prev
				</li>
				{pageNumbers.map(number => (
					<li
						onClick={() => paginate(number)}
						className={cn(s.pagination__item, {
							[s.active__item]: pagination.currentPage === number,
						})}
						key={number}
					>
						{number}
					</li>
				))}
				<li
					onClick={nextPage}
					className={cn(s.pagination__item, {
						[s.dn]:
							pagination.currentPage ===
							pageNumbers[pageNumbers.length - 1],
					})}
				>
					next
				</li>
			</ul>
		</div>
	);
};
