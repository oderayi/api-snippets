module.exports = {
  reject: [
    // Upgrading past husky@4 to involves a full config migration with no current and apparent benefit.
    // So we are just sticking to husky@4.x.x for the time being.
    'husky',
    // Transpiler currently fails. TODO: Story to investigate and fix.
    'openapi-typescript'
  ]
}
