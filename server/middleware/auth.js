import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized: No token provided" });

    const decodedData = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    req.userId = decodedData?.id || decodedData?._id;
    req.userRole = decodedData?.role;

    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

export default auth;
