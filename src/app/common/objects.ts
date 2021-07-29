export interface user {
  name: string;
  profile: string;
  artWorks: artWork[];
  ficWorks: ficWork[]
}

export class artWork {
  constructor(image: string, link: string) {
    this.image = image;
    this.link = link;
  }

  image: string;
  link: string;
}

export class ficWork {

  constructor(summary: string, link: string) {
    this.summary = summary;
    this.link = link;
  }

  summary: string;
  link: string;
}
