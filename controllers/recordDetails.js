const models = require('../models');

const { RecordDetail } = models;

exports.list = async function (req, res) {
  const recordDetails = await RecordDetail.findAll({ include: { all: true, nested: true } })
  res.json(recordDetails)
}

exports.getById = async function (req, res) {
  const recordDetail = await RecordDetail.findOne({ where: { id: req.params.id }, include: { all: true, nested: true } })
  res.json(recordDetail)
}

exports.create = async function (req, res) {
  const created = await RecordDetail.create(req.body)
  res.json(created)
}

exports.update = async function (req, res) {
  const updated = await RecordDetail.update(req.body, { id: req.params.id })
  res.json(updated)
}

exports.delete = async function (req, res) {
  const result = await RecordDetail.destroy({ where: { id: req.params.id } })
  res.json(result)
}

