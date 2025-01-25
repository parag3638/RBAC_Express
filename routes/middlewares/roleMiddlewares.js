
const authorizeRoles = (... allowedRoles) => {

    return (req, res, next) => {
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).send('You are not authorized to access this route');
        }
        next();
    }
};

module.exports = authorizeRoles;

