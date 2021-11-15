module.exports = function registerfonttrick() {
  const fs = require('fs')
  const { COPYFILE_EXCL } = fs.constants;
  const { COPYFILE_FICLONE } = fs.constants;
  const path = require('path')

  fs.copyFileSync('./Roboto-Regular.ttf'),'/tmp/Roboto-Regular.ttf', COPYFILE_FICLONE|COPYFILE_EXCL)
  console.log("I pooped")

  return null
};
