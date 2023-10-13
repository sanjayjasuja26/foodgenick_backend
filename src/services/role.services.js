

module.exports = function (req,res,next) {
    if(req.userInfo){
        userRole = parseInt(req.userInfo.roleId)
        if(userRole == 1) {
                next();
        } else{
            return res.status(401).json({ success: false, data: null, message: "User Unauthorized" })
        }
    }
}