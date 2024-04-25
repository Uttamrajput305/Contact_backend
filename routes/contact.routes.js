const express= require("express");
const router= express.Router();
const controllerContact = require("../controllers/contact.controller");

router.route("/").get(controllerContact.getContact).post(controllerContact.createContact);

router.route("/:id").get(controllerContact.getContactById).put(controllerContact.updateContact).delete(controllerContact.deleteContact);

// router.route("/").post(controllerContact.createContact);
// router.route("/:id").put(controllerContact.updateContact);
// router.route("/:id").delete(controllerContact.deleteContact);

module.exports= router;