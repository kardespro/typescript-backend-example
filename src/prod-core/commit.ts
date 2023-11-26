import { exec } from 'node:child_process'
import ch from 'chalk'
export function initCommit() {
    let d = Date.now()
    exec(`git add . && git commit -m "New Production Build # ${d}" `)
    console.log(`${ch.green(`Production # ${d}`)} :  Released`)

}

initCommit()