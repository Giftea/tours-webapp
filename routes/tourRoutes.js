const express = require('express');

const tourController = require('../controllers/tourController');

const {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
  checkbody,
} = tourController;

const router = express.Router();

router.param('id', (req, res, next, val) => {
  console.log(`Tour id is: ${val}`);
  next();
});

router.route('/').get(getAllTours).post(checkbody, createTour);
router.route('/:id').get(getTourById).patch(updateTour).delete(deleteTour);

module.exports = router;
