const models = require('../models');

const { Appointment } = models;

exports.list = async function (req, res) {
  const recordDetails = await Appointment.findAll({ include: { all: true, nested: true } })
  res.json(recordDetails)
}

exports.getById = async function (req, res) {
  const recordDetail = await Appointment.findOne({ where: { id: req.params.id }, include: { all: true, nested: true } })
  res.json(recordDetail)
}

exports.create = async function (req, res) {
  const created = await Appointment.create(req.body)
  res.json(created)
}

exports.update = async function (req, res) {
  const updated = await Appointment.update(req.body, { where: { id: req.params.id } })
  res.json(updated)
}

exports.delete = async function (req, res) {
  const result = await Appointment.destroy({ where: { id: req.params.id } })
  res.json(result)
}

