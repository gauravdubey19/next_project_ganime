export interface AnimeCardProp {
  mal_id: number;
  url: string;
  images: { jpg: { image_url: string; large_image_url: string } };
  title_english: string;
  type: string;
  episodes: number;
  rank: number;
  genres: [
    {
      mal_id: number;
      // type: string;
      name: string;
      // url: string;
    }
  ];
}

export interface AnimeInfoProp {
  mal_id: number;
  url: string;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  trailer: {
    youtube_id: string;
    url: string;
    embed_url: string;
    images: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
      maximum_image_url: string;
    };
  };
  approved: boolean;
  titles: [
    {
      type: string;
      title: string;
    }
  ];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string;
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: {
    from: string;
    to: string;
    prop: {
      from: {
        day: number;
        month: number;
        year: number;
      };
      to: {
        day: number;
        month: number;
        year: number;
      };
      string: string;
    };
  };
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: {
    day: string;
    time: string;
    timezone: string;
    string: string;
  };
  producers: [
    {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }
  ];
  licensors: [
    {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }
  ];
  studios: [
    {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }
  ];
  genres: [
    {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }
  ];
  explicit_genres: [
    {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }
  ];
  themes: [
    {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }
  ];
  demographics: [
    {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }
  ];
}

export interface AnimeSliderPicture {
  mal_id: number;
  images: { jpg: { image_url: string; large_image_url: string } };
  // trailer: { images: { maximum_image_url: string } };
}

export type AnimeSliderPicturesProps = AnimeSliderPicture[];

export interface AnimePicture {
  jpg: { image_url: string; large_image_url: string };
}

export interface AnimePicturesProps {
  length: number;
  [index: number]: AnimePicture;
}
export interface AnimeCardProps {
  data: [];
  head: string;
}

export interface AnimeEpisodesProp {
  mal_id: number;
  title: string;
  episode: string;
  url: string;
  images: { jpg: { image_url: string } };
}
export interface AnimeStreamProp {
  info: {
    title: string;
  };
  plyr: { main: string; backup: string };
  nspl: { main: string; backup: string };
}
