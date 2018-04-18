var recent = () => fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent').then((res) => res.json(res));
var alltime = () => fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime').then((res) => res.json(res));
// recent();
// alltime();
export default {
	recent,
	alltime
};
// module.export={recent,alltime};