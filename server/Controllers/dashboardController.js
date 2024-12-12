module.exports.getTime = (req, res) => {
    console.log(123123);
    const token = req.header('Authorization'); // Get the token from the Authorization header
    console.log(token);
}