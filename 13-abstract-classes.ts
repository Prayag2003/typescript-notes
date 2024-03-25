abstract class TakePhoto {
  constructor(public cameraMode: string, public shutterSpeed: number) {}
  abstract getPhoto(): void;
  getReelTime(): number {
    return 10;
  }
}

// NOTE: ERROR: cannot instantiate objects directly
// const hc = new TakePhoto("landscape", 100);

class Instagram extends TakePhoto {
  constructor(public cameraMode: string, public shutterSpeed: number) {
    // NOTE: Pass the required values in the super
    super(cameraMode, shutterSpeed);
  }
  getPhoto(): void {
    console.log("My Photo");
  }
}

const pb = new Instagram("landscape", 10);
pb.getReelTime();
