`use strict`;
//public node-module
const express = require('express');
const router = express.Router();

//attach service with controller
const {getAllStudent, upsertStudent, deleteStudent} = require(`../service/studentDetail`);
router.get(`/all-student`, getAllStudent);
router.put(`/upsert-student/:id`, upsertStudent);
router.delete(`/delete-student/:id`, deleteStudent);

module.exports = router;