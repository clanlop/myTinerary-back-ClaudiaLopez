import express from 'express';
import authController from '../controllers/auth.Controller.js';
import { accountExistsSignup } from '../middlewares/auth/accountExistsSignup.middleware.js';
import { accountExistsSignin } from '../middlewares/auth/accountExistsSignin.middleware.js';
import { accountHasBeenVerified } from '../middlewares/auth/accountHasBeenVerified.middleware.js';
import { passwordIsOk } from '../middlewares/auth/passwordIsOk.middleware.js';
import passport from '../middlewares/passport.js';
const router = express.Router();
const {signup,signin,signout,token,googleSignin}=authController

router.post('/signup',
/*validator(validaterSignup),*/
accountExistsSignup,signup)

router.post('/signin',
/* validator(validateSignin), */
accountExistsSignin,
 accountHasBeenVerified, 
 passwordIsOk,
 signin),
 
router.post('/google',googleSignin)
router.post('/signout', passport.authenticate('jwt', {session: false}),signout)
router.post('/token', passport.authenticate('jwt', { session: false }), token)

export default router