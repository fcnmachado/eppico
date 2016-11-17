module.exports = (req, res,next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Content-Type, x-access-token, Authorization');
	res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,HEAD');
	next();
}
