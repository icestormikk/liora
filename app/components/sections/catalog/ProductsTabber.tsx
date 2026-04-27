"use client"

import { ReactNode, useState } from "react";
import './productTabber.css';

export interface ProductsTabberProps {
	tabs: { id: string, label: string, content: ReactNode }[];
}

export default function ProductsTabber({ tabs } : ProductsTabberProps) {
	const [activeTabId, setActiveTabId] = useState(tabs[0].id);

	const currentTab = tabs.find((tab) => tab.id === activeTabId);

	if(!tabs || tabs.length === 0)
		return;

	return (
		<div className="product-tabber">
			<div className="product-tabber-navigation">
				{ tabs.map((tab) => (
					<button key={tab.id} onClick={() => setActiveTabId(tab.id)} className={`tab ${activeTabId === tab.id ? "active" : ""}`}>
						{tab.label}
					</button>
				)) }
			</div>
			{ currentTab && (
				<div>
					{ currentTab?.content }
				</div>
			) }
		</div>
	);
}