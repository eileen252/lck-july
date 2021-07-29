import { artWork, user } from "./objects";

export class defaultUser implements user {
  name = 'defaultUser';
  profile = 'https://img.poipiku.com/user_img01/003269302/004893802_008432850_EsTJDDEEr.jpeg_640.jpg';
  artWorks = [new artWork('https://img.poipiku.com/user_img01/003269302/004893802_008432850_EsTJDDEEr.jpeg_640.jpg', 'https://img.poipiku.com/user_img01/003269302/004893802_008432850_EsTJDDEEr.jpeg_640.jpg')];
  ficWorks = [];
}

export class eileen implements user {
  name = 'eileen';
  profile = 'https://img.poipiku.com/user_img01/003269302/004893802_008432850_EsTJDDEEr.jpeg_640.jpg';
  artWorks = [new artWork('https://img.poipiku.com/user_img01/003269302/004893802_008432850_EsTJDDEEr.jpeg_640.jpg', 'https://poipiku.com/IllustViewPcV.jsp?ID=3269302&TD=4893802'),
    new artWork('https://img.poipiku.com/user_img01/003269302/004893802_T6d3uAg2Z.png_640.jpg', 'https://poipiku.com/IllustViewPcV.jsp?ID=3269302&TD=4893802'),
    new artWork('https://img.poipiku.com/user_img01/003269302/004893802_008416835_I6NqpDAC2.jpeg_640.jpg', 'https://poipiku.com/IllustViewPcV.jsp?ID=3269302&TD=4893802')];
  ficWorks = [];
}
