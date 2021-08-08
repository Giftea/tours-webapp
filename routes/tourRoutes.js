const express = require('express');

const tourController = require('../controllers/tourController');

const {
  getAllTours,
  aliasTopTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
  getMonthlyPlan,
  getTourStat,
} = tourController;

const router = express.Router();

router.param('id', (req, res, next, val) => {
  next();
});
router.route('/tour-stats').get(getTourStat);
router.route('/monthly-plan/:year').get(getMonthlyPlan);
router.route('/top-5-cheap').get(aliasTopTours, getAllTours);
router.route('/').get(getAllTours).post(createTour);
router.route('/:id').get(getTourById).patch(updateTour).delete(deleteTour);

module.exports = router;
