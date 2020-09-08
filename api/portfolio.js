const projects = [
  {
    title:
    description:
    screenshot:
  },
    {
    title:
    description:
    screenshot:
  },
    {
    title:
    description:
    screenshot:
  }
]



module.exports = (req, res) => {
  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
  });
};