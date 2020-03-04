import ErrorResponse from '../utils/errorResponse';
import asyncHandler from '../middlewares/async';
import User from '../models/User';

/**
 * @desc Register user
 * @route GET /api/v1/auth/register
 * @access Public
 */
const register = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password
  });

  const token = user.getSignedJwtToken();

  res.status(200).json({ success: true, token });
});

export { register };
