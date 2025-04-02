module.exports = {
  // Lint & prettify all files on commit
  '*.{js,ts,tsx, jsx, css, scss,md,json}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `npm run lint --fix . ${filenames.join(' --file')}`
    // `npm test -- --findRelatedTests ${filenames.join(' ')}`
  ]
}
