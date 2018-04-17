import React from 'react';
//
const List = (item) => {
	return (
		<tr>
			<td><img src={item.img} alt=""/>{item.username}</td>
			<td>{}</td>
			<td>{}</td>
			<td>{}</td>
		</tr>
	)
};
export default List;