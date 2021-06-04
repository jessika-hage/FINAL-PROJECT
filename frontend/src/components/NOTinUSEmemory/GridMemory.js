// import React, { useState } from 'react';

// import { MemoryCard } from './MemoryCard';

// export const GridMemory = ({
// 	list,
// 	visibleItems,
// 	setVisibleItems,
// 	finishedItems,
// 	checkItems,
// }) => {
// 	return (
// 		<div className='container'>
// 			<div className='row no-gutters'>
// 				{list.map((item, index) => (
// 					<MemoryCard
// 						key={item.id}
// 						className={`col-3 card ${
// 							visibleItems.includes(index) ? 'grid-card-show' : ''
// 						} ${
// 							finishedItems.includes(index)
// 								? 'grid-card-show grid-card-finished'
// 								: ''
// 						}`}
// 						onClick={() => {
// 							if (!finishedItems.includes(index)) {
// 								switch (visibleItems.length) {
// 									case 0:
// 										setVisibleItems([index]);
// 										break;
// 									case 1:
// 										if (visibleItems[0] !== index) {
// 											setVisibleItems(visibleItems.concat(index));
// 											checkItems(visibleItems[0], index);
// 										}
// 										break;
// 									case 2:
// 										setVisibleItems([index]);
// 										break;
// 									default:
// 										setVisibleItems([]);
// 								}
// 							}
// 						}}
// 						imgSource={item.url}
// 						imgDesc={item.description}
// 					/>
// 				))}
// 			</div>
// 		</div>
// 	);
// };

// GridMemory.defaultProps = {
// 	list: [],
// };
