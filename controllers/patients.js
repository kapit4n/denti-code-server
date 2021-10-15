const { Op } = require('sequelize');
const models = require('../models');

const { Patient, ClientFile } = models;

exports.list = async function (req, res) {
  const patients = await Patient.findAll({ include: ClientFile })
  res.json(patients)
}

exports.getById = async function (req, res) {
  const patient = await Patient.findOne({ where: { id: req.params.id } })
  res.json(patient)
}

exports.create = async function (req, res) {
  const created = await Patient.create(req.body)
  res.json(created)
}

exports.update = async function (req, res) {
  const updated = await Patient.update(req.body, { id: req.params.id })
  res.json(updated)
}

exports.delete = async function (req, res) {
  const result = await Patient.destroy({ where: { id: req.params.id } })
  res.json(result)
}

