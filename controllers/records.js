const models = require('../models');

const { Record } = models;

exports.list = async function (req, res) {
  const records = await Record.findAll({ include: { all: true, nested: true } })
  res.json(records)
}

exports.getById = async function (req, res) {
  const record = await Record.findOne({ where: { id: req.params.id }, include: { all: true, nested: true } })
  res.json(record)
}

exports.create = async function (req, res) {
  const created = await Record.create(req.body)
  res.json(created)
}

exports.update = async function (req, res) {
  const updated = await Record.update(req.body, { where: { id: req.params.id } })
  res.json(updated)
}

exports.delete = async function (req, res) {
  const result = await Record.destroy({ where: { id: req.params.id } })
  res.json(result)
}

