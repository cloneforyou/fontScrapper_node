const { getDomainsFonts } = require('./service')

const parseFonts = async (req, res) => {
  const domains = (req.body.domains || []).slice(0, 100)

  try {
    const result = await getDomainsFonts(req.body.domains, req.body.deep, req.body.quantityOfPages)

    res.status(200).json(result)
  } catch (error) {
    res.status(500).send('Error when scraping the websites.')
  }
}

module.exports = {
  parseFonts
}
