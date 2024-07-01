import { Canvas } from "./Canvas";

export class Context {
  private canvas: Canvas

  constructor(canvas: Canvas) {
    this.canvas = canvas
  }

  public reset(): boolean {
    return true;
  }
}