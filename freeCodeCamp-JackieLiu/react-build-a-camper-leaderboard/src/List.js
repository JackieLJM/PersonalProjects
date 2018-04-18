import React from 'react';
//
const List = (item, i) => {
	return (
		<tr>
			<td>{i+1}</td>
			<td><img src={item["img"]} alt=""/>{item.username}</td>
			<td>{item.recent}</td>
			<td>{item.alltime}</td>
		</tr>
	)
};
export default List;