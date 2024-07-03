export class BaseEvent{
  declare propagationStopped: boolean
  declare defaultPrevented: boolean
  declare type: string
  declare target: object | null
  constructor() {
  }

  preventDefault() {
    this.propagationStopped = true
  }

  stopPropagation() {
    this.propagationStopped = true
  }
}