const express = require('express');

const tourController = require('../controllers/tourController');

const {
  getAllTours,
  aliasTopTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
} = tourController;

const router = express.Router();

router.param('id', (req, res, next, val) => {
  next();
});
router.route('/top-5-cheap').get(aliasTopTours, getAllTours);
router.route('/').get(getAllTours).post(createTour);
router.route('/:id').get(getTourById).patch(updateTour).delete(deleteTour);

module.exports = router;
