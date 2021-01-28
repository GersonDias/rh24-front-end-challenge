import machines from '../data/machines.json'

export async function getMachines() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(JSON.stringify(machines))
    }, 2000)
  })
}