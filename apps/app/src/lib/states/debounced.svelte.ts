/* eslint-disable unicorn/no-null */

export class Debounced {
  private timer: NodeJS.Timeout | null = null;

  public debounce(callback: () => void, delay: number): void {
    this.cancel();
    this.timer = setTimeout(() => {
      callback();
      this.timer = null;
    }, delay);
  }

  public cancel(): void {
    if (this.timer !== null) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  public destroy(): void {
    this.cancel();
  }
}
