const models = require('../models');

const { RecordType } = models;

exports.list = async function (req, res) {
  const recordTypes = await RecordType.findAll({ })
  res.json(recordTypes)
}

exports.getById = async function (req, res) {
  const recordType = await RecordType.findOne({ where: { id: req.params.id } })
  res.json(recordType)
}

exports.create = async function (req, res) {
  const created = await RecordType.create(req.body)
  res.json(created)
}

exports.update = async function (req, res) {
  const updated = await RecordType.update(req.body, { where: { id: req.params.id }})
  res.json(updated)
}

exports.delete = async function (req, res) {
  const result = await RecordType.destroy({ where: { id: req.params.id } })
  res.json(result)
}

