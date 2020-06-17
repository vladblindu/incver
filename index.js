#!/usr/bin/env node

const path = require('path')
const fs = require('fs')

const cwd = process.cwd()
const pkgPath = path.join(cwd, 'package.json')
const pkg = require(pkgPath)

let [major, minor, patch] = pkg.version.split('.').map(v => parseInt(v))

switch(process.argv[2]){
    case 'M':
        major++
        break
    case 'm':
        minor++
        break
    default:
        patch++
}

pkg.version = [major, minor, patch].map(v => v.toString()).join('.')

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2))

console.log(`Version updated to: \x1b[32m${pkg.version}\x1b[0m`)