const roleAuth = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.userRole)) {
      return res.status(403).json({ message: "Forbidden: You do not have the required permissions" });
    }
    next();
  };
};

export default roleAuth;
