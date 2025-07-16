/**
 * Class 선언하기
 */

class SampleClass {}

class Game {
  name: string;
  country: string;
  download: number;

  constructor(name: string, country: string, download: number) {
    this.name = name;
    this.country = country;
    this.download = download;
  }

  introduce() {
    return `${this.name} 은 ${this.country} 에서 제작된 ${this.download} 명의 유저가 있습니다.`;
  }
}

const starcraft = new Game("스타크래프트", "USA", 1000000000);

const retVal = starcraft.introduce();

// starcraft.changeGame();
