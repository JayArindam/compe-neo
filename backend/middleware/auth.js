import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;  // Look for Authorization header
    if (!authHeader) {
        return res.json({ success: false, message: 'Not Authorized Login Again' });
    }

    // Extract token from the Authorization header (which has the format "Bearer token_value")
    const token = authHeader.split(' ')[1]; // This will get the token part after "Bearer"
    
    if (!token) {
        return res.json({ success: false, message: 'Not Authorized Login Again' });
    }

    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id;  // Attach the decoded user ID to the request
        next();  // Proceed to the next middleware or route handler
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};

export default authMiddleware;