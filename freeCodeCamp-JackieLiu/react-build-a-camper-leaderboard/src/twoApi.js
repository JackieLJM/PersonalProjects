var recent = () => fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent').then((res) => res.json(res)).then((data) => JSON.stringify(data)).then((data) => console.log(data));
var alltime = () => fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime').then((res) => res.json(res)).then((data) => console.log(data));
// recent();
// alltime();
export default {
	recent,
	alltime
};
// module.export={recent,alltime};