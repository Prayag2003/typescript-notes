interface TakePhoto {
  filter: string;
  burst: number;
  cameraMode: string;
}

interface Story {
  createMyStory(): void;
}

class Instagram implements TakePhoto, Story {
  constructor(
    public filter: string,
    public burst: number,
    public cameraMode: string
  ) {
    this.filter = filter;
    this.burst = burst;
  }

  createMyStory(): void {
    console.log("Amazing Story");
  }
}

export {};
