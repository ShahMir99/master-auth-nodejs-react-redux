import express from "express";

import {verifyUserToken} from "../middleware/verifyUserToken.js"
import {roleAccess} from "../middleware/roleAccess.js"
import {deleteUser, undoDeleteUser, deleteUserPermanent, toggleblockUserAccount} from "../controllers/user.controller.js"

const router = express.Router();

//Admin Actions Routes
router.patch("/delete-user/:id", verifyUserToken, roleAccess(['admin']), deleteUser);
router.patch("/undo-delete-user/:id", verifyUserToken, roleAccess(['admin']),  undoDeleteUser);
router.delete("/delete-user/:id/permanent", verifyUserToken, roleAccess(['admin']), deleteUserPermanent);
router.patch("/toggle-block-user/:id", verifyUserToken, roleAccess(['admin']), toggleblockUserAccount);


export default router;
