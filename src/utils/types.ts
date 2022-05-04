interface InsertPatch {
  type: 'insert'
  from: number
  text: string
}

interface RemovePatch {
  type: 'remove'
  from: number
  length: number
}

type Patch = InsertPatch | RemovePatch

export {
  InsertPatch,
  RemovePatch,
  Patch
}
