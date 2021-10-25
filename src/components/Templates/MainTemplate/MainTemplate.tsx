import React, { useState } from "react";

import s from "./MainTemplate.module.css";
import cn from "classnames";
import { Header } from "../../moleculs/Header";
import { scrollEvent } from "../../../helper";

interface IMainTemplate {
	main: React.ReactNode;
	text?: string;
	about?: string;
	fight?: boolean;
}

export const MainTemplate = ({ main, text, about, fight }: IMainTemplate) => {
	const [scroll, setScroll] = useState(0);

	return (
		<>
			<div className={s.container__page}>
				<div className={s.bacground__circles}>
					<div className={cn(s.circle, s.red, s.big)}></div>
					<div
						className={cn(s.circle, s.white, s.small, s.top)}
					></div>
					<div
						className={cn(s.circle, s.white, s.small, s.bottom)}
					></div>
					<div className={cn(s.circle, s.red, s.smallest)}></div>
					<div className={cn(s.circle, s.gray, s.top)}></div>
					<div className={cn(s.circle, s.gray, s.bottom)}></div>
				</div>
				<div
					onScroll={(e: any) => scrollEvent(e, setScroll)}
					className={s.mainPage}
					id="main"
				>
					<Header top={scroll} />
					<div className={s.main_content}>
						{!fight && (
							<div className={s.intro}>
								<div className={s.intro_inner}></div>
								<div className={s.container}>
									<h1 className={s.intro_title}>{text}</h1>
									<p className={s.about}>{about}</p>
								</div>
							</div>
						)}
						{main}
					</div>
				</div>
			</div>
		</>
	);
};
